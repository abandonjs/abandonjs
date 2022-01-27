declare type tAnyFunction = (...arg: any[]) => any;
declare type tAnyObject = {
    [key: string]: any;
};
export declare function once(fn: any): any;
export declare function throttle(fn: any, interval: number): any;
export declare function debounce(fn: any, interval: number): any;
export declare function after(n: number | undefined, func: tAnyFunction): tAnyFunction;
export declare function ary(func: tAnyFunction, n: number): tAnyFunction;
export declare function before(n: number, func: tAnyFunction): tAnyFunction;
export declare function bind(func: tAnyFunction, thisArg?: tAnyObject, ...partials: any[]): tAnyFunction;
export declare function curry(func: tAnyFunction, len: number): tAnyFunction;
export declare function delay(func: tAnyFunction, delayTime?: number, ...args: any[]): any;
export declare function flip(func: tAnyFunction): tAnyFunction;
export {};
