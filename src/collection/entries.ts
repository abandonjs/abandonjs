import { isString } from "asura-eye"

/**
 * @title entries
 * @description 返回一个数组迭代对象
 * @param {string|T[]} value 
 * @returns 
 */
export function entries<T>(value: string | T[]) {
	if (isString(value)) {
		return value.split('').entries()
	}
	return value.entries()
}