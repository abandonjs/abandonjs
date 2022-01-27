import { tPredicate, tAnyValueToBooleanFunc } from '../type';
export declare const colorToRGB: (val: string, opa?: number | undefined) => string;
export declare const checkPwd: (pwd: string) => number;
export declare const changeCase: (str: string, type: number) => string;
export declare function defaultValue(key: any, value: any): any;
export declare function useArrayPredicate(predicate: tPredicate): tAnyValueToBooleanFunc;
export declare function logGroup(name?: string, ...args: any[]): void;
export declare function type(param: any): string;
export declare function isEmpty(value: any): boolean;
export declare function deepClone(obj: any, cache?: WeakMap<object, any>): any;
declare class EventEmitter {
    cache: {
        [key: string]: any;
    };
    constructor();
    on(name: any, fn: any): void;
    off(name: any, fn: any): void;
    emit(name: any, once?: boolean): void;
}
export declare const eventBus: EventEmitter;
export {};
