import { assert } from '../util/Assertions';
import { Client } from 'discord.js';
import { Kyu as KyuC } from './Kyu';
import type { KyuInstance } from '../types/Kyu.type';

/**
 * Creates a Kyusei instance based off of a DiscordJS client instance.
 * @param client The DiscordJS Client instance.
 * @returns A Kyusei instance which utilises the client passed.
 */
export function Kyu(client: Client): KyuInstance {
    // Make sure its 
    // -> 1: An object
    // -> 2: A DiscordJS Client instance.
    assert(typeof client === 'object');
    assert(client instanceof Client);

    return new KyuC(client);
}