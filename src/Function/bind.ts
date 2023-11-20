import type { Func } from '../type'

/**
 * @title bind<Params,Result>
 * @description thisArg绑定func的this，并且func会接收partials附加参数
 * @param {Function} func 绑定的函数
 * @param {Params} partials 附加的部分参数
 * @returns 新的绑定函数
 */
export function bind<Params extends unknown[] = any[], Result = any>(
  func: Func<Params, Result>,
  ...partials: Params
): Func<Params, Result> {
  return function (...args: Params): Result {
    if (func)
      return func.call(this, ...[...partials, ...args])
    return undefined as Result
  }
}