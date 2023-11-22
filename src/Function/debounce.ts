import type { Func } from '../type'

/**
 * @title debounce<Params>
 * @description
 * -- 防抖:  时间内只会执行一次 可以减少函数触发的频率
 * -- 当函数触发时，使用一个定时器延迟执行操作。
 * -- 当函数被再次触发时，清除已设置的定时器，重新设置定时器。
 * -- 如果上一次的延迟操作还未执行，则会被清除。
 * @param {Function} fn
 * @param {number} interval
 * @returns {Func<Params>}
 */
export function debounce<Params extends unknown[] = any[]>(fn: Func<Params>, interval: number): Func<Params> {
  let timer: any = 0
  const debounced = (...args: Params) => {
    clearTimeout(timer)
    timer = setTimeout((): void => {
      fn.apply(this, args)
    }, interval)
  }
  return debounced
}