import { isArray, isFunction, isObject, isRegExp, type } from 'check-it-type'

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

  if (!isArray(list)) return []
  if (!filterCondition || !list || list.length === 0) return list

  if (isFunction(filterCondition)) {
    return list.filter(filterCondition as ((value: T, index: number, array: T[]) => boolean))
  }

  return list.filter((item: T): boolean => {

    if (!isObject(item)) return retainNotObject

    let flag = true

    if (isObject(filterCondition)) {
      for (const key in filterCondition) {
        const unit = filterCondition[key]
        const val = item[key]

        if (val !== unit && type(unit) !== 'RegExp') {
          flag = false
          break
        }

        if (isRegExp(unit) && !unit.test(val)) {
          flag = false
          break
        }

      }

    }

    return flag
  })
}
