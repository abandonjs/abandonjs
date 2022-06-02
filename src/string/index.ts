import { isEmpty, type } from '../util'
import { isObject } from '../object'


/**
 * @title isString
 * @description 是否为字符串
 * @param val any
 * @returns boolean
 */
export function isString(val:any):boolean{
  return type(val) === 'String'
}

// 反转字符串
export function strReverse(str: string): string {
  return str.split('').reverse().join('')
}

export function isJsonStr(val: any) {
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