import { isObject } from 'asura-eye'
import { ObjectType } from '0type'
import { type EqualHelper } from './type'
import { equalHelper } from './helper'

export function equalObject(
  compare: ObjectType | unknown,
  beCompare: ObjectType | unknown,
  equal: EqualHelper = equalHelper
): boolean {
  if (!isObject(compare) || !isObject(beCompare)) return false

  const compareValueKeys = Object.keys(compare)
  const beCompareValueKeys = Object.keys(beCompare)

  if (compareValueKeys.length !== beCompareValueKeys.length) return false

  for (let i = 0; i < compareValueKeys.length; i++) {
    const key = compareValueKeys[i]
    if (equal(compare[key], beCompare[key])) continue
    return false
  }
  return true
}
