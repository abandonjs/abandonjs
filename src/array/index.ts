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
export function pick<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)]
}

/**
 * @title unique<T>
 * @description 去除数组重复项
 * @param T[] list 待过滤数组
 * @returns T[]
 */
export function unique<T>(list: T[]): T[] {
  return [...new Set(list)]
}

/**
 * @title chunk<T>
 * @description 通过 size 切割数组
 * @param list T[]
 * @param size number 切割点索引
 * @returns T[][] [ [切割点前数据], [切割点后数据] ]
 */
export function chunk<T>(list: T[], size: number): T[][] {
  return [list.slice(0, size), list.slice(size)]
}

/**
 * @title concat<T>
 * @description 连接多个数组
 * @params ...list any[][] 多个数组 
 * @returns any[]
 */
export function concat<T>(...list: T[]): T[] {
  let result: T[] = []
  if (list && list.length > 0) {
    const len: number = list.length
    let i = 0;
    while (i < len) {
      if (Array.isArray(list[i])) {
        result = result.concat(list[i])
      } else {
        result.push(list[i])
      }
      i++;
    }
  }
  return result
}

/**
 * @title drop<T>
 * @description 去除前n个元素
 * @param T[] list 数组
 * @param number n=0 要去除元素个数 
 * @returns T[] list 剩余切片
 */
export function drop<T>(list: T[] = [], n = 0): T[] {
  while (n--) {
    if (list.length < 1) return []
    list.shift()
  }
  return list
}

/**
 * @title dropRight<T>
 * @description 从右往左删除的指定个数
 * @param list T[] 要处理的数组
 * @param n=1 需要删除的元素数量
 * @returns T[]
 */
export function dropRight<T>(list: T[], n = 1): T[] {
  const len: number = list.length || 0
  return list.splice(0, len - n)
}

/**
 * @title fill<T>
 * @description 在原有数组上改变, 修改指定位置的值
 * @param array T[] 待填充改变的数组
 * @param value T 填充值
 * @param num 填充个数
 * @returns
 */
export function fill<T>(
  array: T[],
  value: T,
  num = 0,
): T[] {
  while (num--) array.push(value)
  return array
}

/**
 * @title difference<T>
 * @description 过滤数组
 * @param list T[] 待过滤的数组
 * @param ...filterConditions:T[] 过滤使用的条件
 * @returns T[] 过滤后的数组(new)
 */
export function difference<T>(list: T[], ...filterConditions: T[]): T[] {
  if (!list) return []
  const result: T[] = list || []

  // 整合过滤条件
  if (!filterConditions) return list

  return result.filter((item: T): boolean => {
    return !filterConditions.includes(item)
  })
}