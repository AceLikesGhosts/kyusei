import type { ClientEvents } from 'discord.js';
import type { Event, AnyFunction } from '.';

export const EventMap = new Map<string, Event<keyof ClientEvents> & { execute: AnyFunction; }>();

export default function Event(data: Event<keyof ClientEvents>) {
    return function (target: any, propertyKey: string) {
        EventMap.set(data.on, {
            ...data,
            execute: target[propertyKey]
        });
    };
}