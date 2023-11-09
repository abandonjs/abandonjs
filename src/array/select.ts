import { random } from '0math'
import { isArray } from 'asura-eye'

/**
 * @title selects<T>
 * @description 指定范围 来随机选择数组元素
 * @param {T[]} list
 * @param {number} [min=0] 最小值(包括)
 * @param {number} [max=list.length-1] 最大值(包括)
 * @returns {T[]}
 */
export function selects<T = any>(list: T[], min: number = 0, max: number = list.length - 1): T[] {

  if (max > list.length) max = list.length - 1

  let len: number = random(min, max)
  const result: T[] = []
  let index = 0

  while (len--) {
    index = ~~(Math.random() * list.length)
    result.push(list[index])
    list.splice(index, 1)
  }

  return result
}

/**
 * @title select<T>
 * @description 选择数组其中一项, 不指定就随机选一
 * @param {T[]} list 待选择数组
 * @param {?number} index  指定选择索引(可为负数)
 * @returns {T|null} 选择项
 */
export function select<T = any>(list: T[] = [], index?: number): T | null {
  if (isArray(list)) {
    const len = list.length
    if (len === 0) return null

    if (!index && index !== 0) return list[~~(Math.random() * list.length)]
    if (index > len) return list[index % len]
    if (index > -1) return list[index]
    if (index < 0) return list[list.length + (index % len)]
  }
  return null
}

