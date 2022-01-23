import { isObject } from '../object'

/**
 * @title arrayFilterByObject
 * @description 单层过滤
 * @param list any[] 待过滤数组
 * @param filter { [key:string]: any | RegExp } 过滤条件
 * @param retainNotObject 是否保留非对象项
 * @returns any[]
 */
export function arrayFilterByObject(
  list: any[],
  filter: { [key: string]: any },
  retainNotObject = false
): any[] {
  if (!filter || list.length === 0) return list
  let regObj: { [key: string]: RegExp } = {}
  // 生成相应的 RegExp
  for (let key in filter) regObj[key] = new RegExp(filter[key], 'i')
  // 开始过滤
  return list.filter((item: any): boolean => {
    if (!isObject(item)) return retainNotObject
    for (let key in regObj) {
      if (isObject(item[key])) return false
      if (!regObj[key].test(String(item[key]))) return false
    }
    return true
  })
}

/**
 * @title compact
 * @description 过滤掉假值 false, null, 0, "", undefined, NaN
 * @param list any[] 待过滤数组
 * @returns any[]
 */
export function compact(list: any[]): any[] {
  return list.filter((item: any): boolean => !!item)
}
