export { filter } from './filter'
export { selects, select } from './select'

/**
 * @title toArray<T>
 * @description 将非数组转换为数组
 * @param value T | T[]
 * @returns T[]
 */
export function toArray<T>(value: T | T[]): T[] {
  if (isArray(value)) return value as T[]
  return [value] as T[]
}


/**
 * @title isArray
 * @description 是否为数组
 * @param value any
 * @returns boolean
 */
export function isArray(value: any): boolean {
  return Array.isArray(value)
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
 * @title unique
 * @description 去除数组重复项
 * @param any[] list 待过滤数组
 * @returns any[]
 */
export function unique(list: any[]): any[] {
  return [...new Set(list)]
}

/**
 * @title chunk
 * @description  通过 size 切割数组
 * @param list any[]
 * @param size number 切割点索引
 * @returns [ [切割点前数据], [切割点后数据] ]
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
export function drop(list: any[] = [], n = 0): any[] {
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
export function dropRight(list: any[], n = 1) {
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
  start = 0,
  end = 0
): T[] {
  while (start < end) array[start++] = value
  return array
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