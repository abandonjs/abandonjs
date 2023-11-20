import { isFunction } from 'asura-eye'
import type { Func } from '../type'

type CurryResult<Params extends unknown[] = any[], Result = any> = Result | Func<Params, Result>

/**
 * @title curry<Params,Result>
 * @description 柯里化
 * @param {Function} func 待柯里化函数
 * @param {number} [len=1] 待柯里化参数个数
 * @returns 柯里化函数
 */
export function curry<Params extends unknown[] = any[], Result = any>(func: Func<Params, Result>, len: number = 1): CurryResult<Params, CurryResult<Params, Result>> {

  if(!isFunction(func)){
    return undefined as CurryResult<Params, CurryResult<Params, Result>>
  }
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  let _args: Params = [] as unknown as Params

  const _resFn: CurryResult<Params, CurryResult<Params, Result>> = function (...args: Params): CurryResult<Params, Result> {
    _args = _args.concat(args) as Params
    if (_args.length < len) {
      return _resFn as CurryResult<Params, Result>
    }
    return func(..._args)
  }

  return _resFn
}