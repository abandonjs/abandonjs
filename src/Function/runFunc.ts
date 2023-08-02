import { type } from 'asura-eye'

/**
 * @title runFunc
 * @description 运行函数, 支持普通函数和async函数, 否则返回func
 * @param func
 * @param ...args
 * @returns
 */
export function runFunc(func: any, ...args: any[]) {
	if (type(func) === 'Function') {
		return func(...args)
	}
	if (type(func) === 'AsyncFunction') {
		return (async () => await func(...args))()
	}
	return func
}