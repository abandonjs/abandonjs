import { isNumber, isRegExp, type } from 'asura-eye'
import { Val, Valer } from '../type'
import { toPathValue } from "./toPathValue"
import { equal } from './equal'

export function matchNumberValue(val: number, valer: Valer): boolean {

	const valType: string = type(val)
	const valerType: string = type(valer)

	if (valerType === 'RegExp') {
		return (valer as RegExp).test(String(val))
	}

	if (valType !== 'Number') {
		return false
	}

	if (valerType === 'String') {

		const [matNum, Sym = '=']: string[] = /(?<=([<>=!]+))[0-9]+/gi.exec(valer as string) || []

		switch (Sym) {
			case '=': return val === Number(matNum)
			case '>': return val > Number(matNum)
			case '>=': return val >= Number(matNum)
			case '<': return val < Number(matNum)
			case '<=': return val <= Number(matNum)
			case '<>':
			case '!=': return val != Number(matNum)
		}
	}

	return false
}


/**
 * @title matchValue
 * @param val 被比较值
 * @param valer 比较值 / 可为正则
 * @param path 值的路径 用逗号隔开
 * @returns boolean
 */
export function matchValue(val: Val, valer: Valer, path?: string): boolean {

	if (path) {
		val = toPathValue(val, path)
	}

	if (equal(val, valer)) return true

	if (isRegExp(valer)) return (valer as RegExp).test(String(val))

	if (isNumber(val)) return matchNumberValue(val as number, valer)

	return true
}
