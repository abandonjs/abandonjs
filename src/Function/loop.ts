/**
 * @title loop
 * @description: 指定次数遍历
 * @param length : number
 * @param  callback : (index: number) => true | void
 * @returns number
 */
export function loop<T>(
	length: number,
	callback: (index: number | number[]) => T,
	indexes: number[] = []
): T[] {
	const result: T[] = []
	for (let i: number = 0; i < length; i++) {

		const unit = callback(indexes.concat(i))
		result.push(unit)

		if (Number.isNaN(result)) {
			return result
		}


	}
	return result
}

/**
 * @title loops
 * @description: 指定次数遍历
 * @param length : number[]
 * @param  callback : (index: number) => true | void
 * @returns number
 */
export function loops<T>(
	length: number[],
	callback: (index: number | number[]) => T,
	indexes: number[] = []
): any[] {

	const len = length.length
	if (len === 0) {
		return []
	}

	if (len === 1) {
		return loop<T>(length[0], callback, indexes)
	}

	const [_len, ..._length] = length

	const result: any[] = []

	for (let i = 0; i < _len; i++) {
		result.push(loops(_length, callback, indexes.concat(i)))
	}

	return result 

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