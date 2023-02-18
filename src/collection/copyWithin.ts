import { isArray, isEmpty, isString } from "check-it-type"

/**
 * @title copyWithin<T>
 * @description 浅复制数组或子串的一部分到同一数组中的另一个位置，并返回它，不会改变原数组/字串的长度
 * @param value {string|T[]}
 * @param target {number}
 * @param start {number=0}
 * @param end {number}
 * @returns {string|T[]}
 */
export function copyWithin<T>(value: string | T[], target: number, start = 0, end?: number) {
	if (isString(value)) {
		return value.split('').copyWithin(target, start, end).join('')
	}
	return value.copyWithin(target, start, end)
}