import { isArray, isEmpty, isNumber, isObject, isString } from 'asura-eye'
import type { Val } from '../type'

/**
 * @title toPathValue
 * @description 通过path 来获取值
 * @param val 待取值
 * @param {string|number} path string 路径 (若路径有`.` 可用`\\.`代替)
 * @returns 通过路径获取对应值
 */
export function toPathValue(val: Val, path: string | number): Val {

	if (isNumber(path)) {
		if (isString(val) || isArray(val))
			return val[path]
		else {
			return undefined
		}
	}


	const paths: string[] = path.split(/(?<!\\)\./) || []

	let tmpValue: Val = val

	for (let i = 0; i < paths.length; i++) {
		const item = paths[i].replaceAll('\\.', '.')
		tmpValue = isObject(tmpValue) ? tmpValue[item] : undefined
		if (isEmpty(tmpValue) || i === paths.length - 1)
			return tmpValue
	}
	return undefined
}