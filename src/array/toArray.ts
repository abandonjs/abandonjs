/**
 * @title toArray<T>
 * @description 将非数组转换为数组
 * @param value T | T[]
 * @returns T[]
 */
export function toArray<T>(value: T | T[]): T[] {
	if (Array.isArray(value)) return value
	return [value]
}