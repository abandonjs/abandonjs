/**
 * @title unique<T>
 * @description 去除数组重复项
 * @param T[] list 待过滤数组
 * @returns T[]
 */
export function unique<T>(list: T[]): T[] {
  return [...new Set(list)]
}