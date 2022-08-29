import { loops } from '../function/loop'

/**
 * @title: zip
 * @description: 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推 
 * @version: 2.1.11
 * @param arrays : ...any[]
 * @returns any[]
 */
export function zip<T>(...arrays: any[]): T[][] {
	const len: number = arrays.length
	const maxLen: number = arrays[0].length
	const result: T[][] = loops(
		[maxLen, len],
		(indexes: [number, number]) => {
			if (indexes.length !== maxLen) return
			const [depth0, depth1] = indexes
			return arrays[depth1][depth0]
		})

	return result
}



export function zipObject<T>(props: (string | number)[], values: any[]): T {
	const record: T = {} as T
	for (let i = 0; i < props.length; i++) {
		record[props[i]] = values[i]
	}
	return record
}


const _path = (path: string, value: any) => {
	const _record = {}
	// return _path(path, value)
}

export function zipObjectDeep<T>(props: string[], values: any[]): T {
	const record: T = {} as T
	const _props = [...props]
	for (let i = 0; i < props.length; i++) {
		// const keys = props[i].split('.')
		const key = /(\w)\./.exec(props[i])
		// if (key?.length === 2) {
		// 	record[key] = 
		// }
		// record[keys[0]] = _path(,values[i])

		// for (let j = 1; i < keys.length; j++) {
		// }
		// record[props[i]] = values[i]
	}
	return record
}