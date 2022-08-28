import { toArray } from '../array/toArray'

/**
 * @title loop
 * @description: 指定次数遍历
 * @param length : number
 * @param  callback : (index: number) => true | void
 * @returns number
 */
export function loop(
	length: number,
	callback: (index: number | number[]) => true | void,
	indexes: number[] = []
): number {

	for (let i: number = 0; i < length; i++) {

		if (callback(indexes.concat(i))) {
			return i
		}

	}
	return -1
}

/**
 * @title loops
 * @description: 指定次数遍历
 * @param length : number[]
 * @param  callback : (index: number) => true | void
 * @returns number
 */
export function loops(
	length: number[],
	callback: (index: number | number[]) => true | void,
	indexes: number[] = []
): number {

	const len = length.length
	if (len === 0) {
		return 0
	}

	if (len === 1) {
		return loop(length[0], callback, indexes)
	}

	const [_len, ..._length] = length

	loop(_len, (i: number) => {
		loops(_length, callback, indexes.concat(i))
	})


	return -1
}

/**
 * @title loops<T>
 * @description: 数组遍历
 * @version: 2.1.11
 * @param arrays 
 * @param callback 
 * @returns number
 */
export function loopArray<T>(arrays: T[], callback: (unit: T, index?: number) => true | void): number {

	for (let i = 0; i < length; i++) {
		if (callback(arrays[i], i)) {
			return i
		}
	}

	return -1
}