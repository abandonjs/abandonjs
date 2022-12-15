import { useValue } from './util'
import { toNumber } from '../number'
import { isEffectNumber, isNumber } from '../is/isNumber'
import { type } from '../util'
import { Itteratee } from '../type'
import { MAX_VALUES_NUMBER, MIN_VALUES_NUMBER } from '../constants'

/**
 * @ 无限大（小）当做 js Number 的最大（小）值[主要处理计算异常的问题, 二期再加入大位数处理]
 * @ 二期再加入大位数计算
 */

const __binary: string[] = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'B']
/**
 * @title HEX
 * @description 将数字装换成需要装换的数据格式(k, m, g, t, p, e, z, y, b)
 * @param num (number|string) 待转换的数子 (<binary^ 9)
 * @param binary (number) 进制 (default:1024)
 * @returns (number)
 */
export function toHEX(
  num: number | string,
  binary = 1024
): string {
  let result = ''
  let tempNum = Number(num)
  if (num > binary ** 9) return '1024B'
  const index = 0

  function translate(index: number): void {
    const _index_num: number = tempNum % binary
    tempNum = (tempNum - _index_num) / binary
    if (_index_num > 0) result = _index_num + __binary[index] + result
    if (tempNum < 1) return
    translate(++index)
  }
  translate(index)
  return result
}

/**
 * @title add
 * @description 两数求和
 * @param augend number 加数
 * @param addend number 被加数
 * @returns number ( 不会超过数字的边界值 1.7976931348623157e+308 )
 */
export function add(augend: number, addend: number): number {
  return toNumber(toNumber(augend) + toNumber(addend))
}

/**
 * @title ceil
 * @description 向上取整的值(没有对number边界值[Infinity值处理])
 * @param num 要向上舍入的值
 * @param precision number = 0 精度(负数就是想整数部分取整)
 * @returns number
 */
export function ceil(num: number, precision = 0): number {
  return Math.ceil(num * toNumber(10 ** precision)) * toNumber(10 ** -precision)
}

/**
 * @title divide
 * @description 相除
 * @param dividend number 除数
 * @param divisor number 被除数
 * @returns number 商 
 */
export function divide(dividend: number, divisor: number): number {
  if (divisor >= MAX_VALUES_NUMBER || divisor <= MIN_VALUES_NUMBER) return 0
  return toNumber(dividend) / toNumber(divisor)
}

/**
 * @title floor
 * @description 向下取整(没有对number边界值[Infinity值处理])
 * @param num 待向下舍入的值
 * @param precision 精度 (负数就是处理整数部分)
 * @returns 向下取整
 */
export function floor(num: number, precision = 0): number {
  return (
    Math.floor(num * toNumber(10 ** precision)) * toNumber(10 ** -precision)
  )
}

/**
 * @title max
 * @description 求最大值(只会判断有效值), 只会统计number | string类型的数值
 * @param list 数组
 * @returns 最大值
 */

export function max(list: any[]): number | undefined {
  let maxValue: number | undefined = undefined
  list.forEach((val: any): void => {
    const item = Number(val)
    if (isEffectNumber(item)) {
      if (maxValue === undefined) {
        maxValue = item
      } else maxValue = item < maxValue ? maxValue : item
    }
  })
  return maxValue
}

/**
 * @title maxBy
 * @description 求最大值
 * @param list 要迭代数组
 * @param itteratee 迭代函数 / key
 * @returns 最大值
 */
export function maxBy(
  list: any[],
  itteratee?: Itteratee
): number | undefined | { [key: string]: any } {
  const _type: string = type(itteratee)
  if (_type === 'Undefined') {
    return max(list)
  }
  let maxValue: number | undefined = undefined
  let result: number | undefined | { [key: string]: any } = undefined
  const handleValue: any = useValue(itteratee)

  list.forEach((val: any): void => {
    const item = Number(handleValue(val))
    if (isEffectNumber(item)) {
      if (maxValue === undefined) {
        maxValue = item
        result = val
      }
      if (item > maxValue) {
        maxValue = item
        result = val
      }
    }
  })
  return result
}

/**
 * @title mean
 * @description 求平均值
 * @param list 要迭代的数组
 * @returns 平均值
 */
export function mean(list: any[]): number | undefined {
  return sum(list) / list.length
}

/**
 * @title meanBy
 * @description 求平均数
 * @param list 要迭代的数组
 * @param itteratee 迭代函数 / key
 * @returns 平均数
 */
export function meanBy(list: any[], itteratee?: Itteratee): any {

  return list.reduce((total = 0, item) => {
    const itemNum = Number(useValue(itteratee)(item))
    if (isNumber(itemNum)) {
      return total + itemNum
    }
    if (isNumber(total)) {
      return total
    }
    return 0
  }) / list.length
}

/**
 * @title min
 * @description 求最小值
 * @param list 要迭代的数组
 * @returns 最小值
 */
export function min(list: any[]): number | undefined {
  return minBy(list)
}

/**
 * @title minBy
 * @description 求最小值
 * @param list 要迭代的数组
 * @param itteratee 迭代函数 / key
 * @returns 最小值
 */
export function minBy(list: any[], itteratee?: Itteratee): any {

  if (list.length === 0) return undefined
  let result: any = undefined
  let minValue: number | undefined = undefined
  let len: number = list.length

  while (len--) {
    const val = Number(useValue(itteratee)(list[len]))
    if (isEffectNumber(val)) {
      if (minValue === undefined) {
        minValue = val
      } else minValue = minValue < val ? minValue : val
      result = list[len]
    }
  }

  return result
}

/**
 * @title sum
 * @description 求和
 * @param list 要迭代的数组
 * @returns 总和
 * @version 2.2.3
 */
export function sum(list: any[] = []): number {
  return list.reduce((total = 0, item) => {
    const itemNum = Number(item)
    if (isNumber(itemNum)) {
      return total + itemNum
    }
    if (isNumber(total)) {
      return total
    }
    return 0
  })
}
/**
 * @title sumBy
 * @description 求和
 * @param list 要迭代的数组
 * @param itteratee 迭代函数 / key
 * @returns 总和
 */
export function sumBy(list: any[], itteratee?: Itteratee): undefined | number {
  if (list.length === 0) return undefined
  let total: undefined | number = 0
  let len: number = list.length
  while (len--) {
    const val = Number(useValue(itteratee)(list[len]))
    if (isEffectNumber(val)) {
      if (total === undefined) total = 0
      total += val
    }
  }
  return total
}

/**
 * @title multiply
 * @description 相乘
 * @param augend number 乘数
 * @param addend number 被乘数
 * @returns 积
 */
export function multiply(augend: number, addend: number): number {
  return toNumber(toNumber(augend) * toNumber(addend))
}
