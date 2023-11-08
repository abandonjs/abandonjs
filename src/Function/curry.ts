import type { AnyFunction } from '../type'

/**
 * @title curry
 * @description 柯里化
 * @param func 待柯里化函数
 * @param len 待柯里化参数个数
 * @returns 柯里化函数
 */
export function curry(func: AnyFunction, len: number): AnyFunction {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  let _args: any[] = []
  const _resFn: any = function (...args: any[]): any {
    _args = _args.concat(args)
    if (_args.length < len) {
      return _resFn
    }
    return func(..._args)
  }
  return _resFn
}