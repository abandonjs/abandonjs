import { isEffectArray, isEmpty, isNumber, isObject, isString } from "asura-eye"
import { type ObjectType } from "../type"
import { toPathValue } from "../util"

function getSortNum(value: unknown, sortIndex?: string | number): number {
	if (isNumber(value)) return value
	if (isEmpty(sortIndex)) return 0
	if (isObject<number>(value)) {
		const num = Number(toPathValue(value, sortIndex))
		return isNumber(num) ? num : 0
	}
	return 0
}

/**
 * @title descSort<T=object>
 * @description 降序排序(从大到小排序)
 * @param list {unknown[]}
 * @param sortIndex {string|number} 索引路径, 参考toPathValue的路径
 * @returns {T[]}
 * @create 3.3.0
 * @lastUpdate 3.3.0
 */
export function descSort<T = ObjectType>(list: T[], sortIndex?: string | number) {

	const handler = (before: T, after: T) => {
		if (isString(before) && isString(after)) return after.localeCompare(before)
		return getSortNum(after, sortIndex) - getSortNum(before, sortIndex)
	}

	if (isEffectArray<T>(list)) {
		return list.sort(handler)
	}

	return []
}

/**
 * @title ascSort<T=object>
 * @description 升序排序(从小到大排序)
 * @param list {unknown[]}
 * @param sortIndex {string|number} 索引路径, 参考toPathValue的路径
 * @returns {T[]}
 * @create 3.3.0
 * @lastUpdate 3.3.0
 */
export function ascSort<T = ObjectType>(list: T[], sortIndex?: string | number) {
	const handler = (before: T, after: T) => {
		if (isString(before) && isString(after)) return before.localeCompare(after)
		return getSortNum(before, sortIndex) - getSortNum(after, sortIndex)
	}

	if (isEffectArray<T>(list)) {
		return list.sort(handler)
	}

	return []
}