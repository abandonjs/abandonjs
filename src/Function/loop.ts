import { isEffectArray } from "asura-eye"

/**
 * @title loop<T>
 * @description: 指定次数遍历
 * @param num  {number}
 * @param  callback  {?(indexes: number[]) => T}
 * @returns {T[]}
 * @version: 2.3.2
 */
export function loop<T>(
	num: number,
	callback: ((indexes: number[]) => T) = ((indexes: number[]) => indexes as T),
	indexes: number[] = []
): T[] {
	const result: T[] = []
	for (let i = 0; i < num; i++) {
		result.push(callback(indexes.concat(i)))
	}
	return result
}

/**
 * @title loops<T>
 * @description: 指定次数遍历
 * @param length  {number[]}
 * @param callback  {((indexes: number[]) => T) = ((indexes: number[]) => indexes as T)}
 * @returns {Array}
 * @version: 2.3.2
 */
export function loops<T>(
	num: number[],
	callback: ((indexes: number[]) => T) = ((indexes: number[]) => indexes as T),
	indexes: number[] = []
) {

	const len = num.length
	if (len === 0) {
		return []
	}

	if (len === 1) {
		return loop<T>(num[0], callback, indexes)
	}

	const [_len, ..._length] = num

	const result: any[] = []

	for (let i = 0; i < _len; i++) {
		result.push(loops(_length, callback, indexes.concat(i)))
	}

	return result

}

export function loopGroup<T>(
	num: number[],
	callback: ((indexes: number[]) => T) = ((indexes: number[]) => indexes as T),
	indexes: number[] = []
) {
	const result: T[] = []

	loops<T>(
		num,
		(_indexes: number[]) => {
			result.push(callback(_indexes))
			return _indexes as T
		}, indexes)

	return result
}

/**
 * @title loopArray<T>
 * @description: 数组遍历
 * @param arrays {T[]}
 * @param callback {(unit:T,index?:number)=>true|void}
 * @returns {T|undefined}
 * @version: 2.3.2
 */
export function loopArray<T>(
	array: T[],
	callback: (unit: T, index?: number) => true | void
): T | undefined {

	if (isEffectArray<T>(array))
		for (let i = 0; i < array.length; i++) {
			if (callback(array[i], i)) {
				return array[i]
			}
		}

	return
}

/**
 * @title loopArray<T>
 * @description: 数组遍历
 * @version: 2.1.11
 * @param arrays {T[]}
 * @param callback {(unit:T,index?:number)=>true|void}
 * @returns number
 * @version: 2.3.2
 */
export function loopArrays<T>(
	arrays: T[][],
	callback: (unit: T[], indexes?: number[]) => T
): T[][] {

	const result: T[][] = []

	loops(
		arrays.map(item => item.length),
		(indexes: number[]) => {
			result.push(
				callback(
					indexes.map((i: number, j: number) => arrays[j][i]),
					indexes
				) as T[]
			)
			return indexes
		}
	)

	return result
}