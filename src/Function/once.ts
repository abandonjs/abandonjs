import { AnyFunction } from '../type'

/**
 * @title once
 * @description  fn 方法只会执行一次
 * @param fn 指定值运行一次的方法
 * @returns 返回封装后的方法
 */
export function once(fn: AnyFunction): any {
  let returnValue: any
  let canRun = true

  return function (): any {
    if (canRun) {
      returnValue = fn.apply(this, arguments)
      canRun = false
    }
    return returnValue
  }
}