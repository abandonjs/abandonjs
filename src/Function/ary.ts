import type { AnyFunction } from '../type'

/**
 * @title ary
 * @description 调用func最多接受n个参数
 * @param func 限定函数
 * @param n 限制参数数量
 * @returns 新的覆盖函数
 */
export function ary(func: AnyFunction, n: number): AnyFunction {
  return function (...args: any[]): any {
    return func(...args.splice(0, n))
  }
}