import Kyu from '../../../src/index';
import { join } from 'path';

// Creating a new Kyu instance, which extends from a normal Discord.JS client.
const kyu = new Kyu({
    intents: [],
    // The Kyu instance will go through each file within the
    // folder provided, and find each class annotated with 
    // @Event(...)
    events: {
        path: join(__dirname, 'commands')
    }
});

// Login to Discord using your bot token
kyu.init('Your Token');