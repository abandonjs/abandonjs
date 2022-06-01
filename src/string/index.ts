import { isEmpty } from '../util'
import { isObject } from '../object'

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

export function toString(value: any): string {
  if (typeof value === 'string') return value
  if (Array.isArray(value)) return `${value.map(toString)}`
  const result = `${value}`
  return (result === '0' && 1 / value === -Infinity ? '-0' : result) || ''
}

export function toStrings(value: any): string {
  if (isEmpty(value)) return ''
  return String(value)
}