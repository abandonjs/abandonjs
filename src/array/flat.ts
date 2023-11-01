import { toArray } from './toArray'
/**
 * @title flat<T>
 * @description 数组扁平化
 * @param {T[]} list
 * @param {number} [depth=1] 深度
 * @returns {T[]}
 * @version: 2.2.0
 * @lastUpdate 3.4.0
 */
export function flat<T = any>(list: T[], depth: number = 1): T[] {
	if (!Array.isArray(list)) return toArray<T>(list)
	if (list.length === 0 || depth < 1) return []
	if (depth === 1) return list.flatMap(i => i) as T[]
	return list.flat(depth) as T[]
}