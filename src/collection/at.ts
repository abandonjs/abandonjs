import { isArray, isEmpty, isString } from "asura-eye"

/**
 * @title at<T>
 * @description 通过下标获取值
 * @param value {string|T[]}
 * @param index {number = 0} 可为负数
 * @returns {string|T}
 * @version 2.6.0
 */
export function at<T = unknown>(value: string | T[], index = 0) {
	if (isEmpty(value)) return undefined
	if (index > value.length) index = value.length - 1
	if (index < 0) index = value.length + index
	if (isString(value)) return value[index]
	if (isArray(value)) return value.at(index)
	return undefined
}