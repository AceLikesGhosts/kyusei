import { CommandInteraction } from 'discord.js';

/**
 * @description The data about a command.
 */
interface CommandData
{
    name: string;
    description?: string;
    permission?: {
        type: bigint;
        countAdmin?: boolean;
    };
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
        Reflect.defineProperty(target, 'data', data);
    };
}

/**
 * @description A command's base class!
 */
interface CommandBase
{
    // eslint-disable-next-line no-unused-vars
    execute(interaction: CommandInteraction): any;
}

export { Command, CommandBase };
export type { CommandData };