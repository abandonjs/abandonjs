import type { Func, AsyncFunc } from '../type'

/**
 * @title BanConfig
 * @type <interface>
 */
interface BanConfig {
	/**
	 * @name: timeout
	 * @description 超时时间
	 * @default 3000
	 */
	timeout?: number
	/**
	 * @name: count
	 * @description 最大执行次数
	 * @default: 1000000
	 */
	count?: number
}

/**
 * @title limitTime<Params extends [], Return>
 * @description 限制 方法的超时和执行次数
 * @param {Func<Params,Return>} func 
 * @param {BanConfig} config 
 * @returns {(...args:Params):Return}
 */
export function limitTime<Params extends [], Return>(
	func: Func<Params, Return>,
	config: BanConfig
): Func<Params, Return> {
	let { timeout = 3000, count = 1000000 } = config
	if (timeout < 0) timeout = 3000
	if (count < 0) count = 1000000
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
 * @title asyncLimitTime<Params, Return>
 * @param {AsyncFunc<Params,Return>} func 
 * @param {BanConfig} config 
 * @returns {(...args:Params):Return}
 */
export function asyncLimitTime<Params extends [], Return>(
	func: AsyncFunc<Params, Return>,
	config: BanConfig
) {
	let { timeout = 3000, count = 1000000 } = config
	if (timeout < 0) timeout = 3000
	if (count < 0) count = 1000000
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