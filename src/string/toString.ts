import { isEmpty, isString, type } from 'asura-eye'

/**
 * @title toString
 * @description 任意类型均可转换为string
 * @param {unknown} value
 * @returns {string}
 * @lastUpdate: 2.2.1
 */
export function toString(value: unknown): string {
  if (isString(value)) return value
  if(isEmpty(value)) return ''

  
  if ([
    'Function', 'AsyncFunction', 'GeneratorFunction',
    'Symbol', 'RegExp', 'Promise', 'Date',
    'Map', 'Set', 'WeakMap', 'WeakSet', 'BigInt'
  ].includes(type(value)))
    return (value as any).toString()

  if (value === Infinity) return 'Infinity'
  if (value === -Infinity) return '-Infinity'

  return JSON.stringify(value)
}

/**
 * @title toStrings
 * @description 转换为字符串数组, 即数组的的项转换为数组
 * @param {unknown[]} values
 * @returns {string[]}
 */
export function toStrings(values: unknown[]): string[] {
  return values.map(i => toString(i))
}