import { type } from '../index'
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

	if (path) {
		val = toPathValue(val, path)
	}

	if (val === valer) {
		return true
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