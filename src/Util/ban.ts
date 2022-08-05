import { AnyFunction, AnyAsyncFunction, Func } from './../type/index';

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
 * @returns 
 */
export function ban<Params extends [], Retrun>(func: Func<Params, Retrun>, config: BanConfig): Func<Params, Retrun> {
	let { timeout = 3000, count = 1000000 } = config
	if (timeout < 1) timeout = 3000
	if (count < 1) count = 1000000
	let runCount = 1
	return function (...args: Params): Retrun {
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

export function asyncBan(func: AnyAsyncFunction, config: BanConfig) {
	let { timeout = 3000, count = 1000000 } = config
	if (timeout < 1) timeout = 3000
	if (count < 1) count = 1000000
	let runCount = 1

	return async function (...args: any[]) {
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


export function CatchError<T>(func: AnyFunction, errorReturnValue: T) {
	return function (...args: any) {
		try {
			return func(...args)
		} catch (error) {
			return errorReturnValue
		}
	}
}

export function asyncCatchError<T>(func: AnyAsyncFunction, errorReturnValue: T) {
	return async function (...args: any) {
		try {
			return await func(...args)
		} catch (error) {
			return errorReturnValue
		}
	}
}