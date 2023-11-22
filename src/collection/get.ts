import { isArray, isEffectObject, isEmpty, isMap, isNumber, isObject, isSet, isString } from "asura-eye"
import type { Collection, CollectionKey } from "./type"
import { stringify } from '../string'

/**
 * @title getLength
 * @description 获取集合长度(大小)
 * @param {Collection} collection
 * @returns {number}
 */
export function getLength(collection: Collection): number {
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
 * @param {Collection} collection 
 * @param {CollectionKey} key
 * @returns {CollectionKey|undefined}
 */
export function getIndex(collection: Collection, key: CollectionKey): CollectionKey | undefined {

	if (
		isArray(collection)
		|| isString(collection)
		|| isSet(collection)
	) {
		const len = getLength(collection)
		let newIndex = isNumber(key) ? key : Number(key)
		if (isEmpty(newIndex) || !isNumber(newIndex)) return undefined

		if (len === 0) return 0
		if (newIndex > len) return len - 1
		if (newIndex < 0) return len + newIndex

		return newIndex
	}

	if (
		isMap(collection) &&
		collection.has(key as any)
	)
		return key

	if (isEffectObject(collection)) {
		const newKey: string = isString(key) ? key : stringify(key)
		if (Object.keys(collection).includes(newKey))
			return newKey
	}

	return undefined

}