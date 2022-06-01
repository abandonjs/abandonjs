import { isObject } from '../object'

/**
 * @title filter
 * @description 单层过滤
 * @param list any[] 待过滤数组
 * @param filterConditions { [key:string]: any | RegExp } 过滤条件
 * @param retainNotObject 是否保留非对象项
 * @returns any[]
 */
export function filter(
  list: any[],
  filterConditions: { [key: string]: any },
  retainNotObject = false
): any[] {
  if (!filterConditions || list.length === 0) return list
  const regObj: { [key: string]: RegExp } = {}
  // 生成相应的 RegExp
  for (const key in filterConditions) regObj[key] = new RegExp(filterConditions[key], 'i')
  // 开始过滤
  return list.filter((item: any): boolean => {
    if (!isObject(item)) return retainNotObject
    for (const key in regObj) {
      if (isObject(item[key])) return false
      if (!regObj[key].test(String(item[key]))) return false
    }
    return true
  })
}
