import { isArray, isNumber, isObject, isString } from 'asura-eye'
import { stringify } from '../string'
import { Collection, CollectionKey, CollectionValue } from './type'
import { getIndex } from './get'
import { equal } from '../util'

/**
 * @title includes
 * @description 检查 value(值) 是否在 collection(集合); 如果指定 fromIndex 是负数，那么从 collection(集合) 的结尾开始检索
 * @param collection {Array|Object|string} 要检索的集合
 * @param value {number|string} 要检索的值
 * @param fromIndex {number=0} 要检索的索引
 * @returns {boolean}
 */
export function includes(
	collection: Collection,
	value: CollectionValue,
	fromIndex: CollectionKey = 0
): boolean {
	const newIndex = getIndex(collection, fromIndex)

	if (isString(collection)) {
		if (!isNumber(newIndex)) return false
		const newCollection = collection.substring(newIndex)
		const newValue = isString(value) ? value : stringify(value)
		if (collection.length < newValue.length) return false
		return newCollection.indexOf(newValue) > -1
	}

	if (isArray(collection)) {
		if (fromIndex === 0) return collection.includes(value)
		if (!isNumber(newIndex)) return false
		for (let i = newIndex; i < collection.length; i++)
			if (equal(collection[i], value)) return true
		return false
	}

	if (isObject(collection)) {
		if (fromIndex === 0) return Object.values(collection).includes(value)
		if (isNumber(newIndex)) {
			const keys = Object.keys(collection)
			for (let i = newIndex; i < keys.length; i++) {
				const key = keys[i]
				if (equal(collection[key], value)) return true
			}
			return false
		}
		if (isString(newIndex)) {
			return equal(collection[newIndex], value)
		}
		return false
	}
	return false
}
