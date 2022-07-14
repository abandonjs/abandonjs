import { type } from "../util";
export * from './existKeys'

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
