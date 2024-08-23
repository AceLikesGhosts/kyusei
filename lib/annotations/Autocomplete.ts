import type { AnyFunction } from '.';

type NamedObject = {
    for: string;
};

export const AutocompleteMap = new Map<string, NamedObject & { execute: AnyFunction; }>();
export default function Autocomplete(data: NamedObject) {
    return function (target: any, propertyKey: string) {
        AutocompleteMap.set(data.for, {
            ...data,
            execute: target[propertyKey]
        });
    };
}