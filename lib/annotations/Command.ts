import type { ClientEvents, SlashCommandBuilder } from 'discord.js';
import type { Event, AnyFunction } from '.';

type Functionless<T> = {
    [K in keyof T as T[K] extends AnyFunction ? never : K]: T[K];
};

export const CommandMap = new Map<string, Functionless<SlashCommandBuilder> & { execute: AnyFunction; }>();
export default function Command(data: Functionless<SlashCommandBuilder>) {
    return function (target: any, propertyKey: string) {
        CommandMap.set(data.name, {
            ...data,
            execute: target[propertyKey]
        });
    };
}