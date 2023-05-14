import { type } from 'asura-eye'
import { stringify } from '../string'
import { MapType, SetType } from '../type'

/**
 * @title isEqual
 * @description 比较是否值和类型是否相等, 特殊类型进行判断请使用 equal
 * @param compareValue {unknown}
 * @param beCompareValue {unknown}
 * @returns boolean
 */
export function isEqual(compareValue: unknown, beCompareValue: unknown): boolean {
	if (compareValue === beCompareValue) return true
	return stringify(compareValue) === stringify(beCompareValue)
}

export function equalMap(compareMap: MapType, beCompareMap: MapType): boolean {
	if (compareMap.size !== beCompareMap.size) return false
	for (const [key, value] of compareMap) {
		const beCompareMapTempValue = beCompareMap.get(key)
		if (value !== beCompareMapTempValue
			|| (beCompareMapTempValue === undefined && !beCompareMap.has(key)))
			return false
	}
	return true
}

export function equalSet(compareSet: SetType, beCompareSet: SetType): boolean {
	if ([...compareSet].length !== [...beCompareSet].length) return false
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
	if (compareValue === beCompareValue) return true
	if (type(compareValue) !== type(compareValue)) return false
	if (type(compareValue) === 'Symbol') return false
	if (type(compareValue) === 'Map') return equalMap(compareValue as MapType, beCompareValue as MapType)
	if (type(compareValue) === 'Set') return equalSet(compareValue as SetType, beCompareValue as SetType)
	return stringify(compareValue) === stringify(beCompareValue)
}