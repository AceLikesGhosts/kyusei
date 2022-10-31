import { ApplicationCommandOptionType, ChatInputCommandInteraction } from 'discord.js';

/**
 * @description The data about a command.
 */
interface CommandData
{
    name: string;
    type?: ApplicationCommandOptionType;
    description?: string;
    permission?: {
        type: bigint;
    };
    options?: [{
        name: string;
        description: string;
        type: ApplicationCommandOptionType;
        required?: boolean;
        choices?: [{
            name: string;
            value: string;
        }];
    }]
}

/**
 * @example ```ts
 * import { Command, CommandBase } from './Command';
 * 
 * @Command({ name: '', description: '', permission: { type: PermissionsBitField.Flags.BanMembers } })
 * export default class ExampleCommand implements CommandBase
 * {
 *  public static execute(interaction: CommandInteraction) 
 *  {
 *    // ...
 *  }
 * }
 * ```
 * @param {CommandData} data The information about the command! 
 * @returns {any}
 */
function Command(data: CommandData): any
{
    return function (target: any): any
    {
        Reflect.defineMetadata(target, 'data', data);
    };
}

/**
 * @description A command's base class!
 */
interface CommandBase
{
    // eslint-disable-next-line no-unused-vars
    execute(interaction: ChatInputCommandInteraction): any | Promise<any>;
}

export { Command, CommandBase };
export type { CommandData };