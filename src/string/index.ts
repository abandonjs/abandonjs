import { isEmpty, type } from '../util'
import { isObject } from '../object'


/**
 * @title hide
 * @description 隐藏指定位置的字符
 * @param target 待替换子串
 * @param start = 0  开始位置
 * @param end = target.length
 * @returns string
 */
export function hide(target: string, start: number = 0, end?: number): string {
  if (start !== 0) {
    if (!end) {
      end = target.length
    }
    const end_len = (target.length - end) || 0
    const reg = new RegExp(`(.{${start - 1}}).{${end - start + 1}}${end_len > 0 ? `(.{${end_len}})` : ''}`, 'g')

    return target
      .replace(reg, `$1${new Array(end - start + 1).fill('*').join('')}${end_len > 0 ? '$2' : ''}`)
  }
  return target.replace(/./g, '*')
}


/**
 * @title replaces
 * @description 同时定义多个replace的规则使用
 * @param target string
 * @param regs { reg: RegExp | string, value: string }[]
 * @returns string
 */
export function replaces(target = '', regs: {
  reg: RegExp | string,
  value: string
}[] = []): string {
  for (let i = 0; i < regs.length; i++) {
    const { reg, value } = regs[i]
    target = target.replace(reg, value)
  }
  return target
}

/**
 * @title isString
 * @description 是否为字符串
 * @param val any
 * @returns boolean
 */
export function isString(val: any): boolean {
  return type(val) === 'String' && typeof val === 'string'
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