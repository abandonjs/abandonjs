import { isArray, isEmpty, isMap, isNumber, isObject, isSet, isString } from "asura-eye"
import type { Collection, CollectionKey } from "./type"

/**
 * @title getLength
 * @description 获取集合长度(大小)
 * @param collection {Collection}
 * @returns {number}
 */
export function getLength(collection: Collection) {
	if (
		isArray(collection)
		|| isString(collection)
	) return collection.length

	if (isObject(collection))
		return Object.keys(collection).length

	if (
		isSet(collection)
		|| isMap(collection)
	) return collection.size

	return 0
}

/**
 * @title getIndex
 * @description 获取集合key
 * @param collection {Collection}
 * @param key {CollectionKey}
 * @returns {CollectionKey}
 */
export function getIndex(collection: Collection, key: CollectionKey) {

	if (
		isArray(collection)
		|| isString(collection)
		|| isMap(collection)
		|| isSet(collection)
	) {
		const len = getLength(collection)
		if (len === 0) return 0
		let newIndex = isNumber(key) ? key : Number(key)
		if (isEmpty(newIndex) || !isNumber(newIndex)) return key

		if (newIndex > len) return len - 1
		if (newIndex < 0) return len + newIndex

		return newIndex
	}

	return key

}