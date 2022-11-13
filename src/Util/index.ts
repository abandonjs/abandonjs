import { type, types } from './type'

export { type, types }
export * from './log'
export * from './matchValue'
export * from './deepClone'
export * from './error'
export * from './ban'

/**
 * 首字母大写
 */
type CaseTypeFirstUpper = 'FirstUpper'
/**
 * 首字母小写
 */
type CaseTypeFirstLower = 'FirstLower'
/**
 * 全部大写
 */
type CaseTypeUpper = 'Upper'
/**
 * 全部小写
 */
type CaseTypeLower = 'Lower'
export type CaseType =
  | CaseTypeFirstUpper
  | CaseTypeFirstLower
  | CaseTypeLower
  | CaseTypeUpper
/**
 * @title changeCase
 * @description  字符转换
 * --- type: FirstUpper:首字母大写 FirstLower：首字母小写  Upper：全部大写 Lower：全部小写
 * @param str string
 * @param type number
 * @returns string
 */
export function changeCase(str: string, type: CaseType = 'Upper'): string {
  switch (type) {
    case 'FirstUpper':
      return str.replace(
        /\b.*/g,
        (word) => word.substring(0, 1).toUpperCase() + word.substring(1)
      )
    case 'FirstLower':
      return str.replace(
        /\b.*/g,
        (word) => word.substring(0, 1).toLowerCase() + word.substring(1)
      )
    case 'Upper':
      return str.toUpperCase()
    case 'Lower':
      return str.toLowerCase()
    default:
      return str
  }
}

/**
 * @title isEmpty
 * @description 判断是否为无效值 undefined , null, NaN
 * @param value any 待判断值
 * @returns boolean
 */
export function isEmpty(value: any): boolean {
  if (value === undefined || value === null || isNaN(value)) return true
  return false
}

/**
 * @title runFunc
 * @description 运行函数, 支持普通函数和async函数, 否则返回func
 * @param func
 * @param ...args
 * @returns
 */
export function runFunc(func: any, ...args: any[]) {
  if (type(func) === 'Function') {
    return func(...args)
  }
  if (type(func) === 'AsyncFunction') {
    return (async () => await func(...args))()
  }
  return func
}
