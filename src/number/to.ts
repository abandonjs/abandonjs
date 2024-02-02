import { isEffectNumber, isNumber, isString } from 'asura-eye'
import { INFINITY, MAX_VALUES_NUMBER, MIN_VALUES_NUMBER } from '../constants'

/**
 * @title toNumber
 * @description 将值转换为Number, 不可以正确装换的值, 均返回0
 * @param {unknown} num 待转换的数值
 * @returns {number}
 */
export function toNumber(num: unknown): number {
  if (isString(num) || isNumber(num)) {
    const value = isString(num) ? Number(num) : num
    if (isEffectNumber(value)) {
      if (value === INFINITY) return MAX_VALUES_NUMBER
      if (value === -INFINITY) return MIN_VALUES_NUMBER
      return value
    }
  }
  return 0
}

/**
 * @title toFloat
 * @description 转换为指定位数的浮点数
 * @param {number} num 数字
 * @param {number} fixed 小数点位数
 * @returns {number}
 */
export function toFloat(num: number, fixed: number = 1): number {
  return Number(num.toFixed(fixed))
}

/**
 * @title toThousands
 * @description 数字每千位加逗号
 * @param {string|number} num
 * @returns {string}
 */
export function toThousands(num: string | number): string {
  return num.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}
