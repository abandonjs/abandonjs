import { type } from "../type"
import { Valer } from './type'

export function matchStringValue(val: string, valer: Valer) {

	if (type(valer) === 'String') {
		return val === valer
	}

	if (type(valer) === 'RegExp') {
		return (valer as RegExp).test(val)
	}

	return false

}