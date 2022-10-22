import 'reflect-metadata';
import { Kyu, KyuOptions, SharedData } from './structures';
import Logger, { ILogger, ILoggerOptions } from './logger/Logger';

import
{
    CommandBase,
    CommandData,
    Command,
    EventData,
    EventBase,
    Event
} from './annotations';

export default Kyu;
export
{
    // Annotations
    CommandBase,
    CommandData,
    Command,
    EventData,
    EventBase,
    Event,

    // Kyu Client's interfaces
    KyuOptions,
    SharedData,

    // Logger
    Logger,
    ILogger,
    ILoggerOptions
};