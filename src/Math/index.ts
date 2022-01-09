import { INFINITY, MAX_VALUES_NUMBER, MIN_VALUES_NUMBER } from '../constants'
import { toNumber, isEffectNumber } from '../number'
import { type } from '../util'
import { tItteratee } from '../type'

/**
 * @ 无限大（小）当做 js Number 的最大（小）值[主要处理计算异常的问题, 二期再加入大位数处理]
 * @ 二期再加入大位数计算
 */

/**
 * @title countingMethod
 * @description 将数字装换成需要装换的数据格式(k, m, g, t, p, e, z, y, b)
 * @param num (number|string) 待转换的数子 (<binary^ 9)
 * @param binary (number) 进制 (default:1024)
 * @returns (number)
 */
const __binary: string[] = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'B']
export function countingMethod(
  num: number | string,
  binary: number = 1024
): string {
  let result: string = ''
  let tempNum: number = Number(num)
  if (num > binary ** 9) return '1024B'
  let index: number = 0

  function translate(index: number): void {
    let _index_num: number = tempNum % binary
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
 * @param augend 加数
 * @param addend 被加数
 * @returns 和
 */
export function add(augend: number, addend: number): number {
  return toNumber(augend) + toNumber(addend)
}

/**
 * @title ceil
 * @description 向上取整的值(没有对number边界值[Infinity值处理])
 * @param num 要向上舍入的值
 * @param precision 精度
 * @returns
 */
export function ceil(num: number, precision: number = 0): number {
  return Math.ceil(num * toNumber(10 ** precision)) * toNumber(10 ** -precision)
}

/**
 * @title divide
 * @description 相除
 * @param dividend 除数
 * @param divisor 被除数
 * @returns 商
 */
export function divide(dividend: number, divisor: number): number {
  return toNumber(dividend) / toNumber(divisor)
}

/**
 * @title  floor
 * @description 向下取整(没有对number边界值[Infinity值处理])
 * @param num 待向下舍入的值
 * @param precision 精度
 * @returns 向下取整
 */
export function floor(num: number, precision: number = 0): number {
  return (
    Math.floor(num * toNumber(10 ** precision)) * toNumber(10 ** -precision)
  )
}

/**
 * @title max
 * @description 求最大值(只会判断有效值)
 * @param list 数组
 * @returns 最大值
 */

export function max(list: any[]): number | undefined {
  let maxValue: number | undefined = undefined
  list.forEach((val: any): void => {
    let item: number = Number(val)
    if (isEffectNumber(item)) {
      if (maxValue === undefined) {
        maxValue = item
      } else maxValue = item < maxValue ? maxValue : item
    }
  })
  return maxValue
}

const useValue: any = (itteratee: tItteratee): any => {
  const __type: string = type(itteratee)

  return function (val: any): any {
    if (__type === 'String') return val[itteratee as string]
    if (__type === 'Function') return (itteratee as (val: any) => any)(val)
    return val
  }
}

/**
 * @title maxBy
 * @description 求最大值
 * @param list 要迭代数组
 * @param itteratee 迭代函数 / key
 * @returns
 */
export function maxBy(
  list: any[],
  itteratee?: tItteratee
): number | undefined | { [key: string]: any } {
  let _type: string = type(itteratee)
  if (_type === 'Undefined') {
    return max(list)
  }
  let maxValue: number | undefined = undefined
  let result: number | undefined | { [key: string]: any } = undefined
  const handleValue: any = useValue(itteratee)

  list.forEach((val: any): void => {
    let item: number = Number(handleValue(val))
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
  return meanBy(list)
}

/**
 * @title meanBy
 * @description 求平均数
 * @param list 要迭代的数组
 * @param itteratee 迭代函数 / key
 * @returns 平均数
 */
export function meanBy(list: any[], itteratee?: tItteratee): any {
  let total: number = 0
  let len: number = 0
  let _type: string = type(itteratee)
  const handleValue: any = useValue(itteratee)
  list.forEach((val: any): void => {
    let item: number = Number(handleValue(val))
    if (isEffectNumber(item)) {
      total += item
      ++len
    }
  })
  if (len === 0) return undefined
  return total / len
}

/**
 * @title 最小值
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
export function minBy(list: any[], itteratee?: tItteratee): any {
  if (list.length === 0) return undefined
  let result: any = undefined
  let minValue: number | undefined = undefined
  let len: number = list.length
  let _type: string = type(itteratee)
  const handleValue: any = useValue(itteratee)
  while (len--) {
    let val: number = Number(handleValue(list[len]))
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
 */
export function sum(list: any[]): undefined | number {
  return sumBy(list)
}
/**
 * @title sumBy
 * @description 求和
 * @param list 要迭代的数组
 * @param itteratee 迭代函数 / key
 * @returns 总和
 */
export function sumBy(list: any[], itteratee?: tItteratee): undefined | number {
  if (list.length === 0) return undefined
  let _type: string = type(itteratee)
  let total: undefined | number = undefined
  let len: number = list.length
  const handleValue: any = useValue(itteratee)
  while (len--) {
    let val: number = Number(handleValue(list[len]))
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
 * @param augend 乘数
 * @param addend 被乘数
 * @returns 积
 */
export function multiply(augend: number, addend: number): number {
  return toNumber(augend) * toNumber(addend)
}

/**
 * @title round
 * @description 四舍五入
 * @param num 要四舍五入的数
 * @param precision 精度
 * @returns 四舍五入的数字
 */
export function round(num: number, precision?: number): number {
  if (precision === undefined) precision = 0
  return (
    Math.round(num * toNumber(10 ** precision)) * toNumber(10 ** -precision)
  )
}
