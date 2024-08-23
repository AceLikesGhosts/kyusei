import type { Interaction } from 'discord.js';
import { CommandMap, AutocompleteMap } from '@/annotations';

export default function handleInteractions(i: Interaction) {
    if(i.isCommand()) {
        if(!CommandMap.has(i.commandName)) {
            return;
        }

        const command = CommandMap.get(i.commandName)!;

        try {
            void command.execute(i);
        }
        catch(err) {
            void i.followUp({
                content: 'This command failed.'
            });
        }
    }

    if(i.isAutocomplete()) {
        if(!AutocompleteMap.has(i.commandName)) {
            return;
        }

        const command = AutocompleteMap.get(i.commandName)!;

        try {
            void command.execute(i);
        }
        catch(err) {
            void i.respond([]);
        }
    }
}