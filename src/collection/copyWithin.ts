import { isString } from "asura-eye"

/**
 * @title copyWithin<T>
 * @description 浅复制数组或子串的一部分到同一数组中的另一个位置，并返回它，不会改变原数组/字串的长度
 * @param value {string|T[]} 代复制子串/数组
 * @param target {number} 复制结果目标下标
 * @param start {number=0} 被复制起点
 * @param end {number} 被复制终点, 不指定及复制最后
 * @returns {string|T[]}
 * @version 2.6.0
 */
export function copyWithin<T>(value: string | T[], target: number, start = 0, end?: number) {
	if (isString(value)) {
		return value.split('').copyWithin(target, start, end).join('')
	}
	return [...value].copyWithin(target, start, end)
}