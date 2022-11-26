import { type } from '../util'
import { isObject } from '../object'

export type FilterConditions<T = unknown> = Record<string, any> | ((value: T, index: number, array: T[]) => boolean)

/**
 * @title filter<T extends object>
 * @description 单层过滤
 * @param list {T[]} 待过滤数组
 * @param filterConditions {Record<string,number|string|RegExp>} 过滤条件
 * @param retainNotObject {boolean=false} 是否保留非对象项
 * @returns {T[]}
 */
export function filter<T extends Record<string, any>>(
  list: T[],
  filterConditions?: FilterConditions<T>,
  retainNotObject = false
): T[] {
  if (type(list) !== 'Array') return []
  if (!filterConditions || !list || list.length === 0) return list

  if (type(filterConditions) === 'Function') {
    return list.filter(filterConditions as ((value: T, index: number, array: T[]) => boolean))
  }

  const regObj: Record<string, RegExp> = {}
  // 生成相应的 RegExp
  for (const key in filterConditions)
    regObj[key] = new RegExp(filterConditions[key], 'i')

  // 开始过滤
  return list.filter((item: T): boolean => {

    if (!isObject(item)) return retainNotObject

    for (const key in regObj) {
      if (isObject(item[key])) return false
      if (!regObj[key].test(String(item[key]))) return false
    }
    return true
  })
}
