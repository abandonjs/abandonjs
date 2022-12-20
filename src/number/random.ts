import { isFloat } from 'check-it-type'
import { toFloat } from './to'
import { getDecimal } from './util'

/**
 * @title random
 * @description 随机数
 * @param lower { number } 下限
 * @param upper { number } 上限
 * @param floating { number = 0 } 是否返回浮点数(位数), 0: 整数
 */
export function random(
	lower = 0,
	upper = 1,
	floating = 0
): number {

	if (lower === 0 && upper === 1) {
		return Math.random()
	}

	if (isFloat(upper) || isFloat(lower)) {
		const len = getDecimal(upper) > getDecimal(lower) ? getDecimal(upper) : getDecimal(lower)
		if (floating === 0) {
			floating = len
		}
	}

	const result: number = lower + Math.random() * (upper - lower)

	if (floating) return toFloat(result, floating)
	return Math.ceil(result)
}

// 该方法用于获取两个整数之间的随机整数
// const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// random(1, 50);