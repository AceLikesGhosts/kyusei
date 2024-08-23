import type { Client } from 'discord.js';
import handleInteractions from './handleInteractions';
import { EventMap } from '@/annotations';

export default function Kyu(client: Client): void {
    client.on('interactionCreate', handleInteractions);
    for(const [event, data] of EventMap) {
        if(data.once) {
            client.once(event, data.execute);
        } else {
            client.on(event, data.execute);
        }
    }
}