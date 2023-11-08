import type { AnyFunction } from '../type'

/**
 * @title throttle
 * @description 节流: 用于限制函数触发频率, 每个delay时间间隔，最多只能执行函数一次
 * @param fn function 待处理函数
 * @param interval number 间隔
 * @returns func
 */
export function throttle(fn: AnyFunction, interval: number): any {
  let lastTime = 0
  return function throttled(...args:any): void {
    const timeSinceLastExecution: number = Date.now() - lastTime
    if (!lastTime || timeSinceLastExecution >= interval) {
      fn.apply(this, ...args)
      lastTime = Date.now()
    }
  }
}