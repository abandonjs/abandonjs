import type { Collection, CollectionValue } from './type'
import * as eye from 'asura-eye'
import { at } from './at'

/**
 * @title nth
 * @description 通过指定规则回去集合参数
 * @param {Collection} collection
 * @param {string|number} [index] : 可以输入下标/2n+1 这种格式
 * @return {Collection|CollectionValue}
 */
export function nth(
  collection: Collection,
  index?: string | number,
): Collection | CollectionValue {
  if (eye.isEmpty(index) || eye.isEmpty(collection) || index === 'n') {
    return collection
  }
  if (
    eye.isString(index) &&
    index.includes('n') &&
    /\d?n[+-]?\d?/.exec(index) &&
    (eye.isArray(collection) || eye.isString(collection))
  ) {
    const params = /([-+]?\d)?n([+-]?\d)?/.exec(index)
    if (eye.isArray(params) && params.length === 3) {
      const mult = Number(params[1])
      const gap = Number(params[2])
      const getNewIndex = (num: number) => {
        if (eye.isNumber(mult)) {
          num = num * mult
        }
        if (eye.isNumber(gap)) {
          num = num + gap
        }
        return num
      }
      let i = 0
      let j = 0
      const len = collection.length
      const result: any[] = []
      while (j < len && i < len) {
        j = getNewIndex(i) + 1
        if (j >= len) break
        result.push(at(collection, j))
        i++
      }
      return result
    }
  }
  return at(collection, index)
}
