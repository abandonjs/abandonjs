import { isMap, isObject, isString } from "asura-eye"
import { type MapType, type ObjectType } from "../type"
import { type CollectionKey } from "./type"

/**
 * @title omit<T extends ObjectType>
 * @description 去除集合属性
 * @param {T|Map} collection
 * @param {CollectionKey[]} propertys
 * @returns {T|Map}
 */
export function omit<T extends ObjectType = ObjectType>(
	collection: T | MapType,
	propertys: CollectionKey[] = []
): T | {} {
	if (isMap(collection)) {
		const newMap = new Map(collection)
		propertys.forEach(property => {
			isString(property)
				&& newMap.delete(property)
		})
		return newMap
	}
	if (isObject(collection)) {
		const newRecord = { ...collection }
		const keys = Object.keys(collection)
		propertys.forEach(property => {
			isString(property)
				&& keys.includes(property)
				&& delete newRecord[property]
		})
		return newRecord
	}
	return {}
}

