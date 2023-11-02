import { ObjectType } from '../type'
import { loops } from '../function/loop'

/**
 * @title zip<T>
 * @description: 每个数组同样的下标组成一个新数组
 * @param {...T[]} ...arrays 
 * @returns {T[][]}
 * @version: 2.1.11
 * @eg: ```ts
 zip(['fred', 'barney'], [30, 40], [true, false]) 
 => [['fred', 30, true], ['barney', 40, false]]
 ```
 */
export function zip<T = any>(...arrays: any[]): T[][] {
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

/**
 * @title zipObject<Value>
 * @description: 第一个数组是对象的key, 第二个数组是对象的value
 * @param {(string|number)[]} keys
 * @param {Value[]} values
 * @returns {ObjectType<Value>}
 * @version: 2.1.11
 * @eg: ```ts
 zipObject(['a', 'b'], [1, 2]) 
 => { 'a': 1, 'b': 2 }
 ```
 */
export function zipObject<Value = any>(
	keys: (string | number)[],
	values: Value[]
): ObjectType<Value> {
	const record: ObjectType<Value> = {}
	keys.forEach(
		(key: string | number, index: number) => {
			record[key] = values[index]
		}
	)
	return record
}