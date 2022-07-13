export declare function hide(target: string, start?: number, end?: number): string;
export declare function replaces(target?: string, regs?: {
    reg: RegExp | string;
    value: string;
}[]): string;
export declare function isString(val: any): boolean;
export declare function reverseString(target: string): string;
export declare function isJsonString<T>(val: any): T | false;
export declare function toString(value: any): string;
export declare function toStrings(values: any[]): string[];
