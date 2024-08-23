import { ApplicationCommandType, AutocompleteInteraction, CommandInteraction, InteractionType, SlashCommandBuilder } from 'discord.js';
import { Command, Autocomplete, Event } from './lib/annotations';
import Kyusei from './lib/helpers/Kyusei';

class MyCommands {
    @Command(new SlashCommandBuilder().setName('hi'))
    public static thing(i: CommandInteraction) {
        console.log('ran!');
        i.reply('hi');
    }

    @Autocomplete({ for: 'hi' })
    public static auto(i: AutocompleteInteraction) {
        i.respond([]);
    }

    @Event({ once: true, on: 'ready' })
    public static ready(client: Kyusei) {
        console.log(`ready as ${ client.user?.username }`);
    }
}

const wrappedClient = new Kyusei({ intents: [] });

// @ts-expect-error this is ok
wrappedClient.emit('ready', {
    user: {
        username: 'hi'
    }
});

// @ts-expect-error this is ok
wrappedClient.emit('interactionCreate', {
    commandName: 'hi',
    commandType: ApplicationCommandType.ChatInput,
    isCommand: () => true, isAutocomplete: () => false,
    followUp: () => void 0, reply: () => void 0, respond: () => void 0,
    type: InteractionType.ApplicationCommand
});