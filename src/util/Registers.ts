import { isClass } from './Assertions';

/**
 * Gets all keys on a class.
 */
export function getKeys<T>(object: T, filter: (key: keyof T, instance: T) => boolean) {
    if(isClass(object)) {
        const getClassKeys = (obj: T) => {
            const keys = Object.getOwnPropertyNames((obj as { prototype: object; }).prototype);
            return keys;
        };

        return getKeysInternal(getClassKeys, object, filter);
    }

    return getKeysInternal(Object.keys as ((object: T) => string[]), object, filter);
}

function getKeysInternal<T>(how: ((object: T) => string[]), object: T, filter: ((key: keyof T, instance: T) => boolean)) {
    const keys = how(object);
    const result: string[] = [];

    for(let i: number = 0; i < keys.length; i++) {
        if(filter(keys[i] as keyof T, object)) {
            result.push(keys[i]);
        }
    }

    return result;
}
