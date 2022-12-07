import { toArray } from './toArray'
/**
 * @title flat
 * @description 数组扁平化
 * @param list <Array>
 * @param depth <?number=1> 深度
 * @returns <Array>
 * @version: 2.2.0
 */
export function flat(list: unknown[], depth = 1) {
	if (!Array.isArray(list)) return toArray(list)
	if (list.length === 0 || depth < 1) return []
	if (depth === 1) return list.flatMap(i => i)
	return list.flat(depth)
}