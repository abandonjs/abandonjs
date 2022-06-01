import { type, defaultValue } from '../util'
import { clamp } from '../number'
import { useNumberId } from './util'

/**
 * @title id
 * @description id
 * @param length [1<=length, default 10]
 * @returns id
 */
export function id(length?: number): string {
  return useNumberId(clamp(defaultValue(length, 10), 1))
}

/**
 * @title uuid
 * @description uuid
 * @param {string} template uuid 的格式 default:'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'
 * @returns {string} uuid
 * @description 生成随机uid
 */
export function uuid(template: string): string {
  const val: string = template || 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'
  let d: number = new Date().getTime() // 随机种子
  return val.replace(/[xy]/g, function (c: string): string {
    const r: number = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

/**
 * @title uniqueId
 * @description id
 * @param prefix id 前缀
 */
export function uniqueId(length?: number, prefix?: string): string {
  prefix = defaultValue(prefix, '')
  length = defaultValue(length, 10)
  if (arguments.length > 0) {
    if (type(arguments[0]) === 'String') {
      prefix = arguments[0]
      length = 10
    }
    console.log({ arguments })
  }
  return `${prefix + id(length)}`
}