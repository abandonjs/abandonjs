import { type, types } from './type'
export { type, types }
export * from './matchValue'

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

// 时间总线, 观察订阅模式
// export const eventBus: EventEmitter = new EventEmitter()
export class EventEmitter {
  cache: { [key: string]: any } = {}
  constructor() {
    this.cache = {}
  }

  on(name: any, fn: any): void {
    if (this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }

  off(name: any, fn: any): void {
    const tasks = this.cache[name]
    if (tasks) {
      const index = tasks.findIndex(f => f === fn || f.callback === fn)
      if (index >= 0) {
        tasks.splice(index, 1)
      }
    }
  }

  once(name: any, ...args: any[]): any[] {
    if (this.cache && this.cache[name]) {
      const tasks: any = this.cache[name].slice()
      delete this.cache[name]
      return tasks.map(i => runFunc(i, ...args))
    }
    return []
  }
  
  // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
  emit(name: any, ...args: any[]): any[] {
    if (this.cache && this.cache[name]) {
      const tasks: any = this.cache[name].slice()
      return tasks.map(i => runFunc(i, ...args))
    }
    return []
  }
}
