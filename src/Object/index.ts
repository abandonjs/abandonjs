import { toArray } from "../array";
import { type } from "../util";

export interface iObject {
	[key: string]: any;
}

/**
 * @title isObject
 * @description 判断是否为Oject
 * @param value 
 * @returns boolean
 */
export function isObject(value: any): boolean {
	return type(value) === 'Object' && typeof value === 'object'
}

/**
 * @title existKeys
 * @description 判断对象是否拥有指定keys
 * @param obj object
 * @param keys string[] | string
 * @returns boolean
 */
export function existKeys(obj: iObject, keys: string[] | string): boolean {
	const objKeys: string[] = Object.keys(obj);
	keys = toArray<string>(keys)

	for (let i = 0; i < keys.length; i++) {
		if (objKeys.includes(keys[i])) return true
	}
	return false
}

/**
 * @title serialize
 * @description 序列化对象
 * @param query object
 * @param encode boolean = false
 * @returns string 
 */
export function serialize(query: { [key: string]: string | number }, encode = false): string {
	return Object.keys(query)
		.map((key) => `${key}=${encode ? encodeURIComponent(query[key]) : query[key]}`)
		.join('&')
}
