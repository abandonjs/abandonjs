import { isArray, isObject } from 'asura-eye'
import { toString } from './toString'

/**
 * @title stringify
 * @description JSON.stringify 的二次封装, 原本很多类型返回undefined等值, 都会返回各有意义的值, value 为字符串类型不会再加多一对双引号
 * @param value {any}
 * @param replacer {?(number|string)[]|(this:any,key:string,value:any)=>any}
 * @param space {?string|number}
 * @returns {string}
 * @lastUpdate 2.2.1
 */
export function stringify(
	value: unknown,
	replacer?: (number | string)[] | null,
	space?: string | number
): string {

	if (isObject(value) || isArray(value)) {
		return JSON.stringify(value, replacer, space)
	}

	return JSON.stringify(toString(value), replacer, space)
		.replace(/^(")+|(")+$/g, '')
}