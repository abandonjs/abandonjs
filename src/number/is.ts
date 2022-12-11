import { type } from '../util'
import { INFINITY } from '../constants'

/**
 * @title isEffectNumber
 * @description 是否为js的有效区间的数, 非number类型都为false
 * @param num any
 * @returns boolean
 */
export function isEffectNumber(num: any): boolean {
	if (type(num) === 'Number') {
		if (num === INFINITY || num === -INFINITY) return false
		return true
	}
	return false
}

/**
 * @title isFloat
 * @description 判断数是否为浮点型
 * @param num 待检测的数据类型
 * @returns boolean
 */
export function isFloat(num: number): boolean {
	return (num % 1) !== 0
}

/**
 * @title isNumber
 * @description 是否为数字
 * @param num 待检测的数据类型
 * @returns {boolean}
 */
export const isNumber = (val: unknown): val is number => type(val) === 'Number'

/**
 * @title likeNumber
 * @description 是否为数字
 * @support: Number, NumberString
 * @unsupported: Infinity, Function
 * @param value any
 * @returns boolean
 * @version: 2.2.3
 */
export function likeNumber(value: any): boolean {

	if (type(value) === 'String') {
		value = value.replaceAll(' ', '')
	}

	if ([Infinity, null, undefined, '', NaN].includes(value)) return false

	if (Array.isArray(value)) return false

	const result = type(value) === "Number" && typeof value === 'number'

	if (result) return result

	if (Number.isNaN(Number(value)) === false) {
		return true
	}

	return false
}

// bigNum