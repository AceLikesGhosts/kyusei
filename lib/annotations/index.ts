import type { ClientEvents } from 'discord.js';

export type AnyFunction = (...args: any[]) => any | PromiseLike<any>;
export type DiscordEvent<K extends keyof ClientEvents> = {
    on: K;
    once?: boolean;
};

export * from './Command';
export * from './Event';
export * from './Autocomplete';

export { default as Command } from './Command';
export { default as Event } from './Event';
export { default as Autocomplete } from './Autocomplete';