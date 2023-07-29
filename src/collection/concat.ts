/**
 * @title concat<T>
 * @description 连接多个数组
 * @params ...list {T[][]} 多个数组 
 * @returns T[]
 * @update 2.6.0
 */
export function concat<T = unknown>(...list: unknown[]): T[] {
	let result: T[] = []
	if (list && list.length > 0) {
		const len: number = list.length
		let i = 0;
		while (i < len) {
			const item = list[i]
			if (Array.isArray(item)) {
				item.forEach(unit => result.push(unit))
			} else {
				result.push(item as T)
			}
			i++;
		}
	}
	return result
}