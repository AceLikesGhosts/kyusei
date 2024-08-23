import { EventMap } from '@/annotations';
import { Client, type ClientOptions } from 'discord.js';
import handleInteractions from './handleInteractions';

export default class Kyu extends Client {
    public constructor(opts: ClientOptions) {
        super(opts);

        this.on('interactionCreate', handleInteractions);
        for(const [event, data] of EventMap) {
            if(data.once) {
                this.once(event, data.execute);
            } else {
                this.on(event, data.execute);
            }
        }
    }
}