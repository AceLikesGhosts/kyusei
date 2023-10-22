import { KyuInstance, RegisterType } from '../types/Kyu.type';
import { isClass } from '../util/Assertions';
import { ClientEvents, type Client, type SlashCommandBuilder } from 'discord.js';
import { getKeys } from '../util/Registers';
import Logger from '../util/Logger';

type AsyncFunction = (...args: any[]) => Promise<any>;
type OmitFunctions<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? never : T[K]
};

/**
 * An implementation of [KyuInstance](../types/Kyu.type.ts)
 * @see KyuInstance
 */
export class Kyu implements KyuInstance {
    private _client: Client;
    private commandMap: Map<string, OmitFunctions<SlashCommandBuilder> & { execute: Function | AsyncFunction; }> = new Map();
    private runningCommandListener: boolean = false;

    public constructor(client: Client) {
        if(!client || typeof client !== 'object') {
            throw 'Client was invalid.';
        }

        this._client = client;
    }

    /**
     * Registers a command or event class/object.
     * @param type The type of class, or object, to register.
     * @param toRegister The class or object to register.
     * @returns 
     */
    public register<T>(type: RegisterType, toRegister: T): void {
        if(type === RegisterType.Command && this.runningCommandListener) {
            this.registerCommandListener();
            this.runningCommandListener = true;
        }

        if(isClass(toRegister)) {
            toRegister = new toRegister(this._client);
        }

        const keys = getKeys(toRegister, (key, instance) => {
            return !!Reflect.getMetadata(`kyusei::${ type.toString().toLowerCase() }`, instance[key] as object);
        });

        if(type === RegisterType.Command) {
            keys.forEach((key) => {
                const metadata: OmitFunctions<SlashCommandBuilder> = Reflect.getMetadata('kyusei::command', toRegister[key as keyof T] as object);

                this.commandMap.set(metadata.name, {
                    ...metadata,
                    execute: toRegister[key as keyof T] as Function | AsyncFunction
                });
            });

            return;
        }

        keys.forEach((key) => {
            const metadata: { eventName: keyof ClientEvents; once?: boolean; } = Reflect.getMetadata('kyusei::event', toRegister[key as keyof T] as object);
            this._client[metadata.once ? 'once' : 'on'](metadata.eventName, toRegister[key as keyof T] as (...args: any[]) => any);
        });

        return;
    }

    /**
     * Handle the commands we register by listening to interactionCreate.
     */
    private registerCommandListener(): void {
        this._client.on('interactionCreate', async (interaction) => {
            if(interaction.isCommand() || interaction.isChatInputCommand()) {
                const toExecute = this.commandMap.get(interaction.commandName);
                if(!toExecute) {
                    throw 'Failed to find executable function for that command name.';
                }

                try {
                    if(toExecute.execute.constructor.name === 'AsyncFunction') {
                        return await toExecute.execute(interaction, this._client);
                    }

                    return toExecute.execute(interaction, this._client);
                } catch(err) {
                    Logger.error(`Failed to execute command (${ interaction.commandName })`);
                    throw err;
                }
            }
        });
    }
}