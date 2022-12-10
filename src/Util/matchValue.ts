import { type } from './type'
import { stringify } from '../string/stringify'
import { Val, Valer } from './util/type'
import { matchNumberValue } from './util/matchNumberValue'
import { toPathValue } from "./toPathValue"

/**
 * @title matchValue
 * @param val 被比较值
 * @param valer 比较值 / 可为正则
 * @param path 值的路径 用逗号隔开
 * @returns boolean
 */
export function matchValue(val: Val, valer: Valer, path?: string): boolean {

	if (path) {
		val = toPathValue(val, path)
	}

	if (equal(val, valer)) {
		return true
	}

	if (type(valer) === 'RegExp') {
		return (valer as RegExp).test(String(val))
	}

	if (type(val) === 'Number') {
		return matchNumberValue(val as number, valer)
	}

	return true
}

/**
 * @title equal
 * @description 比较是否值和类型是否相等
 * @param value any
 * @param lastValue any 
 * @returns 
 */
export function equal(value: unknown, lastValue: unknown): boolean {
	if (value === lastValue) return true
	if (type(value) !== type(value)) return false
	if (type(value) === 'Symbol') return false
	if (stringify(value) === stringify(lastValue)) return true
	return false
}