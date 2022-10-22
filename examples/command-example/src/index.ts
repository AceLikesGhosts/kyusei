import Kyu from '../../../src/index';
import { join } from 'path';

const kyu = new Kyu({
    intents: [],
    commands: {
        path: join(__dirname, 'commands')
    }
});

kyu.init('Your Token');