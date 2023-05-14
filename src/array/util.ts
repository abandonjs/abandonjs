import { isFunction } from "asura-eye"

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
 * @param list {T[]}
 * @param size {number} 切割点索引
 * @returns {T[][]} [ [切割点前数据], [切割点后数据] ]
 */
export function chunk<T>(list: T[], size: number): T[][] {
  return [list.slice(0, size), list.slice(size)]
}

/**
 * @title fill<T>
 * @description 在原有数组上改变, 修改指定位置的值
 * @param array {T[]} 待填充改变的数组
 * @param value {T|(index:number)=>T} 填充值
 * @param num {number} 填充个数
 * @returns
 */
export function fill<T>(
  array: T[],
  value: T | ((index: number) => T),
  num = 0,
): T[] {
  while (num--) {
    array.push(
      isFunction(value)
        ? value(array.length)
        : value
    )
  }
  return array
}