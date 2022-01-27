export interface iObject {
    [key: string]: any;
}
export declare type iObjectKey = string;
export declare function isObject(val: any): boolean;
export declare function objectInclude(obj: iObject, keys: iObjectKey[] | iObjectKey): boolean | boolean[];
export declare function assign(): any;
export declare function assignIn(): any;
