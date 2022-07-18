import { type, types } from './type'
export { type, types }
export * from './matchValue'
export * from './deepClone'
/**
 * @title changeCase
 * @description  字符转换
 * --- type: FirstUpper:首字母大写 FirstLower：首字母小写  Upper：全部大写 Lower：全部小写
 * @param str string
 * @param type number
 * @returns string
 */

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
export type CaseType = CaseTypeFirstUpper | CaseTypeFirstLower | CaseTypeLower | CaseTypeUpper
export function changeCase(str: string, type: CaseType = 'Upper'): string {
  switch (type) {
    case 'FirstUpper':
      return str.replace(/\b.*/g, word =>
        word.substring(0, 1).toUpperCase() + word.substring(1)
      )
    case 'FirstLower':
      return str.replace(/\b.*/g, word =>
        word.substring(0, 1).toLowerCase() + word.substring(1)
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
 * @title logGroup
 * @description 分组打印(简化console.groupCollapsed)
 * @param name 分组名称
 * @param ...args 需要分组打印的结果
 * @example logGroup(name[, ...args])
 */
export function logGroup(name = '', ...args: any[]) {
  console.groupCollapsed(`--- ${name} ---`)
  Array.isArray(args) &&
    args.length > 0 &&
    args.forEach((item: any) => {
      console.log(item)
    })
  console.groupEnd()
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

// 时间总线, 观察模式
export interface EventEmitter<T, U> {
  cache: { [key: string]: T[] }
  on(name: string, fn: T): void
  off(name: string): boolean
  once<Params extends any[] = any[]>(name: string, ...args: Params): U[]
  emit<Params extends any[] = any[]>(name: string, ...args: Params): U[]
}

export class EventEmitter<T, U> {
  cache: { [key: string]: T[] } = {}

  on(name: string, fn: T): void {
    if (this.cache[name]) {
      if (Array.isArray(this.cache[name])) {
        this.cache[name].push(fn)
      } else {
        this.cache[name] = [fn]
      }
      return
    }

    this.cache[name] = [fn]
  }

  off(name: string): boolean {
    if (!this.cache[name]) return false
    delete this.cache[name]
    return true
  }

  once<Params extends any[] = any[]>(
    name: string,
    ...args: Params
  ): U[] {
    if (this.cache && this.cache[name]) {
      const result = this.cache[name].map(i => runFunc(i, ...args))
      delete this.cache[name]
      return result
    }
    return []
  }

  // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
  emit<Params extends any[] = any[]>(
    name: string,
    ...args: Params
  ): U[] {
    if (!this.cache[name]) return []
    return this.cache[name].map(i => runFunc(i, ...args))
  }
}
