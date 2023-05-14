import { isEmpty, isString } from "asura-eye";

export function from<T>(value: string | T[], callback: (element: T, index: number) => T, thisArg?: unknown) {
	if (isEmpty(thisArg)) {
		thisArg = value
	}
	if (isString(value)) {
		return Array.from(value.split(''), callback as (element: string, index: number) => string, thisArg)
	}
	return Array.from(value, callback, thisArg)
}