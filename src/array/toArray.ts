import { isEmpty, isMap, isObject, isSet } from "asura-eye"

/**
 * @title toArray<T>
 * @description 将非数组转换为数组, 对象会转换成 Array([key,value])
 * @param value {T|T[]}
 * @returns {T[]}
 * @lastUpdate 3.3.0
 */
export function toArray<T>(value: T | T[]): T[] {
	if (Array.isArray(value)) return value
	if (isEmpty(value)) return []
	if (isSet(value)) return [...value] as T[]
	if (isMap(value)) {
		return Array.from(value) as T[]
	}
	if (isObject(value)) {
		return Object.keys(value).map(key => {
			return [key, value[key]]
		}) as T[]
	}
	return [value]
}