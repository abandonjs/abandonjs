export interface iObject {
    [key: string]: any;
}
export declare function isObject(value: any): boolean;
export declare function existKeys(obj: iObject, keys: string[] | string): boolean;
export declare function serialize(query: {
    [key: string]: string | number;
}, encode?: boolean): string;
