import { type } from '../util'
import { isObject } from '../object'

export * from './stringify'

/**
 * @title hide
 * @description 隐藏指定位置的字符
 * @param target 待替换子串
 * @param start = 0  开始位置
 * @param end = target.length
 * @returns string
 */
export function hide(target: string, start = 0, end?: number): string {
  if (start <= 0) return target.replace(/./g, '*')

  if (!end) {
    end = target.length
  }
  const end_len = (target.length - end) || 0
  const reg = new RegExp(`(.{${start - 1}}).{${end - start + 1}}${end_len > 0 ? `(.{${end_len}})` : ''}`, 'g')

  return target
    .replace(reg, `$1${new Array(end - start + 1).fill('*').join('')}${end_len > 0 ? '$2' : ''}`)

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

/**
 * @title reverseString 
 * @description 反转字符串
 * @param target string
 * @return string
 */
export function reverseString(target: string): string {
  return target.split('').reverse().join('')
}

/**
 * @title isJsonString<T>
 * @description 判断是否为json字符串, 若是并返回处理后的对象
 * @param val 待判断字符串
 * @returns T | false
 */
export function isJsonString<T>(val: any): T | false {
  if (typeof val !== 'string')
    return false
  try {
    const obj = JSON.parse(val)
    return isObject(obj) && obj
  } catch (e) {
    return false
  }

}

/**
 * @title toString
 * @description 转换为字符串
 * @param value any
 * @returns string
 */
export function toString(value: any): string {
  if (typeof value === 'string') return value
  try {
    return JSON.stringify(value)
  } catch (error) {
    return ''
  }
}

/**
 * @title toStrings
 * @description 转换为字符串数组
 * @param value any[]
 * @returns string[]
 */
export function toStrings(values: any[]): string[] {
  return values.map(i => toString(i))
}