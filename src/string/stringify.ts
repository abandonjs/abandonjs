import { isArray, isEmpty, isObject, isString, isSymbol } from 'asura-eye'
import { toString } from './toString'
import { type ObjectType } from '../type'

/**
 * @title stringify
 * @description JSON.stringify 的二次封装, 原本很多类型返回undefined等值, 都会返回各有意义的值, value 为字符串类型不会再加多一对双引号
 * @param {unknown} value
 * @param {(number|string)[]|(this:any,key:string,value:any)=>any}[replacer]
 * @param {string|number} [space]
 * @returns {string}
 * @lastUpdate 2.2.1
 */
export function stringify(
  value: unknown,
  replacer?: (number | string)[] | null,
  space?: string | number
): string {
  if (isEmpty(value)) {
    return String(value)
  }
  if (isObject(value) || isArray(value)) {
    return JSON.stringify(value, replacer, space)
  }

  if (isSymbol(value)) return value.toString()

  return JSON.stringify(toString(value), replacer, space).replace(
    /^(")+|(")+$/g,
    ''
  )
}

export function parse<T = ObjectType>(value: unknown, defaultValue?: T): T {
  try {
    if (isString(value)) {
      return JSON.parse(value)
    }
    return defaultValue as T
  } catch (error) {
    return defaultValue as T
  }
}
