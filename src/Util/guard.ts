import { isAsyncFunction, isFunction } from "asura-eye"

/**
 * @title guard
 * @param func {function}
 * @param errorReturnValue {unknown}
 * @returns function (...args: unknown[]): unknown
 */
export function guard(
	func: unknown,
	errorReturnValue: unknown
) {
	return (...args: unknown[]) => {
		try {
			if (isFunction(func) || isAsyncFunction(func))
				return func(...args)
			return func
		} catch (error) {
			return errorReturnValue
		}
	}
}

/**
 * @title asyncGuard
 * @param func {function}
 * @param errorReturnValue {unknown}
 * @returns function (...args: unknown[]): unknown
 */
export function asyncGuard(
	func: unknown,
	errorReturnValue: unknown
) {
	return async (...args: unknown[]) => {
		try {
			if (isAsyncFunction(func)) return await func(...args)
			if (isFunction(func)) return func(...args)
			return func
		} catch (error) {
			return errorReturnValue
		}
	}
}