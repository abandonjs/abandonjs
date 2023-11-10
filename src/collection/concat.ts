import { isArray, isSet } from "asura-eye";

/**
 * @title concat<T>
 * @description 连接多个数组
 * @param {...unknown[]} ...list 多个数组 
 * @returns {T[]}
 * @lastUpdate 2.6.0
 */
export function concat<T = unknown>(...list: unknown[]): T[] {
	if (!list || list.length === 0) return []
	const result: T[] = []
	const len: number = list.length
	let i = -1;
	while (++i < len) {
		const item = list[i]
		if (isArray(item)) {
			item.forEach(unit => result.push(unit))
			continue;
		}
		if (isSet(item)) {
			item.forEach(unit => result.push(unit as T))
			continue;
		}
		result.push(item as T)

	}
	return result
}