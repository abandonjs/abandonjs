import { isSet } from 'asura-eye'
import { SetType } from '../../type'
import { EqualHelper } from './type'
import { equalHelper } from './helper'

/**
 * @title equalSet
 * @param {SetType} compareSet
 * @param {SetType} beCompareSet
 * @returns {boolean}
 */
export function equalSet(
  compareSet: SetType | unknown,
  beCompareSet: SetType | unknown,
  equal: EqualHelper = equalHelper
): boolean {
  if (
    !isSet(compareSet) ||
    !isSet(beCompareSet) ||
    compareSet.size !== beCompareSet.size
  )
    return false

  const list = [...compareSet]
  const beList = [...beCompareSet]

  for (let i = 0; i < list.length; i++) {
    if (equal(list[i], beList[i])) {
      continue
    }
    return false
  }
  // for (const value of compareSet) {
  //   if (beCompareSet.has(value)) continue
  //   return false
  // }

  return true
}
/**
 * @title equalSet2
 * @param {SetType} compareSet
 * @param {SetType} beCompareSet
 * @returns {boolean}
 */
export function equalSet2(
  compareSet: SetType | unknown,
  beCompareSet: SetType | unknown,
  equal: EqualHelper = equalHelper
): boolean {
  if (
    !isSet(compareSet) ||
    !isSet(beCompareSet) ||
    compareSet.size !== beCompareSet.size
  )
    return false

  const list = [...compareSet]
  const beList = [...beCompareSet]

  for (let i = 0; i < list.length; i++) {
    let flag = false
    for (let j = 0; j < beList.length; j++) {
      if (equal(list[i], beList[j])) {
        flag = true
        break
      }
    }
    if (!flag) {
      return false
    }
  }
  return true

  // for (let i = 0; i < list.length; i++) {
  //   if (equal(list[i], beList[i])) {
  //     continue
  //   }
  //   return false
  // }
  // for (const value of compareSet) {
  //   if (beCompareSet.has(value)) continue
  //   return false
  // }
}
