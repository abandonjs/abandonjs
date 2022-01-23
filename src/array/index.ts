import { iAnyObject, tAnyValueToBooleanFunc } from '../type'
import { defaultValue, useArrayPredicate } from '../util'
import initMultArray from './initMultArray'
import { arrayFilterByObject, compact } from './filter'
import { arraySelectItems, arraySelectOne, difference } from './select'
export {
  initMultArray,
  arrayFilterByObject,
  difference,
  compact,
  arraySelectItems,
  arraySelectOne
}

/**
 * @title pick
 * @description 从数组中取任意 一个 元素
 * @param any[] list
 * @returns 数组中任意一个
 */
export function pick(list: any[]): string {
  return list[Math.floor(Math.random() * list.length)]
}

/**
 * @title arrayUniqueItem
 * @description 去除数组重复项
 * @param any[] list 待过滤数组
 * @returns any[]
 */
export function arrayUniqueItem(list: any[]): any[] {
  return [...new Set(list)]
}

/**
 * @title chunk
 * @description  通过 size 切割数组
 * @param list any[]
 * @param size number 切割点索引
 * @returns any[]
 */
export function chunk(list: any[], size: number): any[] {
  return [list.slice(0, size), list.slice(size)]
}

/**
 * @title concat
 * @description 连接多个数组
 * @params ...list any[][] 多个数组 
 * @returns any[]
 */
export function concat(...list: any[]): any[] {
  let result: any[] = []
  if (list && list.length > 0) {
    let len: number = list.length
    while (len--) {
      if (Array.isArray(list[len])) {
        result = result.concat(list[len])
      } else {
        result.push(list[len])
      }
    }
  }
  return result
}

/**
 * @title drop
 * @description 去除前n个元素
 * @param any[] list 数组
 * @param number n 要去除元素个数
 * @returns any[] list 剩余切片
 */
export function drop(list: any[] = [], n: number = 0): any[] {
  while (n--) {
    if (list.length < 1) return []
    list.shift()
  }
  return list
}

/**
 * @title dropRight
 * @description 从右往左删除的指定个数
 * @param list 要处理的数组
 * @param n 需要删除的元素数量 [=1]
 */
export function dropRight(list: any[], n: number = 1) {
  const len: number = list.length || 0
  return list.splice(0, len - n)
}

/**
 * @title fill
 * @description 在原有数组上改变, 修改指定位置的值
 * @param array 待填充改变的数组
 * @param value 填充值
 * @param start 开始位置
 * @param end 结束位置(不包括, 默认array.length)
 * @returns
 */
export function fill<T>(
  array: T[],
  value: any = undefined,
  start: number = 0,
  end: number = 0
): T[] {
  end = defaultValue(end, defaultValue(array.length, 0))
  while (start < end) array[start++] = value
  return array
}

/**
 * @title findIndex(待完成)
 * @description 通过 predicate 判断为真值的元素的索引值（index），而不是元素本身
 * @param array 要搜索的数组
 * @param predicate (Array|Function|Object|string): 这个函数会在每一次迭代调用
 * @param fromIndex (number) 指定开始查找的下标
 * @returns (number): 返回找到元素的 索引值（index），否则返回 - 1。
 */
export function findIndex<T>(
  array: T[],
  predicate: T[] | ((val: T) => T) | iAnyObject | string,
  fromIndex: number = 0
): number {
  let len: number = array.length
  let predicateFunc: tAnyValueToBooleanFunc = useArrayPredicate(predicate)
  if (array.length === 0) return -1
  do {
    if (predicateFunc(array[fromIndex])) return fromIndex
  } while (fromIndex++ < len)
  return -1
}

/**
 * @title findIndex(待完成)
 * @description 通过 predicate 判断为真值的元素的索引值（index），而不是元素本身(倒序查找)
 * @param array (Array): 要搜索的数组
 * @param predicate (Array|Function|Object|string): 这个函数会在每一次迭代调用。
 * @param fromIndex [fromIndex=array.length-1] (number): 指定开始查找的下标
 * @returns (number): 返回找到元素的 索引值（index），否则返回 - 1。
 */
export function findLastIndex<T>(
  array: T[],
  predicate: T[] | ((val: T) => T) | iAnyObject | string,
  fromIndex: number
): number {
  let len: number = array.length
  fromIndex = defaultValue(fromIndex, len - 1)
  let predicateFunc: tAnyValueToBooleanFunc = useArrayPredicate(predicate)
  if (array.length === 0) return -1
  do {
    if (predicateFunc(array[fromIndex])) return fromIndex
  } while (fromIndex--)
  return -1
}
