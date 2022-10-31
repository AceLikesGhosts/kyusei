import { CacheType, ChatInputCommandInteraction } from 'discord.js';
import { Command, CommandBase } from '../../../../src';

// The command's metadata, what we need to register the command.
@Command({ name: 'help', description: 'Help with commands!' })
export default class HelpCommand implements CommandBase
{
    // What we should do when the command is ran.
    execute(interaction: ChatInputCommandInteraction<CacheType>)
    {
        interaction.reply('Help command ran!');
    }
}