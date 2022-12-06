import { type } from '../util'
import { isObject } from '../object'

export type FilterCondition<T = unknown> = ((value: T, index: number, array: T[]) => boolean)
  | Record<string, number | string | RegExp | any>

/**
 * @title filter<T extends object>
 * @description 单层过滤
 * @param list {T[]} 待过滤数组
 * @param filterCondition {FilterCondition<T>} 过滤条件
 * @param retainNotObject {boolean=false} 是否保留非对象项
 * @returns {T[]}
 * @version 2.3.1
 */
export function filter<T extends Record<string, any>>(
  list: T[],
  filterCondition?: FilterCondition<T>,
  retainNotObject = false
): T[] {
  if (type(list) !== 'Array') return []
  if (!filterCondition || !list || list.length === 0) return list

  if (type(filterCondition) === 'Function') {
    return list.filter(filterCondition as ((value: T, index: number, array: T[]) => boolean))
  }

  // 开始过滤
  return list.filter((item: T): boolean => {

    if (!isObject(item)) return retainNotObject

    let flag = true

    if (type(filterCondition) === 'Object') {
      for (const key in filterCondition) {
        const unit = filterCondition[key]
        const val = item[key]

        if (val !== unit && type(unit) !== 'RegExp') {
          flag = false
          break
        }

        if (type(unit) === 'RegExp' && !unit.test(val)) {
          flag = false
          break
        }

      }

    }

    return flag
  })
}
