import { isArray, isEmpty, isMap, isNumber, isObject, isSet, isString } from "asura-eye"
import type { CollectionKey, Collection, CollectionValue } from "./type"
import { getIndex, getLength } from "./get"

/**
 * @title at
 * @description 通过下标获取值
 * @param {Collection} collection
 * @param {CollectionKey} [index=0] 可为负数
 * @returns {CollectionValue}
 * @version 2.6.0
 */
export function at(
	collection: Collection,
	index: CollectionKey = 0
):CollectionValue {
	if (isEmpty(collection)) return undefined
	const len = getLength(collection)
	if (len === 0) return undefined

	const newIndex = getIndex(collection, index)
	if (isEmpty(newIndex)) return undefined

	if (
		isNumber(newIndex) &&
		(isString(collection) || isArray(collection))
	) return collection[newIndex]

	if (
		isObject<CollectionValue>(collection) &&
		(isNumber(newIndex) || isString(newIndex))
	) return collection[newIndex]

	if (isSet<CollectionValue>(collection)) {
		let index = -1
		for (const value of collection)
			if (++index === newIndex) return value

		return undefined
	}

	if (isMap(collection))
		return (collection as Map<CollectionKey, CollectionValue>).get(newIndex)

	return undefined
}