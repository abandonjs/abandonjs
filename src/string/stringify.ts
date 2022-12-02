import { type } from '../util'

/**
 * @title stringify
 * @description JSON.stringify 的二次封装, 原本很多类型返回undefined等值, 都会返回各有意义的值, value 为字符串类型不会再加多一对双引号
 * @param value {any}
 * @param replacer {?(number|string)[]|(this:any,key:string,value:any)=>any}
 * @param space {?string|number}
 * @returns {string}
 * @version 2.2.0
 */
export function stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;

export function stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;

export function stringify(value, replacer, space): string {
	let newValue: any = value

	if (type(value) === 'String') newValue = value
	if ([
		'Function', 'AsyncFunction', 'GeneratorFunction',
		'Symbol', 'RegExp', 'Promise', 'Date', 'NaN',
		'Map', 'Set', 'WeakMap', 'WeakSet',
	].includes(type(value)))
		newValue = value.toString()


	if (value === Infinity) newValue = 'Infinity'
	if (value === -Infinity) newValue = '-Infinity'
	if (value === undefined) newValue = 'undefined'
	if (value === null) newValue = 'null'

	if (type(newValue) === 'String') {
		return JSON.stringify(newValue, replacer, space).replace(/^(")+|(")+$/g, '')
	}

	return JSON.stringify(newValue, replacer, space)
}