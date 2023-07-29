import { isArray, isEmpty, isMap, isNumber, isSet, isString } from "asura-eye"
import type { CollectionKey, Collection } from "./type"
import { getIndex, getLength } from "./get"

/**
 * @title at
 * @description 通过下标获取值
 * @param collection {Collection}
 * @param index {CollectionKey=0} 可为负数
 * @returns {CollectionValue}
 * @version 2.6.0
 */
export function at(
	collection: Collection,
	index: CollectionKey = 0
) {
	if (isEmpty(collection)) return undefined
	const len = getLength(collection)
	if (len === 0) return undefined

	const newIndex = getIndex(collection, index)
	if (!isNumber(newIndex) || isEmpty(newIndex)) return undefined

	if (
		isString(collection)
		|| isArray(collection)
	) return collection[newIndex]

	if (isSet(collection)) {
		let index = -1
		for (const value of collection)
			if (++index === newIndex) return value

		return undefined
	}

	if (isMap(collection))
		return collection.get(newIndex)

	return undefined
}