export declare type nullToVoidFn = () => void;
export declare type nullToStringFn = () => string;
export declare type nullToNumberFn = () => number;
export declare type stringToString = (value: string) => string;
export declare type anyToNumberFn = (value: any) => number;
export declare type anyToStringFn = (value: any) => string;
export declare type tAnyValueToBooleanFunc = (value: any) => boolean;
export declare type tItteratee = string | ((val: any) => any);
export interface iAnyObject {
    [key: string]: any;
}
export declare type tPredicate = any[] | ((val: any) => any) | iAnyObject | string | undefined;
