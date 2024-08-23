import type { ClientEvents } from 'discord.js';
import type { AnyFunction, DiscordEvent } from '.';

export const EventMap = new Map<string, DiscordEvent<keyof ClientEvents> & { execute: AnyFunction; }>();

export default function Event(data: DiscordEvent<keyof ClientEvents>) {
    return function (target: any, propertyKey: string) {
        EventMap.set(data.on, {
            ...data,
            execute: target[propertyKey]
        });
    };
}