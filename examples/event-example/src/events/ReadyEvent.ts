import Kyu, { Event, EventBase } from '../../../../src';

// The events's metadata, what we need to register the event.
@Event({ name: 'help' })
export default class HelpCommand implements EventBase
{
    execute(client: Kyu<boolean>)
    {
        console.log(`Logged in as ${ client.user }`);
    }
}