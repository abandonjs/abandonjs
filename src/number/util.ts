import { INFINITY, MAX_VALUES_NUMBER } from '../constants'
import { isFloat, isNumber } from 'asura-eye'

/**
 * @title spLength
 * @description 指定长度
 * @param {number|string} value
 * @param {number} [min=0]
 * @param {number} max
 * @returns {string}
 */
export function spLength(
  value: number | string,
  min: number = 0,
  max: number
): string {
  const tmpValue: string = isNumber(value) ? value.toString() : value

  if (!/^[0-9]*$/.test(tmpValue)) return new Array(min).fill(0).join('')

  const len = tmpValue.length
  if (len > max) return tmpValue.slice(len - max)
  if (len < min) return new Array(min - len).fill(0).join('') + tmpValue

  return tmpValue
}

/**
 * @title getDecimal
 * @description 获取小数点位数
 * @param {number} num
 * @returns {number}
 */
export function getDecimal(num: number): number {
  if (!isFloat(num)) return 0
  return num.toString().split('.')[1].length
}
/**
 * @title clamp
 * @description 限制在lower和upper之间
 * @param {number} num 待限制的值
 * @param {number} lower 下限
 * @param {number} upper 上限
 * @returns 返回被限制的值
 */
export function clamp(
  num: number,
  lower: number = -INFINITY,
  upper: number = INFINITY
): number {
  if (num < lower) return lower
  if (num > upper) return upper
  return num
}

/**
 * @title inRange
 * @description 判断是否在该范围
 * @param {number} num 要检查的值
 * @param {number} start=0 开始范围
 * @param {number} end 结束范围(包含该值)
 * @returns {boolean}
 */
export function inRange(
  num: number,
  start: number = 0,
  end: number = MAX_VALUES_NUMBER
): boolean {
  if (end < start) return false
  if (num > end) return false
  if (num < start) return false
  return true
}

/**
 * @title between
 * @description 判断值是否在两值之间
 * @param {number} num 待判断值
 * @param {number} start=0 起始值
 * @param {number} [end] 结束值(不包含该值)
 * @returns {boolean}
 */
export function between(
  num: number,
  start: number = 0,
  end: number = MAX_VALUES_NUMBER
): boolean {
  if (end < start) return false
  if (num >= end) return false
  if (num < start) return false
  return true
}