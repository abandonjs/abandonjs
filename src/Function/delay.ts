import type { AnyFunction } from '../type'

/**
 * @title delay
 * @param func 指定函数
 * @param delayTime 延迟时间
 * @param args 传输参数
 * @returns func执行结果(Promise)
 */
export function delay(
  func: AnyFunction,
  delayTime = 0,
  ...args: any[]
): any {
  return new Promise((resolve: any): void => {
    setTimeout(() => {
      resolve(func(...args))
    }, delayTime)
  })
}