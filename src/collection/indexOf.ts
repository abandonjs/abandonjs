import { isArray, isObject, isString, isMap, isSet } from "asura-eye"
import { equal } from "../util"
import type { SetType,  MapType } from "../type"
import type { CollectionKey, CollectionValue, Collection } from "./type"

/**
 * @title indexOf
 * @description 拓展原生 Array.prototype.indexOf | String.prototype.indexOf 的适用方法, 拓展 Map, Set
 * @param {Collection} collection
 * @param {CollectionValue} value
 * @returns {CollectionKey}
 */
export function indexOf(
	collection: Collection,
	value: CollectionValue
): CollectionKey | undefined {
	if (isString(collection))
		return collection.indexOf(value as string)

	if (isArray(collection)) {
		return collection.indexOf(value as string)
	}

	if (isObject(collection)) {
		const keys = Object.keys(collection)
		if (keys.length === 0) return undefined

		for (let i = 0; i < keys.length; i++) {
			const key = keys[i]
			if (equal(collection[key], value)) return key
		}
		return undefined
	}

	if (isMap(collection)) {
		const mapCollection: MapType = collection
		if (mapCollection.size === 0) return undefined
		for (const [key, mapValue] of mapCollection)
			if (equal(mapValue, value)) return key
		return undefined
	}

	if (isSet(collection)) {
		const setCollection: SetType = collection
		let index: number = -1
		if (setCollection.size === 0) return -1
		for (const setValue of setCollection) {
			++index
			if (equal(setValue, value)) return index
		}
		return -1
	}


	return undefined
}