import { makeExtension } from '../../../../src';
import { join } from 'path';

export default makeExtension({
    name: 'Test Extension',
    description: 'An example extension',
    commands: {
        path: join(__dirname, 'commands')
    }
});