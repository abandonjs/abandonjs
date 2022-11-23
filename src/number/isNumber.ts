import { type } from '../util'

// export function isNumber() {
// 	return true
// }

/**
 * @title isNumber
 * @description 是否为数字
 * @param value any
 * @returns boolean
 */
export function isNumber(value: any): boolean {
  return type(value) === "Number" && typeof value === 'number'
}