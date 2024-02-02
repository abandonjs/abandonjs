import { type } from 'asura-eye'
import { type ObjectType } from '../type'
import { stringify } from '../string'

/**
 * @title like
 * @description beComparedValue 包含 comparedValue 的值, 模糊匹配, 忽略换行和空格
 * @param {number|string|ObjectType} beComparedValue 被比较的值(大)
 * @param {number|string|ObjectType} compareValue 比较的值(小)
 * @example like('1223', '123') => true
 * @returns {boolean}
 */
export function like(
  beComparedValue: number | string | ObjectType,
  compareValue: number | string | ObjectType
): boolean {
  if (
    compareValue === beComparedValue &&
    type(compareValue) === type(beComparedValue)
  ) {
    return true
  }

  const newBeComparedValue = stringify(beComparedValue).replace(/'|"|\s/gi, '')
  const newCompareValue = stringify(compareValue).replace(/'|"|\s/gi, '')

  if (newBeComparedValue.includes(newCompareValue)) {
    return true
  }
  const compareValues = newCompareValue.split('')
  let newBeValue = newBeComparedValue
  for (let i = 0; i < compareValues.length; i++) {
    const item = compareValues[i]
    if (!newBeValue.includes(item)) {
      return false
    }
    newBeValue = newBeValue.replace(item, '')
  }
  return newBeValue.length >= 0
}
