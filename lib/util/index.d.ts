import { Predicate, OneParamFn } from '../type';
import { type, types } from './type';
export { type, types };
export * from './matchValue';
export declare const changeCase: (str: string, type: number) => string;
export declare function useArrayPredicate(predicate: Predicate): OneParamFn<any, boolean>;
export declare function logGroup(name?: string, ...args: any[]): void;
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
