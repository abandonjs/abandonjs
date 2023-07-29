import { isArray, isEmpty, isMap, isNumber, isSet, isString } from "asura-eye"
import type { Collection, CollectionKey } from "./type"

export function getLength(collection: Collection) {
	if (
		isArray(collection)
		|| isString(collection)
	) return collection.length

	if (
		isSet(collection)
		|| isMap(collection)
	) return collection.size

	return 0
}

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