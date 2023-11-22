import { isFunction } from 'asura-eye';
import { stringify } from '../string'
import { Func } from "../type"

/**
 * @title memoize<Params,Result>
 * @description 缓存方法结果, 若参数相同, 会返回相同结果
 * @param {Function} func
 * @returns {(...args: Params)=>Result}
 */
export function memoize<Params extends unknown[] = any[], Result = any>(func: Func<Params, Result>): Func<Params, Result> {
	const cache = new Map()
	return function (...args: Params): Result {
		if (!isFunction(func)) {
			return undefined as Result
		}
		const key = stringify(args)
		if (cache.has(key)) {
			return cache.get(key)
		}
		const result = func.apply(this, args)
		cache.set(key, result)
		return result
	};
}