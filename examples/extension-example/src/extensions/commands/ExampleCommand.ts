import { CacheType, ChatInputCommandInteraction } from 'discord.js';
import { Command, CommandBase } from '../../../../../src';

// The command's metadata, what we need to register the command.
@Command({ name: 'example', description: 'Fill in example command' })
export default class ExampleCommand implements CommandBase
{
    execute(interaction: ChatInputCommandInteraction<CacheType>)
    {
        throw new Error('Method not implemented.');
    }
}