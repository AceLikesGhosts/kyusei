import type { SlashCommandBuilder } from 'discord.js';

/**
 * Provides metadata for a function.
 * @param builder - A DiscordJS SlashCommandBuilder instance
 * @returns 
 */
export default function Command(builder: SlashCommandBuilder) {
    return (target: Record<string, unknown>, obj: keyof typeof target) =>
        Reflect.defineMetadata('kyusei::command', builder, target[obj] as object);
}