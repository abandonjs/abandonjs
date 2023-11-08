import type { AnyFunction } from '../type'

/**
 * @title after
 * @description 调用n次后才触发func
 * @param n 调用后多少次才执行
 * @param func 限定的函数
 * @returns 新的限定函数
 */
export function after(n = 0, func: AnyFunction): AnyFunction {
  return function (...args: any[]): any {
    if (--n < 0) return func(...args)
    return
  }
}