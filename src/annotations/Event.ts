import type { ClientEvents } from 'discord.js';

/**
 * Provides metadata for an event.
 * @param data - The event type and if its once.
 * @returns 
 */
export default function Event(data: { eventName: keyof ClientEvents; once?: boolean; }) {
    return (target: Record<string, unknown>, obj: keyof typeof target) =>
        Reflect.defineMetadata('kyusei::event', data, target[obj] as object);
}