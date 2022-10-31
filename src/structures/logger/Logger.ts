import chalk from 'chalk';

interface ILogger 
{
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
}

class Logger implements ILogger
{
    private logger: any;

    constructor(logger: any)
    {
        this.logger = logger;
    }

    /**
     * @description Takes a message, and the type of log; and formats it to `[Date] [Type]: message`
     * @param {string} message The message to format. 
     * @param {'WARN' | 'ERROR' | 'INFO' | 'ERRNLOG'} logType The type of log. 
     * @returns {string} The formatted string.
     */
    private format(message: string, logType: 'WARN' | 'ERROR' | 'INFO' | 'ERRNLOG'): string
    {
        return `${ chalk.gray('[') }${ new Date().toUTCString() }${ chalk.gray(']') } ${ chalk.gray('[') }${ logType }${ chalk.gray(']:') } ${ message }`;
    }

    public info(message: string): void
    {
        this.logger['info'](this.format(message, 'INFO'));
    }

    public warn(message: string): void
    {
        this.logger['warn'](this.format(message, 'INFO'));
    }

    public error(message: string): void
    {
        this.logger['error'](this.format(message, 'INFO'));
    }

    public throwErrorAndLog(message: string, err: unknown): void
    {
        this.logger['error'](this.format(message, 'ERRNLOG'));
        throw err;
    }
}

class BaseLogger implements ILogger
{
    info(message: string): void
    {
        console.log(message);
    }

    warn(message: string): void
    {
        console.warn(message);
    }

    error(message: string): void
    {
        console.error(message);
    }
}

export default Logger;
export { BaseLogger };
export type { ILogger };