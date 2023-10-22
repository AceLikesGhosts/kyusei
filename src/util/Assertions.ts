import Logger from './Logger';

export function assert(value: unknown, message?: string): asserts value {
    if(!value) {
        Logger.error(message || 'Assertion Failed');
    }
}

export function assertCast<T>(thing: any): thing is T {
    assert(typeof thing !== 'undefined');
    return true;
}

/**
 * 
 * @param thing - The argument to 
 * @returns 
 */
export function isClass(thing: unknown): thing is new (...args: any[]) => any {
    if(typeof (thing as { toString?: () => string; }).toString === 'undefined') {
        return false;
    }

    const splitString = (thing as { toString: () => string; }).toString().split(' ');
    if(!splitString || splitString[0] !== 'class') {
        return false;
    }

    return true;
}