import { isString } from "asura-eye"

export function from<T>(value: string | T[], callback: (element: T, index: number) => T, thisArg?: unknown) {
	
	if (isString(value)) {
		const newCollection: string[] = value.split('')
		return Array.from(newCollection, callback as (element: string, index: number) => string, thisArg || newCollection)
	}


	return Array.from(value, callback, thisArg || value)
}