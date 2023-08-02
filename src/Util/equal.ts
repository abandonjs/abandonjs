import { isMap, isObject, isSet, type } from 'asura-eye'
import { stringify } from '../string'
import { MapType, ObjectType, SetType } from '../type'

export function equalObject(compareObject: ObjectType, beCompareObject: ObjectType): boolean {
	if (
		!isObject(compareObject)
		|| !isObject(beCompareObject)
	) return false

	const compareValueKeys = Object.keys(compareObject)
	const beCompareValueKeys = Object.keys(beCompareObject)

	if (
		compareValueKeys.length
		!== beCompareValueKeys.length
	) return false

	for (let i = 0; i < compareValueKeys.length; i++) {
		const key = compareValueKeys[i]
		if (!equal(compareObject[key], beCompareObject[key]))
			return false
	}
	return true
}

export function equalMap(compareMap: MapType, beCompareMap: MapType): boolean {

	if (
		!isMap(compareMap)
		|| !isMap(beCompareMap)
		|| compareMap.size !== beCompareMap.size
	) return false

	for (const [key, value] of compareMap) {
		const beCompareMapTempValue = beCompareMap.get(key)
		if (value !== beCompareMapTempValue
			|| (beCompareMapTempValue === undefined && !beCompareMap.has(key)))
			return false
	}
	return true
}

export function equalSet(compareSet: SetType, beCompareSet: SetType): boolean {

	if (
		!isSet(compareSet) ||
		!isSet(beCompareSet) ||
		compareSet.size !== beCompareSet.size
	)
		return false
	for (const [, value] of compareSet.entries()) {
		if (!beCompareSet.has(value)) return false
	}
	return true
}

/**
 * @title equal
 * @description 比较是否值和类型是否相等, 不支持WeakMap, WeakSet
 * @param compareValue {unknown}
 * @param beCompareValue {unknown}
 * @returns boolean
 * @version 2.4.4
 */
export function equal(compareValue: unknown, beCompareValue: unknown): boolean {
	if (type(compareValue) !== type(compareValue)) return false
	if (compareValue === beCompareValue) return true
	if (
		type(compareValue) === 'Symbol'
		|| type(beCompareValue) === 'Symbol'
	) return false
	if (type(compareValue) === 'Map') return equalMap(compareValue as MapType, beCompareValue as MapType)
	if (type(compareValue) === 'Set') return equalSet(compareValue as SetType, beCompareValue as SetType)
	if (
		isObject(compareValue)
		&& isObject(beCompareValue)
	)
		return equalObject(compareValue, beCompareValue)


	return stringify(compareValue) === stringify(beCompareValue)
}