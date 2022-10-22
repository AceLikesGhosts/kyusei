import { CommandInteraction, CacheType } from 'discord.js';
import { Command, CommandBase } from '../../../../src';

@Command({ name: 'help', description: 'Help with commands!' })
export default class HelpCommand implements CommandBase
{
    execute(interaction: CommandInteraction<CacheType>)
    {
        interaction.reply('Help command ran!');
    }
}