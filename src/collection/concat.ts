/**
 * @title concat<T>
 * @description 连接多个数组
 * @params ...list {T[][]} 多个数组 
 * @returns T[]
 * @update 2.6.0
 */
export function concat<T>(...list: T[]): T[] {
	let result: T[] = []
	if (list && list.length > 0) {
		const len: number = list.length
		let i = 0;
		while (i < len) {
			if (Array.isArray(list[i])) {
				result = result.concat(list[i])
			} else {
				result.push(list[i])
			}
			i++;
		}
	}
	return result
}