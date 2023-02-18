import { isArray, isEmpty, isString } from "check-it-type"

/**
 * @title entries
 * @description 返回一个数组迭代对象
 * @param value {string|T[]}
 * @returns 
 */
export function entries<T>(value: string | T[]) {
	if (isString(value)) {
		return value.split('').entries()
	}
	return value.entries()
}