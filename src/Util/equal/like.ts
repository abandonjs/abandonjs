import { stringify } from '../../string'
import { isDate, isEmpty, type } from 'asura-eye'
import { equalMap } from './map'
import { equalSet2 } from './set'
import { equalArray2 } from './array'
import { equalObject } from './object'

/**
 * @title like
 * @description 比较是否值和类型是否相等/相同, 不支持类型由`===`来比较 或 转字符串后比对
 * @supported 基础数据类型, Object, Array, Map, Set, Date
 * @notSupported WeakMap, WeakSet
 * @param {unknown} compareValue
 * @param {unknown} beCompareValue
 * @returns {boolean}
 * @version 3.8.0
 */
export function like(compareValue: unknown, beCompareValue: unknown): boolean {
  if (compareValue === beCompareValue) {
    return true
  }
  if (
    (isEmpty(compareValue) || compareValue === '') &&
    (isEmpty(beCompareValue) || beCompareValue === '')
  ) {
    return true
  }
  const compareValueType = type(compareValue)
  // const beCompareValueType = type(beCompareValue)

  if (compareValueType === 'Object')
    return equalObject(compareValue, beCompareValue, like)

  if (compareValueType === 'Array')
    return equalArray2(compareValue, beCompareValue, like)

  if (compareValueType === 'Set')
    return equalSet2(compareValue, beCompareValue, like)

  if (compareValueType === 'Map')
    return equalMap(compareValue, beCompareValue, like)

  if (Number.isNaN(compareValue)) return Number.isNaN(beCompareValue)

  if (isDate(compareValue) && isDate(beCompareValue))
    return compareValue.getTime() === beCompareValue.getTime()

  const compareValueStr = stringify(compareValue).replace(/'|"|\s/gi, '')
  const beCompareValueStr = stringify(beCompareValue).replace(/'|"|\s/gi, '')

  return compareValueStr === beCompareValueStr
}
