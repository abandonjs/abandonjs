import { isEmpty, isMap, isSet } from "asura-eye"

/**
 * @title toArray<T>
 * @description 将非数组转换为数组
 * @param value {T|T[]}
 * @returns {T[]}
 */
export function toArray<T>(value: T | T[]): T[] {
	if (Array.isArray(value)) return value
	if (isEmpty(value)) return []
	if(isSet(value)) return [...value] as T[]
	if(isMap(value)) {
		return Array.from(value) as T[]
	}
	return [value]
}