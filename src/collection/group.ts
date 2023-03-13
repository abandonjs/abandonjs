import { isEmpty, isFunction, isObject, isString } from "check-it-type"
import { MapType, ObjectType } from "../type"
import { toString } from '../string'

export function group<T extends ObjectType = ObjectType>(
	value: T[],
	handler?: string | ((element: T, index?: number, array?: T[]) => string | number)
): ObjectType<T[]> {
	const result: ObjectType<T[]> = {}
	for (let i = 0; i < value.length; i++) {
		let key = ''
		if (isFunction(handler)) {
			key = toString(handler(value[i], i, value))
		}
		if (isString(handler)) {
			if (isObject(value))
				key = value[handler]
		}
		if (result[key] === undefined) {
			result[key] = []
		}
		result[key].push(value[i])
	}
	return result
}

export function groupToMap<T extends MapType = MapType>(
	value: T[],
	handler?: string | ((element: T, index?: number, array?: T[]) => string | number)
): MapType<T[]> {
	const result: MapType<T[]> = new Map<string, T[]>()
	for (let i = 0; i < value.length; i++) {
		let key = ''
		if (isFunction(handler)) {
			key = toString(handler(value[i], i, value))
		}
		if (isString(handler)) {
			if (isObject(value))
				key = value[handler]
		}
		result.set(key,
			isEmpty(result.get(key))
				? (result.get(key) as T[]).concat(value[i])
				: [value[i]])
	}
	return result
}