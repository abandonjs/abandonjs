import { type } from '../util'
import { INFINITY, MAX_VALUES_NUMBER, MIN_VALUES_NUMBER } from '../constants'

/**
 * @title toNumber
 * @description 将值转换为Number, 不可以正确装换的值, 均返回0
 * @param value any 待转换的数值
 * @returns number
 */
export function toNumber(value: any): number {
	if (type(value) === 'Number') {
		if (value === INFINITY) return MAX_VALUES_NUMBER
		if (value === -INFINITY) return MIN_VALUES_NUMBER
		return value
	}
	const result = +value;
	if (type(result) === 'Number') {
		return result
	}
	return 0
}

/**
 * @title toFloat
 * @description 转换为指定位数的浮点数
 * @param num { number } 数字
 * @param fixed { number } 小数点位数
 * @returns { number }
 */
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export function toFloat(num: number, fixed: number = 1): number {
	return Number(num.toFixed(fixed))
}