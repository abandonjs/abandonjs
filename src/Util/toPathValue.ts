import { isArray, isEmpty, isObject, isString, likeNumber } from 'asura-eye'
import type { Val } from '../type'

/**
 * @title toPathValue
 * @description 通过path 来获取值
 * @param val 待取值
 * @param {string|number} path string 路径 (若路径有`.` 可用`\\.`代替)
 * @returns 通过路径获取对应值
 */
export function toPathValue<T = any>(val: Val, path?: string | number): T | undefined {

	if (isEmpty(path)) {
		return val as T
	}

	if (likeNumber(path)) {
		if (isArray(val)) {
			return val[Number(path)] as T
		} else if (isString(val) || isObject(val))
			return val[path]
		else {
			return undefined
		}
	}

	if (!isString(path)) return undefined

	const paths: string[] = path.split(/(?<!\\)\./)

	let tmpValue: Val = val

	for (let i = 0; i < paths.length; i++) {
		const item = paths[i].replaceAll('\\.', '.')
		if (isObject(tmpValue)) {
			tmpValue = tmpValue[item]
		} else if (isArray(tmpValue) && likeNumber(item)) {
			tmpValue = tmpValue[Number(item)]
		} else {
			return undefined
		}
	}
	return tmpValue as T
}