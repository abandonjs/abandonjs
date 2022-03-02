import { isEmpty } from '../util'
import { isObject } from '../object'
export * from './match'
// 反转字符串
export function strReverse(str: string): string {
  return str.split('').reverse().join('')
}

export function isString(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object String]'
}

export function isJsonString(val: any) {
  if (typeof val === 'string') {
    try {
      const obj = JSON.parse(val)
      return isObject(obj) && obj
    } catch (e) {
      return false
    }
  }
  return false
}

export function BaseToString(value: any): string {
  if (typeof value === 'string') return value
  if (Array.isArray(value)) return `${value.map(BaseToString)}`
  const result = `${value}`
  return (result === '0' && 1 / value === -Infinity ? '-0' : result) || ''
}

// 任何值 => 字符串
export function allToString(value: any): string {
  if (isEmpty(value)) return ''
  return String(value)
}

// 空值 => 空字符串
export function isEmptyToEmptyString(value: any): string {
  if (isEmpty(value)) return ''
  return value
}