import { isArray, isEmpty, isString } from "check-it-type"

/**
 * @title indexOf<T>
 * @param value {string|T[]}
 * @param target string | T
 * @returns {boolean}
 */
export function indexOf<T = unknown>(value: string | T[], target: string | T) {
	if (isString(value)) return value.indexOf(target as string) > -1
	if (isArray(value)) return value.indexOf(target as T) > -1
	return false
}

// export function every<T>(
// 	value: string | T[],
// 	callback?: (element: T, index: number, array: T[] | string[]) => boolean,
// 	thisArg?: T[] | string[]
// ) {
// 	if (isString(value)) {
// 		return value.split('').every(callback, thisArg)
// 	}
// 	return value.every(callback, thisArg)
// }



