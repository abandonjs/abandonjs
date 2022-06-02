export interface iObject {
    [key: string]: any;
}
export declare type iObjectKey = string;
export declare function isObject(value: any): boolean;
export declare function objectInclude(obj: iObject, keys: iObjectKey[] | iObjectKey): boolean | boolean[];
