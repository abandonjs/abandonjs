import { Val, Valer } from './type'

export function matchObjectValue(val: Val, valer: Valer) {

	if (typeof val === 'object') {
		return JSON.stringify(val) === valer
	}

	return false

}