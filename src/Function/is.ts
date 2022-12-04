import { type } from '../util'

/**
 * @title isFunction
 * @description 是否为函数
 * @param value {any}
 * @returns {boolean}
 */
export function isFunction<T extends (...args: unknown[]) => unknown>(value: unknown): value is T {
  return type(value) === 'Function'
}

// likeFunction