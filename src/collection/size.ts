import { isArray, isObject, isString } from 'asura-eye'
import { Collection } from './type'

/**
 * @title size
 * @description 返回集合长度
 * @param collection {Object|Array}
 * @returns {number}
 */
export function size(collection: Collection): number {
	if (isArray(collection) || isString(collection)) return collection.length
	if (isObject(collection)) return Object.keys(collection).length
	return 0
}
