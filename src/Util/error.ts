

/**
 * @title throwError<<Params extends any[], R = any>
 * @param func: (...args: Params) => R 待捕获错误的函数
 * @param isErrorResult : R
 * @returns (...args:Params)=>R
 */
export function throwError<Params extends any[], R = any>(
	func: (...args: Params) => R,
	isErrorResult: R,
): (...args: Params) => R {
	return function (...args: Params) {
		try {
			return func(...args)
		} catch (error) {
			return isErrorResult
		}
	}
}


/**
 * @title asyncRhrowError<<Params extends any[], R = any>
 * @description 异步处理
 * @param func: (...args: Params) => R 待捕获错误的函数
 * @param isErrorResult : R
 * @returns (...args:Params)=>R
 */
export function asyncThrowError<Params extends any[], R = any>(
	func: (...args: Params) => R,
	isErrorResult: R,
): (...args: Params) => Promise<R> {
	return async function (...args: Params) {
		try {
			return await func(...args)
		} catch (error) {
			return isErrorResult
		}
	}
}