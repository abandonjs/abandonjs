import { randomNumByRange, between } from '../number'
import { iAnyObject, tAnyValueToBooleanFunc } from '../type'
import { defaultValue, type, useArrayPredicate } from '../util'
import { isObject } from '../object'

/**
 * @title initMultArray
 * @description 生成多维数组
 * @param unit 初始化单元
 * @param dimension 多维指定 用&符号隔开
 * @returns 多维数组
 */
export function initMultArray(unit: any, dimension?: string): any[] {
  if (!dimension) return [unit]
  if (!unit) unit = undefined

  let dimArr: number[] = dimension
    .split('&')
    .map((item: string): number => Number(item) || 1)

  if (dimArr.length < 2) {
    return Array(dimArr[0]).fill(unit)
  }

  let depth: number = dimArr.length
  let arrItem: any[] = Array(dimArr[--depth]).fill(unit)
  do {
    let tmp_arrItem: any[] = JSON.parse(JSON.stringify(arrItem)) || []
    arrItem = Array(dimArr[--depth]).fill(tmp_arrItem)
  } while (depth)

  return arrItem
}

// 去除数组重复项
export function arrayUniqueItem(list: any[]): any[] {
  return [...new Set(list)]
}

export function arraySelectOne(list: any[] = [], index?: number): any {
  if (index !== null && index !== undefined) {
    if (index > -1) return list[index]
    if (index < 0) {
      return list[list.length + index]
    }
  }
  return list[~~(Math.random() * list.length)]
}

// 单层过滤
export function arrayFilterByObject(
  list: any[],
  filter: { [key: string]: any },
  retainNotObject = false
): any[] {
  if (!filter || list.length === 0) return list
  let regObj: { [key: string]: RegExp } = {}
  // 生成相应的 RegExp
  for (let key in filter) regObj[key] = new RegExp(filter[key], 'i')
  // 开始过滤
  return list.filter((item: any): boolean => {
    if (!isObject(item)) return retainNotObject
    for (let key in regObj) {
      if (isObject(item[key])) return false
      if (!regObj[key].test(String(item[key]))) return false
    }
    return true
  })
}

// 指定范围长度 来随机选择数组元素
export function arraySelectItems(list: any[], min: number, max: number): any[] {
  let len: number =
    randomNumByRange(min, max > list.length ? list.length : max) || 0
  let result: any[] = []
  let index: number = 0
  while (len--) {
    index = ~~(Math.random() * list.length)
    result.push(list[index])
    list.splice(index, 1)
  }
  return result
}

// 通过 size 切割数组
export function chunk(list: any[], size: number): any[] {
  return [list.slice(0, size), list.slice(size)]
}

// 过滤掉假值 false, null, 0, "", undefined, NaN
export function compact(list: any[]): any[] {
  return list.filter((item: any): boolean => !!item)
}

// 连接 多个数组
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
 * @title difference
 * @description 过滤数组
 * @param list 待过滤的数组
 * @param ...filterConditions 过滤使用的条件
 * @returns 过滤后的数组(new)
 */
export function difference(list: any[], ...filterConditions: any[]): any[] {
  if (!list) return []
  const result: any[] = list || []

  // 整合过滤条件
  if (!filterConditions) return list
  let [...allFilterConditions]: any[] = filterConditions || []
  allFilterConditions = concat(...allFilterConditions)

  return result.filter((item: any): boolean => {
    return !allFilterConditions.includes(item)
  })
}

export function differenceBy() {}
export function differenceWith() {}

/**
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

export function dropRight() {}
export function dropRightWhile() {}
export function dropWhile() {}

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
export function first() {}
export function flatten() {}
export function flattenDeep() {}
export function flattenDepth() {}
export function fromPairs() {}
export function head() {}
export function indexOf() {}
export function initial() {}
export function intersection() {}
export function intersectionBy() {}
export function intersectionWith() {}
export function join() {}
export function last() {}
export function lastIndexOf() {}
export function nth() {}
export function pull() {}
export function pullAll() {}
export function pullAllBy() {}
export function pullAllWith() {}
export function pullAt() {}
export function remove() {}
export function reverse() {}
export function slice() {}
export function sortedIndex() {}
export function sortedIndexBy() {}
export function sortedIndexOf() {}
export function sortedIndexIndex() {}
export function sortedIndexIndexOf() {}
export function sortedUniq() {}
export function sortedUniqBy() {}
export function tail() {}
export function take() {}
export function takeRight() {}
export function takeRightWhile() {}
export function takeWhile() {}
export function union() {}
export function unionBy() {}
export function unionWith() {}
export function uniq() {}
export function uniqBy() {}
export function uniqWith() {}
export function unzip() {}
export function unzipWith() {}
export function without() {}
export function xor() {}
export function xorWith() {}
export function zip() {}
export function zipObject() {}
export function zipObjectDeep() {}
export function zipWith() {}
