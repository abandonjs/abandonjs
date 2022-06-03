import { type } from "../util";

export interface iObject {
	[key: string]: any;
}
export type iObjectKey = string;

/**
 * @title isObject
 * @description 判断是否为Oject
 * @param value 
 * @returns boolean
 */
export function isObject(value:any):boolean{
	return type(value) === 'Object' && typeof value === 'object'
}

export function objectInclude(obj: iObject, keys: iObjectKey[] | iObjectKey): boolean | boolean[] {
	const result: boolean[] = [];
	const objKeys: string[] = Object.keys(obj);
	if (!Array.isArray(keys)) keys = [keys];
	keys.forEach((item: iObjectKey): void => {
		if (objKeys.includes(item)) {
			result.push(true)
		} else {
			result.push(false)
		}

	})
	if (result.length === 0) return false;
	if (result.length === 1) return result[0]
	return result;
}