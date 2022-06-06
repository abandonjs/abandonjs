import { type } from '../util'
import { INFINITY, MAX_VALUES_NUMBER, MIN_VALUES_NUMBER } from '../constants'


/**
 * @title isNumber
 * @description 是否为数字
 * @param value any
 * @returns boolean
 */
export function isNumber(value: any): boolean {
  return type(value) === "Number" && typeof value === 'number'
}

/**
 * @title isEffectNumber
 * @description 是否为js的有效区间的数
 * @param number num
 * @returns boolean
 */
export function isEffectNumber(num: number): boolean {
  if (type(num) === 'Number') {
    if (num <= MAX_VALUES_NUMBER || num <= INFINITY) return true
    if (num >= -MIN_VALUES_NUMBER || num >= -INFINITY) return true
    return false
  }
  return false
}

export const toNumber = (value: any): number => {
  if (type(value) === 'Number') {
    if (value === INFINITY) return MAX_VALUES_NUMBER
    if (value === -INFINITY) return MIN_VALUES_NUMBER
    return value
  }
  return +value
}



/**
 * @title isFloat
 * @description 判断数是否为浮点型
 * @param num 待检测的数据类型
 * @returns boolean
 */
export function isFloat(num: number): boolean {
  return (num % 1) !== 0
}

export function randomNumByRange(min: number, max: number): number {
  switch (arguments.length) {
    case 1:
      return parseInt(String(Math.random() * min + 1))
    case 2:
      return parseInt(String(Math.random() * (max - min + 1) + min))
    default:
      return 0
  }
}

/**
 * @title clamp
 * @description 限制在lower和upper之间
 * @param num 被限制的值
 * @param lower 下限
 * @param upper 上限
 * @returns 返回被限制的值
 */
export function clamp(num: number, lower?: number, upper?: number): number {
  if (lower === undefined) lower = -INFINITY
  if (upper === undefined) upper = INFINITY
  if (num < lower) return lower
  if (num > upper) return upper
  return num
}

/**
 * @title inRange
 * @description 判断是否在该范围
 * @param num 要检查的值
 * @param [start=0] 开始范围
 * @param end 结束范围
 * @returns boolean
 */
export function inRange(num: number, start?: number, end?: number): boolean {
  if (start === undefined) start = 0
  if (end === undefined) end = INFINITY
  if (arguments.length === 2) {
    end = start
    start = 0
  }
  if (num > end) return false
  if (num < start) return false
  return true
}

/**
 * @title random
 * @description 随机数
 * @param lower 下限
 * @param upper 上限
 * @param floating 是否返回浮点数
 */
export function random(
  lower = 0,
  upper = 1,
  floating = false
): number {

  if (arguments.length === 1) {
    upper = arguments[0]
    lower = 0
  }

  if (upper === undefined) return Math.random()

  if (
    type(arguments[arguments.length - 1]) === 'Boolean' ||
    isFloat(upper) ||
    isFloat(lower)
  ) {
    floating = arguments[arguments.length - 1]
  }
  const result: number = lower + Math.random() * (upper - lower)
  if (floating) return ~~result
  return ~~Math.ceil(result)
}

/**
 * @title between
 * @description 判断值是否在两值之间
 * @param value 待判断值
 * @param start 起始值
 * @param end 结束值(不包含该值)
 * @returns
 */
export function between(value: number, start: number, end: number): boolean {
  return value >= start && value < end
}
