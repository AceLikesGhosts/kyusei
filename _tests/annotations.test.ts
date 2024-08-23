import {
    describe,
    test,
    expect,
    beforeEach,
    it,
} from 'bun:test';

import { Command, CommandMap, Event, EventMap } from '@/annotations';
import { SlashCommandBuilder } from 'discord.js';

describe('command annotations', () => {
    class Thing {
        // this should be unaccessable
        public someThing: string = '';
        // this should be accessable as its static
        public static otherThing: string = 'hai';

        @Command(new SlashCommandBuilder()
            .setName('hi')
            .setDescription('hello')
        )
        public static doCommand() { }

        @Command(new SlashCommandBuilder()
            .setName('bad')
            .setDescription('hello')
        )
        public badCommand() {
            return this.someThing;
        }

        @Command(new SlashCommandBuilder()
            .setName('good')
            .setDescription('hello')
        )
        public goodCommand() {
            return Thing.otherThing;
        }
    }

    const cmd = CommandMap.get('hi')!;
    test('can register from commands', () => {
        expect(cmd).not.toBeNull();
        expect(cmd.name).toEqual('hi');
        expect(cmd.description).toEqual('hello');
    });

    test('invokes the command properly', () => {
        expect(cmd).not.toBeNull();
        expect(cmd.execute).toBeFunction();
        expect(cmd.execute).not.toThrow();

        expect(cmd.execute()).toBe(undefined);
    });

    test('does not allow access local fields', () => {
        const cmd2 = CommandMap.get('bad');
        expect(cmd2).not.toBeNull();
        expect(cmd2?.name).toEqual('bad');
        expect(cmd2?.execute).toBeFunction();
        expect(cmd2?.execute()).toBe(undefined);
    });

    test('allows for allow accessing static fields', () => {
        const cmd2 = CommandMap.get('good');
        expect(cmd2).not.toBeNull();
        expect(cmd2?.name).toEqual('good');
        expect(cmd2?.execute).toBeFunction();
        expect(cmd2?.execute()).toBe('hai');
    });
});

describe('event annotations', () => {

});