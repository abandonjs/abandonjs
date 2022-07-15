import { type, types } from './type';
export { type, types };
export * from './matchValue';
declare type CaseTypeFirstUpper = 'FirstUpper';
declare type CaseTypeFirstLower = 'FirstLower';
declare type CaseTypeUpper = 'Upper';
declare type CaseTypeLower = 'Lower';
export declare type CaseType = CaseTypeFirstUpper | CaseTypeFirstLower | CaseTypeLower | CaseTypeUpper;
export declare function changeCase(str: string, type?: CaseType): string;
export declare function logGroup(name?: string, ...args: any[]): void;
export declare function isEmpty(value: any): boolean;
export declare function runFunc(func: any, ...args: any[]): any;
export declare class EventEmitter {
    cache: {
        [key: string]: any;
    };
    constructor();
    on(name: any, fn: any): void;
    off(name: any, fn: any): void;
    once(name: any, ...args: any[]): any[];
    emit(name: any, ...args: any[]): any[];
}
