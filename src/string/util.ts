import { type } from '../util'
import { isObject } from '../object'

/**
 * @title replaces
 * @description 同时定义多个replace的规则使用
 * @param target {string}
 * @param regs {reg:RegExp|string,value:string}[]
 * @returns {string}
 */
export function replaces(target = '', regs: {
	reg: RegExp | string,
	value: string
}[] = []): string {
	for (let i = 0; i < regs.length; i++) {
		const { reg, value } = regs[i]
		target = target.replace(reg, value)
	}
	return target
}

/**
 * @title isString
 * @description 是否为字符串
 * @param val any
 * @returns boolean
 */
export function isString(val: any): boolean {
	return type(val) === 'String' && typeof val === 'string'
}

/**
 * @title reverseString 
 * @description 反转字符串
 * @param target string
 * @return string
 */
export function reverseString(target: string): string {
	return target.split('').reverse().join('')
}

/**
 * @title isJsonString<T>
 * @description 判断是否为json字符串, 若是并返回处理后的对象
 * @param val 待判断字符串
 * @returns T | false
 */
export function isJsonString<T>(val: any): T | false {
	if (typeof val !== 'string')
		return false
	try {
		const obj = JSON.parse(val)
		return isObject(obj) && obj
	} catch (e) {
		return false
	}

}