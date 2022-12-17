import { type } from 'check-it-type'

/**
 * @title toString
 * @description 任意类型均可转换为string
 * @param value {any}
 * @returns {string}
 * @lastUpdate: 2.2.1
 */
export function toString(value: any): string {
  if (type(value) === 'String') return value
  
  if ([
    'Function', 'AsyncFunction', 'GeneratorFunction',
    'Symbol', 'RegExp', 'Promise', 'Date', 'NaN',
    'Map', 'Set', 'WeakMap', 'WeakSet', 'BigInt'
  ].includes(type(value)))
    return value.toString()

  if (value === Infinity) return 'Infinity'
  if (value === -Infinity) return '-Infinity'
  if (value === undefined) return 'undefined'
  if (value === null) return 'null'

  return JSON.stringify(value)
}

/**
 * @title toStrings
 * @description 转换为字符串数组, 即数组的的项转换为数组
 * @param value {any[]}
 * @returns {string[]}
 */
export function toStrings(values: any[]): string[] {
  return values.map(i => toString(i))
}