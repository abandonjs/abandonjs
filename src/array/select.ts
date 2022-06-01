import { randomNumByRange } from '../number'
import { concat } from './index'

/**
 * @title select
 * @description 指定范围长度 来随机选择数组元素
 * @param list: any[]
 * @param min: number 
 * @param max: number
 * @returns any[]
 */
export function selects(list: any[], min: number, max: number): any[] {
  let len: number =
    randomNumByRange(min, max > list.length ? list.length : max) || 0
  const result: any[] = []
  let index = 0
  while (len--) {
    index = ~~(Math.random() * list.length)
    result.push(list[index])
    list.splice(index, 1)
  }
  return result
}

/**
 * @title selects
 * @description 选择数组其中一项
 * @param list any[] 待选择数组
 * @param index ?number 指定选择索引
 * @returns 选择项
 */
export function select(list: any[] = [], index?: number): any {
  if (index !== null && index !== undefined) {
    if (index > -1) return list[index]
    if (index < 0) {
      return list[list.length + index]
    }
  }
  return list[~~(Math.random() * list.length)]
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