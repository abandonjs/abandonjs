import { Predicate, OneParamFn } from '../type';
import { type } from './type';
export { type };
export * from './mathValue';
export declare const colorToRGB: (val: string, opa?: number) => string;
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
export declare function hideMobile(mobile: any): any;
