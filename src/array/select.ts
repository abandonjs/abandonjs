import { random } from '../number'

/**
 * @title select
 * @description 指定范围长度 来随机选择数组元素
 * @param list: any[]
 * @param min: number 
 * @param max: number
 * @returns any[]
 */
export function selects(list: any[], min: number, max: number): any[] {
  let len: number =
    random(min, max > list.length ? list.length : max) || 0
  const result: any[] = []
  let index = 0
  while (len--) {
    index = ~~(Math.random() * list.length)
    result.push(list[index])
    list.splice(index, 1)
  }
  return result
}

/**
 * @title selects
 * @description 选择数组其中一项
 * @param list any[] 待选择数组
 * @param index ?number 指定选择索引
 * @returns 选择项
 */
export function select(list: any[] = [], index?: number): any {
  if (index !== null && index !== undefined) {
    if (index > -1) return list[index]
    if (index < 0) {
      return list[list.length + index]
    }
  }
  return list[~~(Math.random() * list.length)]
}

