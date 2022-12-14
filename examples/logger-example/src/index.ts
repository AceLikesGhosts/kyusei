import Kyu from '../../../src/index';

// Creating a new Kyu instance, which extends from a normal Discord.JS client.
const kyu = new Kyu({
    intents: [],
    logger: {
        instance: undefined,
        default: true
    }
});

// Login to Discord using your bot token
kyu.init('Your Token');

// By passing `{debug: true}` the Logger instance will actually exist, otherwise it won't.
kyu.logger!.info('whatever you need to log');