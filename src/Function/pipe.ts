import { toArray } from "../array"
import { at } from '../collection'
import { isFunction } from "check-it-type"
import { AnyFunction } from "../type"

/**
 * @title pipe
 * @description 管道函数, 链接前函数的值为下一个函数的参
 * @param ...handlers {Function[]} 函数数组
 * @returns {Function} 
 */
export function pipe(...handlers: AnyFunction[]) {
	return function (...args: unknown[]) {
		let params: unknown[] = args
		for (let i = 0; i < handlers.length; i++) {
			const item = handlers[i]
			if (isFunction(item)) {
				params = toArray(item(...params))
				continue
			}
			return at(params)
		}
		return at(params)
	}
}