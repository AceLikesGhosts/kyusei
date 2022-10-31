import { CommandBase, CommandData, EventBase, EventData } from '../annotations';

interface ExtensionData
{
    name: string;
    description?: string;
    commands?: {
        path?: string;
        commandList?: { data: CommandData, base: CommandBase; }[];
    };
    events?: {
        path?: string;
        eventList?: { data: EventData, base: EventBase; }[];
        disableKyuEvents?: boolean;
    };
}

const makeExtension = (data: ExtensionData): ExtensionData => data;

export { makeExtension };
export type { ExtensionData };