import chalk from 'chalk';
import fs from 'fs';

interface ILoggerOptions
{
    writeToFile?: boolean;
    filePath?: string;
}

/* eslint-disable no-unused-vars */
interface ILogger
{
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    throwErrorAndLog(message: string, err: unknown): void;
    write(message: string, logType: 'WARN' | 'ERROR' | 'INFO' | 'ERRNLOG'): void;
    format(message: string, logType: 'WARN' | 'ERROR' | 'INFO' | 'ERRNLOG'): string;
}

/**
 * @description Generic logger, using chalk & horrible code : PLEASE REWRITE.
 * @param {ILoggerOptions} opts The options for the Logger.
 * @constructor
 */

// TODO: REWRITE
class Logger implements ILogger
{
    private file: string | null = '';
    private writingEnabled: boolean = false;

    constructor(opts: ILoggerOptions = { writeToFile: false })
    {
        if(opts.filePath)
            this.file = opts.filePath;
        else
            this.file = null;

        if(opts.writeToFile)
            this.writingEnabled = opts.writeToFile;
        else
            this.writingEnabled = false;
    }

    format(message: string, logType: 'WARN' | 'ERROR' | 'INFO' | 'ERRNLOG'): string
    {
        return `${ chalk.gray('[') }${ new Date().toUTCString() }${ chalk.gray(']') } ${ chalk.gray('[') }${ logType }${ chalk.gray(']:') } ${ message }`;
    }

    info(message: string): void
    {
        if(this.writingEnabled)
            this.write(message, 'INFO');

        console.log(this.format(message, 'INFO'));
    }

    warn(message: string): void
    {
        if(this.writingEnabled)
            this.write(message, 'WARN');

        console.log(this.format(message, 'WARN'));
    }

    error(message: string): void
    {
        if(this.writingEnabled)
            this.write(message, 'ERROR');

        console.log(this.format(message, 'ERROR'));
    }

    throwErrorAndLog(message: string, err: unknown): void
    {
        if(this.writingEnabled)
            this.write(message, 'ERRNLOG');

        console.log(this.format(message, 'ERRNLOG'));
        throw err;
    }

    write(message: string, logType: 'WARN' | 'ERROR' | 'INFO' | 'ERRNLOG'): void
    {
        if(!this.file || !this.writingEnabled)
            return;

        fs.writeFile(this.file as string, `[${ new Date().toUTCString() }] [${ logType }] ${ message }`, err =>
        {
            if(err)
                console.error(err);

            // Wrote successfully, good 'nough.
        });
    }
}

export default Logger;
export type { ILogger, ILoggerOptions };