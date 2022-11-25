import { type } from '../util'

/**
 * @title isNumber
 * @description 是否为数字
 * @support: Number, NumberString
 * @unsupported: Infinity, Function
 * @param value any
 * @returns boolean
 * @update: 2.2.0
 */
export function isNumber(value: any): boolean {

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