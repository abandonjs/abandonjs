import { isArray } from './isArray'

/**
 * @title toArray<T>
 * @description 将非数组转换为数组
 * @param value T | T[]
 * @returns T[]
 */
export function toArray<T>(value: T | T[]): T[] {
	if (isArray(value)) return value as T[]
	return [value] as T[]
}