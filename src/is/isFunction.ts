import { type } from '../util/type'

export type FunctionType = (...args: unknown[]) => unknown
export type AsyncFunctionType = (...args: unknown[]) => Promise<unknown>

/**
 * @title isFunction
 * @description 是否为普通函数
 * @param value {any}
 * @returns {boolean}
 */
export function isFunction<T extends FunctionType>(value: unknown): value is T {
  return type(value) === 'Function'
}

/**
 * @title isAsyncFunction
 * @description 是否为异步函数
 * @param value {any}
 * @returns {boolean}
 */
export function isAsyncFunction<T extends AsyncFunctionType>(value: unknown): value is T {
  return type(value) === 'AsyncFunction'
}

/**
 * @title likeFunction
 * @description 是否为函数
 * @param value {any}
 * @returns {boolean}
 */
export function likeFunction<T extends FunctionType | AsyncFunctionType>(value: unknown): value is T {
  return type(value) === 'Function' || type(value) === 'AsyncFunction'
}