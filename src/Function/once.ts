import { Func } from '../type'
 
/**
 * @title once<Params,Result>
 * @description  fn 方法只会执行一次, 多次执行返回值为第一次的返回值
 * @param {Function} func 指定值运行一次的方法
 * @returns {Function} 返回封装后的方法
 */
export function once<Params extends unknown[] = any, Result = any>(func: Func<Params, Result>): Func<Params, Result> {
  let returnValue: Result = undefined as Result
  let canRun = true
  return function (...args: Params): Result {
    if (canRun) {
      returnValue = func.apply(this, args)
      canRun = false
    }
    return returnValue as Result
  }
}