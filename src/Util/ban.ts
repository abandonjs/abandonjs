import { AnyFunction } from './../type/index';

interface BanConfig {
	/**
	 * @description 超时时间
	 */
	timeout?: number
	/**
	 * @@description 最大执行次数
	 */
	count?: number
}
/**
 * @deprecated 待开发中
 */
export function ban(func: AnyFunction, config: BanConfig) {
	let { timeout = 3000, count = 1000000 } = config
	if (timeout < 1) timeout = 3000
	if (count < 1) count = 1000000
	let runCount = 1

	return function (...args: any[]) {
		if (runCount > count) throw new Error('Time out')
		const startTime = Date.now()
		const result = func(...args)
		console.log(Date.now() - startTime)
		if (Date.now() - startTime > timeout) {
			throw new Error('Possible infinite loop')
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