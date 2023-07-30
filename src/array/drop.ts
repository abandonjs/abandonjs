import { isArray } from "asura-eye"
import { toArray } from "./toArray"

/**
 * @title drop<T>
 * @description 去除前n个元素(影响原数据)
 * @param list {T[]} 数组
 * @param n=0 {number} 要去除元素个数 
 * @returns {T[]} 剩余切片
 */
export function drop<T = any>(list: T[] = [], n = 0): T[] {
	
	if (!isArray(list)) return toArray(list) as T[]
	while (n--) {
		if (list.length < 1) return []
		if (list.length > 0)
			list.shift()
	}
	return list as T[]
}

/**
 * @title dropRight<T>
 * @description 从右往左删除的指定个数
 * @param list T[] 要处理的数组
 * @param n=1 需要删除的元素数量
 * @returns T[]
 */
export function dropRight<T = any>(list: T[], n = 1): T[] {
	const len = Math.max(list.length || 0, list.length)
	return list.splice(0, len - n) as T[]
}