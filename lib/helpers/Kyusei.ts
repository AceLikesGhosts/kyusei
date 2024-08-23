import { EventMap } from '@/annotations';
import { Client, type ClientOptions } from 'discord.js';
import handleInteractions from './handleInteractions';

export default class Kyu extends Client {
    public constructor(opts: ClientOptions) {
        super(opts);

        this.on('interactionCreate', handleInteractions);
        for(const [, data] of EventMap) {
            if(data.once) {
                this.once(data.on, data.execute);
            } else {
                this.on(data.on, data.execute);
            }
        }
    }
}