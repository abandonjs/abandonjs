import type { AnyFunction, ObjectType } from '../type'

/**
 * @title bind
 * @description thisArg绑定func的this，并且func会接收partials附加参数
 * @param func 绑定的函数
 * @param thisArg 绑定的对象
 * @param partials 附加的部分参数
 * @returns 新的绑定函数
 */
export function bind<T>(
  func: AnyFunction,
  thisArg: ObjectType = {},
  ...partials: any[]
): AnyFunction {
  return function (...args: any[]): T | undefined {
    if (func)
      return func.call(thisArg, ...[...partials, ...args])
    return
  }
}