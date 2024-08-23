import { AutocompleteInteraction, CommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command, Autocomplete, Event } from './lib/annotations';
import Kyusei from './lib/helpers/Kyusei';

const wrappedClient = new Kyusei({ intents: [] });

class MyCommands {
    @Command(new SlashCommandBuilder().setName('hi'))
    public static thing(i: CommandInteraction) {
        i.reply('hi');
    }

    @Autocomplete({ for: 'hi' })
    public static auto(i: AutocompleteInteraction) {
        i.respond([]);
    }

    @Event({ once: false, on: 'ready' })
    public static ready(client: Kyusei) {
        console.log(`ready as ${ client.user?.username }`);
    }
}

wrappedClient.login('token');