import { isArray } from 'asura-eye'
import { EqualHelper } from './type'
import { equalHelper } from './helper'

/**
 * @title equalArray
 * @param {unknown|any[]} compare
 * @param {unknown|any[]} beCompare
 * @returns {boolean}
 */
export function equalArray(
  compare: unknown | any[],
  beCompare: unknown | any[],
  equal: EqualHelper = equalHelper
): boolean {
  if (
    isArray(compare) &&
    isArray(beCompare) &&
    compare.length === beCompare.length
  ) {
    for (let i = 0; i < compare.length; i++) {
      const item = compare[i]
      if (equal(item, beCompare[i])) {
        continue
      }
      return false
    }
    return true
  }
  return false
}

/**
 * @title equalArray2
 * @param {unknown|any[]} compare
 * @param {unknown|any[]} beCompare
 * @returns {boolean}
 */
export function equalArray2(
  compare: unknown | any[],
  beCompare: unknown | any[],
  equal: EqualHelper = equalHelper
): boolean {
  if (
    isArray(compare) &&
    isArray(beCompare) &&
    compare.length === beCompare.length
  ) {
    for (let i = 0; i < compare.length; i++) {
      let flag = false
      for (let j = 0; j < beCompare.length; j++) {
        if (equal(compare[i], beCompare[j])) {
          flag = true
          break
        }
      }
      if (!flag) {
        return false
      }
    }
    return true
  }
  return false
}
