import { isFunction } from "asura-eye"

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