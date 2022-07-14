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

// 深拷贝
export function deepClone(obj: any, cache = new WeakMap()) {
  if (typeof obj !== 'object') return obj // 普通类型，直接返回
  if (obj === null) return obj
  if (cache.get(obj)) return cache.get(obj) // 防止循环引用，程序进入死循环
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)

  // 找到所属原型上的constructor，所属原型上的constructor指向当前对象的构造函数
  const cloneObj: any = new obj.constructor()
  cache.set(obj, cloneObj) // 缓存拷贝的对象，用于处理循环引用的情况
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], cache) // 递归拷贝
    }
  }
  return cloneObj
}

// 时间总线, 观察订阅模式
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
      const index = tasks.findIndex((f) => f === fn || f.callback === fn)
      if (index >= 0) {
        tasks.splice(index, 1)
      }
    }
  }

  emit(name: any, once = false): void {
    if (this.cache && this.cache[name]) {
      // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
      const tasks: any = this.cache[name].slice()
      for (const fn of tasks) {
        fn()
      }
      if (once) {
        delete this.cache[name]
      }
    }
  }
}

// export const eventBus: EventEmitter = new EventEmitter()