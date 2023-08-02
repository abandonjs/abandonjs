import { isBoolean, isNumber, isObject, isString } from "asura-eye"
import { ObjectType } from "../type"

/**
 * @title serialize
 * @description 序列化对象
 * @param query object
 * @param encode boolean = false
 * @returns string 
 */
export function serialize<T extends ObjectType = ObjectType<string | number>>(query: T, encode = false): string {
	if (isObject(query))
		return Object.keys(query)
			.map((key) => {
				const value = query[key]
				if (
					isString(value)
					|| isNumber(value)
					|| isBoolean(value)
				)
					return `${key}=${encode
						? encodeURIComponent(value)
						: value}`
			})
			.join('&')
	return ''
}
