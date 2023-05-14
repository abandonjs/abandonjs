import { type } from 'asura-eye'
import { Val, Valer } from './util/type'
import { matchNumberValue } from './util/matchNumberValue'
import { toPathValue } from "./toPathValue"
import { equal } from './isEqual'

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

	if (equal(val, valer)) return true

	if (type(valer) === 'RegExp') return (valer as RegExp).test(String(val))

	if (type(val) === 'Number') return matchNumberValue(val as number, valer)

	return true
}
