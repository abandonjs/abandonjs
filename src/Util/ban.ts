import { Func, AsyncFunc } from './../type';

interface BanConfig {
	/**
	 * @description 超时时间
	 * @default 3000
	 */
	timeout?: number
	/**
	 * @description 最大执行次数
	 * @default: 1000000
	 */
	count?: number
}
/**
 * @title ban<Params extends [], Return>
 * @description 限制 方法的超时和执行次数
 * @param func Func<Params, Return>
 * @param config BanConfig
 * @returns function (...args: Params): Return
 */
export function ban<Params extends [], Return>(
	func: Func<Params, Return>,
	config: BanConfig
): Func<Params, Return> {
	let { timeout = 3000, count = 1000000 } = config
	if (timeout < 1) timeout = 3000
	if (count < 1) count = 1000000
	let runCount = 1
	return function (...args: Params): Return {
		if (runCount > count) throw new Error('Possible infinite loop')
		const startTime = Date.now()
		const result = func(...args)
		if (Date.now() - startTime > timeout) {
			throw new Error('Time out')
		}
		runCount++;

		return result
	}
}

/**
 * @title asyncBan<Params extends [], Return>
 * @param func AsyncFunc<Params, Return>
 * @param config BanConfig
 * @returns function (...args: Params): Return
 */
export function asyncBan<Params extends [], Return>(
	func: AsyncFunc<Params, Return>,
	config: BanConfig
) {
	let { timeout = 3000, count = 1000000 } = config
	if (timeout < 1) timeout = 3000
	if (count < 1) count = 1000000
	let runCount = 1

	return async function (...args: Params) {
		if (runCount > count) throw new Error('Possible infinite loop')
		const startTime = Date.now()
		const result = await func(...args)
		if (Date.now() - startTime > timeout) {
			throw new Error('Time out')
		}
		runCount++;

		return result
	}
}

/**
 * @title catchError<Params extends [], Return>
 * @param func Func<Params, Return>
 * @param errorReturnValue Return
 * @returns function (...args: Params): Return
 */
export function catchError<Params extends [], Return>(
	func: Func<Params, Return>,
	errorReturnValue: Return
) {
	return function (...args: Params): Return {
		try {
			return func(...args)
		} catch (error) {
			return errorReturnValue
		}
	}
}


/**
 * @title asyncCatchError<Params extends [], Return>
 * @param func AsyncFunc<Params, Return>
 * @param errorReturnValue Return
 * @returns async function (...args: Params): Return
 */
export function asyncCatchError<Params extends [], Return>(
	func: AsyncFunc<Params, Return>,
	errorReturnValue: Return
) {
	return async function (...args: any) {
		try {
			return await func(...args)
		} catch (error) {
			return errorReturnValue
		}
	}
}