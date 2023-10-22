import chalk from 'chalk';

function error(...messages: string[]): void {
    for(let i: number = 0; i < messages.length; i++)
        console.error(chalk.red('kyu ERR! ' + messages[i]));
}

const Logger = {
    error
};

export default Logger;