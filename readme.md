# kyusei
- Kyusei or 急性 means "acute", there is no reason behind this name, it just sounds nice!

---

kyusei is a [Discord.JS](https://github.com/discordjs/discord.js/) 
utility framework, written in Typescript which aims to 
make Commands and Events easier by providing annotations/decorators for them.

# Documentation
At this current point there is not any "officially" written documentation, although that will be covered eventually, there is Typedoc-based documentation which can be found [here](https://acelikesghosts.github.io/kyusei/) 


# Examples
For more in depth examples, please refer to the `/examples` folder, or click [here](https://github.com/AceLikesGhosts/kyusei/tree/master/examples).

For a basic example of using Kyusei for commands:
```ts
// index.ts
import Kyu from 'kyusei';

const client: Kyu<true> = new Kyu({ 
    // Your intents, partials, and other Discord.JS data,
    commands: {
        path: join(__dirname, 'commands')
    }
});

client.init('token');

// commands/ExampleCommand.ts
import { Command, CommandBase } from 'kyusei';
import { ChatInputCommandInteraction, CacheType } from 'discord.js';

@Command({ name: 'Example', description: 'A basic command' })
export default class ExampleCommand implements CommandBase
{
    public execute(interaction: ChatInputCommandInteraction<CacheType>)
    {
        interaction.reply('Example command ran!');
    }
}
```

## Publishing
If you have permission to publish, then go ahead and run `npm publish` and increment the version number, please push the version change as well.

### This project relies heavily upon:
- Reflect-Metadata
- Discord.JS
