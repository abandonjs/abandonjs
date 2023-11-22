import type { AnyFunction, Func } from '../type'

/**
 * @title throttle<Params>
 * @description 节流: 用于限制函数触发频率, 每个delay时间间隔，最多只能执行函数一次
 * @param {Function} fn 待处理函数
 * @param {number} interval number 间隔
 * @returns {(...args: Params)=>void}
 */
export function throttle<Params extends unknown[] = any[]>(fn: AnyFunction, interval: number): Func<Params> {
  let lastTime = 0

  return function (...args: Params): void {
    const timeSinceLastExecution: number = Date.now() - lastTime
    if (!lastTime || timeSinceLastExecution >= interval) {
      fn.apply(this, ...args)
      lastTime = Date.now()
    }
  }
}