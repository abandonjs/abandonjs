import { toArray } from "../array"
import { at } from '../collection'
import { isFunction } from "asura-eye"
import { AnyFunction } from "../type"

/**
 * @title pipe<Params,Result>
 * @description 管道函数, 链接前函数的值为下一个函数的参
 * @param {Function[]} ...funcs 函数数组
 * @returns {(...args: Params)=>Result}
 */
export function pipe<Params extends unknown[] = any[], Result = any>(...funcs: AnyFunction[]) {
	return function (...args: Params): Result {
		let params: Params = args
		for (let i = 0; i < funcs.length; i++) {
			const item = funcs[i]
			if (isFunction(item)) {
				params = toArray(item(...params)) as Params
				continue
			}
		}
		return at(params) as Result
	}
}