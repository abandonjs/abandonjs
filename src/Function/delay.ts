import { isFunction } from 'asura-eye'
import type { Func } from '../type'

/**
 * @title delay<Params,Result>
 * @param func 指定函数
 * @param {number} [delayTime=0] 延迟时间
 * @param {Params} ...args 传输参数
 * @returns {Promise<Result>} func执行结果(Promise)
 */
export function delay<Params extends unknown[] = any[], Result = any>(
  func: Func<Params, Result>,
  delayTime: number = 0,
  ...args: Params
): Promise<Result> {
  return new Promise<Result>((resolve: any): void => {
    setTimeout(() => {
      if (isFunction(func)) {
        resolve(func(...args))
      }else{
        resolve(undefined)
      }
    }, delayTime)
  })
}