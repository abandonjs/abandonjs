import { type } from '../type'
import { Val, Valer } from './type'
import { matchStringValue } from './matchStringValue'
import { matchNumberValue } from './matchNumberValue'
import { matchArrayValue } from './matchArrayValue'
import { matchObjectValue } from "./matchObjectValue"
import { toPathValue } from "./toPathValue"


/**
 * @ttitle matchValue
 * @param val 被比较值
 * @param valer 比较值 / 可为正则
 * @param path 值的路径 用逗号隔开
 * @returns boolean
 */
export function matchValue(val: Val, valer: Valer, path?: string): boolean {

	if(equal(val,valer)){
		return true
	}

	if (path) {
		val = toPathValue(val, path)
	}

	switch (type(val)) {
		// 简单数据类型处理
		case 'String':
		case 'Boolean':
			return matchStringValue(String(val), valer as Valer)
		case 'Number':
			return matchNumberValue(val, valer)
		// 复杂数据类型处理
		case 'Array':
			return matchArrayValue(val, valer)
		case 'Object':
			return matchObjectValue(val, valer)
		default:
			return true
	}

}

/**
 * @title equal
 * @description 比较是否值和类型是否相等
 * @param value any
 * @param lastValue any 
 * @returns 
 */
export function equal(value: any, lastValue: any): boolean {
	if(value === lastValue) return true
	if(type(value) !== type(value)) return false
	if(type(value) === 'Symbol'){
		return false
	}
	if(JSON.stringify(value) === JSON.stringify(lastValue)) return true
	return false
}