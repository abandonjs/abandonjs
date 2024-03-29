import { isArray, isFunction, isObject, isRegExp, isString, isEffectObject } from 'asura-eye'
import { ObjectType } from '../type'
import { stringify } from '../string'

export type FilterCondition<T = unknown> =
  ((value: T, index?: number, array?: T[]) => boolean)
  | Record<string, number | string | RegExp | any>

/**
 * @title filter<T>
 * @description 单层过滤
 * @param {T[]} list 待过滤数组
 * @param {FilterCondition<T>} filterCondition 过滤条件
 * @param {boolean} [retainNotObject=false] 是否保留非对象项
 * @returns {T[]}
 * @version 2.3.1
 */
export function filter<T extends ObjectType>(
  list: T[],
  filterCondition?: FilterCondition<T>,
  retainNotObject: boolean = false
): T[] {

  if (!isArray(list)) return []
  if (!filterCondition || !list || list.length === 0) return list

  if (isFunction(filterCondition)) {
    return list.filter(filterCondition as ((value: T, index?: number, array?: T[]) => boolean))
  }
  if (isEffectObject(filterCondition))
    return list.filter((item: T): boolean => {

      if (!isObject(item)) return retainNotObject

      for (const key in filterCondition) {
        const unit = filterCondition[key]
        const originValue = item[key]
        if (originValue === unit) break
        if (isRegExp(unit)) {
          const val: string = isString(originValue) ? originValue : stringify(originValue)
          if (!unit.test(val))
            return false
          break
        }

        return false
      }

      return true
    })

  return list
}