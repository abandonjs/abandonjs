import { Val, Valer } from './type'

export function matchArrayValue(val: Val, valer: Valer): boolean {

	if (Array.isArray(val)) {
		return val.join('') === valer
	}

	return false

}