import type { AnyFunction } from '../type'

/**
 * @title before
 * @description 调用n次后，再调用就会返回最后一次调用的结果
 * @param n 超过n次不再调用
 * @param func 限定函数
 * @returns 新的限定函数
 */
export function before(n: number, func: AnyFunction): AnyFunction {
  let lastResult: any = undefined
  return function (...args: any[]): any {
    if (n-- > 0) {
      lastResult = func(...args)
    }
    return lastResult
  }
}