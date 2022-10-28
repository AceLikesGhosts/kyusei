import Logger from '../../logger/Logger';
import { Client, ClientOptions, Collection, Interaction, Routes, SlashCommandBuilder } from 'discord.js';
import { CommandBase, CommandData } from '../../annotations/Command';
import { EventBase, EventData } from '../../annotations/Event';
import { readdirSync, lstatSync } from 'fs';
import { join } from 'path';

interface KyuOptions extends ClientOptions
{
    mobile?: boolean;
    commands?: {
        path?: string;
        commandList?: { data: CommandData, base: CommandBase; }[];
    };
    events?: {
        path?: string;
        eventList?: { data: EventData, base: EventBase; }[];
        disableKyuEvents?: boolean;
    };
    logger?: {
        filePath?: string;
        writeToFile?: boolean;
        debug?: boolean;
    };
}

interface SharedData
{
    metadata: CommandData;
    handler: CommandBase;
}

/**
 * @description Kyu Client, an extension of a normal Discord.JS {Client}
 * @see {Client}
 */
class Kyu<Ready extends boolean = boolean> extends Client<Ready>
{
    public opts: KyuOptions;
    public commands: Collection<string, SharedData> | null;
    public logger: Logger | undefined;
    private useKyuEvents: boolean = true;

    constructor(opts: KyuOptions)
    {
        super(opts);

        this.opts = opts;
        this.commands = null;

        if(this.opts.mobile)
            this.opts.ws!.properties!.browser = 'Discord Android';

        if(this.opts.logger?.debug && !this.opts.logger.writeToFile)
            this.logger = new Logger();

        if(this.opts.logger?.writeToFile && !this.opts.logger.filePath)
            throw new Error('Bad argument passed : Cannot write to file without a path!');

        if(this.opts.logger?.writeToFile && this.opts.logger.filePath)
            this.logger = new Logger({ writeToFile: this.opts.logger.writeToFile, filePath: this.opts.logger.filePath });
    }

    private shouldLog(): boolean
    {
        if(this.opts.logger?.debug)
            return true;

        if(this.opts.logger?.writeToFile && this.opts.logger.filePath)
            return true;

        if(this.opts.logger?.writeToFile && !this.opts.logger.filePath)
            return false;

        return false;
    }

    private async findCommands(dir?: string): Promise<void>
    {
        if(this.opts.commands && this.opts.commands.path || !this.opts.commands)
        {
            dir = dir ? dir : join(__dirname, '..', 'commands');
            const files = readdirSync(dir);

            for(const file of files)
            {
                const path: string = `${ dir }/${ file }`;

                if(file.endsWith('.js') || file.endsWith('.ts'))
                {
                    const baseCommand: new () => CommandBase = await import(path);
                    const registeredCommand: CommandBase = new baseCommand();
                    const metadata: CommandData = Reflect.getMetadata('data', registeredCommand);

                    if(this.shouldLog())
                        this.logger?.info('Registered command ' + metadata.name + '.');

                    this.commands?.set(metadata.name, { metadata, handler: registeredCommand });
                }
                else if(lstatSync(path).isDirectory())
                {
                    this.findCommands(path);
                }
            }
        }

        if(this.opts.commands?.commandList)
        {
            for(let i: number = 0; i < this.opts.commands.commandList.length; i++)
            {
                if(this.shouldLog())
                    this.logger?.info('Registered command ' + this.opts.commands.commandList[i].data.name + '.');

                this.commands?.set(this.opts.commands.commandList[i].data.name, { metadata: this.opts.commands.commandList[i].data, handler: this.opts.commands.commandList[i].base });
            }
        }
    }

    private async findEvents(dir?: string): Promise<void>
    {
        if(this.useKyuEvents === false)
            this.useKyuEvents = false;

        if(this.opts.events && this.opts.events.path || !this.opts.events)
        {
            dir = dir ? dir : join(__dirname, '..', 'events');
            const files = readdirSync(dir);

            for(const file of files)
            {
                const path: string = `${ dir }/${ file }`;

                if(file.endsWith('.js') || file.endsWith('.ts'))
                {
                    const baseEvent: new () => EventBase = await import(path);
                    const registeredEvent: EventBase = new baseEvent();
                    const metadata: EventData = Reflect.getMetadata('data', registeredEvent);

                    if(metadata.name === 'interactionCreate')
                    {
                        this.useKyuEvents = false;
                        if(this.shouldLog())
                            this.logger?.warn('Disabling built in command handling, event ' + metadata.name + '.');
                    }

                    if(this.shouldLog())
                        this.logger?.info('Registered event ' + metadata.name + '.');

                    this.on(metadata.name, (...args) => registeredEvent.execute(this as Kyu<Ready>, ...args));
                }
                else if(lstatSync(path).isDirectory())
                {
                    this.findEvents(path);
                }
            }
        }

        if(this.opts.events && this.opts.events?.eventList)
        {
            for(let i: number = 0; i < this.opts.events.eventList.length; i++)
            {
                this.on(this.opts.events.eventList[i].data.name, (...args) => this.opts!.events!.eventList![i].base.execute(this as Kyu<Ready>, ...args));
            }
        }
    }

    private async registerOurHandlers(): Promise<void> 
    {
        this.on('interactionCreate', (i: Interaction) =>
        {
            if(i.isAutocomplete()) this.emit('autocomplete', i);
            if(i.isButton()) this.emit('buttonClick', i);
            if(i.isChatInputCommand()) this.emit('chatInputCommand', i);
            if(i.isModalSubmit()) this.emit('modalSubmit', i);
            if(i.isUserContextMenuCommand()) this.emit('userContextMenuCommand', i);
            if(i.isSelectMenu()) this.emit('selectMenu', i);
            if(i.isCommand())
            {
                const command: SharedData | undefined = this.commands?.get(i.commandName);

                if(!command)
                    return;

                try
                {
                    command.handler.execute(i);
                }
                catch(err: unknown)
                {
                    console.warn(`Failed to execute command ${ command.metadata.name } : Ran by ${ i.user.tag }\nError: ${ err }`);
                }
            }
        });
    }

    public init(token: string): string
    {
        this.findEvents();
        this.findCommands();
        if(this.useKyuEvents)
            this.registerOurHandlers();

        this.login(token);
        return token;
    }

    public async publishCommands(opts: { global?: boolean, clientId?: string, guilds?: { selective: { id: string; }; }; }): Promise<void>
    {
        if(!this.commands || typeof this.commands === undefined)
            throw new Error('Unable to publish commands if the commands collection is empty.');

        const commandBuilders: SlashCommandBuilder[] = [];

        this.commands?.forEach(async (val) =>
        {
            const { metadata } = val;

            const builder = new SlashCommandBuilder()
                .setName(metadata.name)
                .setDescription(`${ metadata.description || 'No Description Provided' }`)
                .setDefaultMemberPermissions(metadata.permission?.type);

            commandBuilders.push(builder);
        });

        const JSONMappedCommands = commandBuilders.map(command => command.toJSON());

        if(opts.global === false || typeof opts.global === undefined)
        {
            if(opts?.guilds?.selective && opts.guilds.selective.id)
            {
                (await this.guilds.fetch(opts.guilds.selective.id)).commands.set(JSONMappedCommands);
            }

        }
        else await this.rest.put(
            Routes.applicationCommands(opts.clientId!),
            { body: JSONMappedCommands }
        );
    }
}

export default Kyu;
export type { KyuOptions, SharedData };