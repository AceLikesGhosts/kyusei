import { SlashCommandBuilder } from 'discord.js';
import Command, { CommandMap } from './annotations/Command';

class Test {
    @Command(
        new SlashCommandBuilder()
            .setName('thing')
            .setDescription('Does something')
    )
    public executeThing() {
        console.log('some thing');
    }
}

console.log(CommandMap);