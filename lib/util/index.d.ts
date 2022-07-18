import { type, types } from './type';
export { type, types };
export * from './matchValue';
export * from './deepClone';
declare type CaseTypeFirstUpper = 'FirstUpper';
declare type CaseTypeFirstLower = 'FirstLower';
declare type CaseTypeUpper = 'Upper';
declare type CaseTypeLower = 'Lower';
export declare type CaseType = CaseTypeFirstUpper | CaseTypeFirstLower | CaseTypeLower | CaseTypeUpper;
export declare function changeCase(str: string, type?: CaseType): string;
export declare function logGroup(name?: string, ...args: any[]): void;
export declare function isEmpty(value: any): boolean;
export declare function runFunc(func: any, ...args: any[]): any;
export interface EventEmitter<T, U> {
    cache: {
        [key: string]: T[];
    };
    on(name: string, fn: T): void;
    off(name: string): boolean;
    once<Params extends any[] = any[]>(name: string, ...args: Params): U[];
    emit<Params extends any[] = any[]>(name: string, ...args: Params): U[];
}
export declare class EventEmitter<T, U> {
    cache: {
        [key: string]: T[];
    };
}
