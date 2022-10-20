import { isObject } from '../object'

/**
 * @title filter<T extends object>
 * @description 单层过滤
 * @param list T[] 待过滤数组
 * @param filterConditions { [key:string]: number| string | RegExp } 过滤条件
 * @param retainNotObject 是否保留非对象项
 * @returns T[]
 */
export function filter<T extends { [key: string]: any }>(
  list: T[],
  filterConditions: { [key: string]: any },
  retainNotObject = false
): T[] {

  if (!filterConditions || list.length === 0) return list

  const regObj: { [key: string]: RegExp } = {}
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
