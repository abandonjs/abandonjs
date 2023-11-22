import { type } from 'asura-eye'
import type { Func } from '../type'

/**
 * @title runFunc
 * @description 运行函数, 支持普通函数和async函数, 否则返回func
 * @param func
 * @param ...args
 * @returns
 */
export function runFunc<Params extends unknown[] = any[], Result = any>(func: Func<Params, Result>, ...args: Params): Result | undefined {
	if (type(func) === 'Function' || type(func) === 'AsyncFunction') {
		return func(...args)
	}
}