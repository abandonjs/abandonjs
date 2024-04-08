import { type } from 'asura-eye'

/**
 * @title equalHelper
 * @description 比较是否值和类型是否相等, 不支持WeakMap, WeakSet
 * @param {unknown} compareValue
 * @param {unknown} beCompareValue
 * @returns {boolean}
 */
export function equalHelper(
  compareValue: unknown,
  beCompareValue: unknown
): boolean {
  const compareValueType = type(compareValue)
  const beCompareValueType = type(beCompareValue)

  if (compareValue !== beCompareValueType || compareValueType === 'Symbol')
    return false

  return compareValue === beCompareValue
}
