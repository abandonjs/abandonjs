import { isDate, type } from 'asura-eye'
import { equalMap } from './map'
import { equalSet } from './set'
import { equalArray } from './array'
import { equalObject } from './object'

/**
 * @title equal
 * @description 比较是否值和类型是否相等/相同, 不支持类型由`===`来比较
 * @supported 基础数据类型, Object, Array, Map, Set, Date
 * @notSupported WeakMap, WeakSet
 * @param {unknown} compareValue
 * @param {unknown} beCompareValue
 * @returns {boolean}
 * @version 2.4.4
 * @lastUpdate 3.8.0
 */
export function equal(compareValue: unknown, beCompareValue: unknown): boolean {
  const compareValueType = type(compareValue)
  const beCompareValueType = type(beCompareValue)

  if (compareValueType !== beCompareValueType) return false

  if (compareValueType === 'Object')
    return equalObject(compareValue, beCompareValue, equal)

  if (compareValueType === 'Array')
    return equalArray(compareValue, beCompareValue, equal)

  if (compareValueType === 'Map')
    return equalMap(compareValue, beCompareValue, equal)

  if (compareValueType === 'Set')
    return equalSet(compareValue, beCompareValue, equal)

  if (Number.isNaN(compareValue)) return Number.isNaN(beCompareValue)

  if (isDate(compareValue) && isDate(beCompareValue))
    return compareValue.getTime() === beCompareValue.getTime()

  return compareValue === beCompareValue
}
