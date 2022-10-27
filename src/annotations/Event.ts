import { Events } from 'discord.js';
import Kyu from '../structures/client/Kyu';

/**
 * @description The data about a command.
 */
interface EventData
{
    name: string | Events;
}

/**
 * @example ```ts
 * import { Event, EventBase } from './Event';
 * 
 * @Event({ name = 'messageCreate' })
 * export default class ExampleEvent implements EventBase
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
function Event(data: EventData): any
{
    return function (target: any): any
    {
        Reflect.defineMetadata(target, 'data', data);
    };
}

/**
 * @description A events base class!
 */
interface EventBase
{
    // eslint-disable-next-line no-unused-vars
    execute(client: Kyu<boolean>, ...args: any[]): any;
}

export { Event, EventBase };
export type { EventData };