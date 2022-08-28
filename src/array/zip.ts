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