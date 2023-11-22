import { isEffectArray, isEmpty, isNumber, isObject, isString } from "asura-eye"
import { type ObjectType } from "../type"
import { toPathValue } from "../util"
import { compareString } from '../string/compare'

function getSortNum(value: unknown, sortIndex?: string | number): string | number {
	if (isNumber(value) ) return value
	if (isString(value)) {
			const num = Number(value)
			return isNumber(num) ? num : value
	}
	if (isEmpty(sortIndex)) return 0
	if (isObject<number>(value)) {
		const newValue = toPathValue(value, sortIndex)
		if (isString(newValue)) {
			const num = Number(newValue)
			return isNumber(num) ? num : newValue
		}
		if (isNumber(newValue)) {
			return newValue
		}
	}
	return 0
}

/**
 * @title descSort<T=object>
 * @description 降序排序(从大到小排序)
 * @param {T[]} list
 * @param {string|number} [sortIndex] 索引路径, 参考`toPathValue`的路径
 * @returns {T[]}
 * @create 3.3.0
 * @lastUpdate 3.3.0
 */
export function descSort<T = ObjectType>(list: T[], sortIndex?: string | number): T[] {

	const handler = (before: T, after: T) => {

		const newAfter = getSortNum(after, sortIndex)
		const newBefore = getSortNum(before, sortIndex)
		if (isString(newAfter) && isString(newBefore))
			return compareString(newAfter, newBefore) ? 1 : -1
		if (isNumber(newAfter) && isNumber(newBefore))
			return newAfter - newBefore
		return 0
	}

	if (isEffectArray<T>(list)) {
		return list.sort(handler)
	}

	return []
}

/**
 * @title ascSort<T=object>
 * @description 升序排序(从小到大排序)
 * @param {T[]} list 
 * @param {string|number} sortIndex 索引路径, 参考toPathValue的路径
 * @returns {T[]}
 * @create 3.3.0
 * @lastUpdate 3.3.0
 */
export function ascSort<T = ObjectType>(list: T[], sortIndex?: string | number): T[] {
	const handler = (before: T, after: T) => {

		const newAfter = getSortNum(after, sortIndex)
		const newBefore = getSortNum(before, sortIndex)

		if (isString(newAfter) && isString(newBefore))
			return compareString(newAfter, newBefore) ? -1 : 1

		if (isNumber(newAfter) && isNumber(newBefore))
			return newBefore - newAfter
		return 0
	}

	if (isEffectArray<T>(list)) {
		return list.sort(handler)
	}

	return []
}