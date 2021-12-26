export type nullToVoidFn = () => void;
export type nullToStringFn = () => string;
export type nullToNumberFn = () => number;
export type stringToString = (value: string) => string;
export type anyToNumberFn = (value: any) => number;
export type anyToStringFn = (value: any) => string;
export type tAnyValueToBooleanFunc = (value: any) => boolean
export type tItteratee = string | ((val: any) => any)
export interface iAnyObject {
  [key: string]: any
}
export type tPredicate = any[] | ((val: any) => any) | iAnyObject | string