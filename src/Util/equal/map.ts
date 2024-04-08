import { isMap } from 'asura-eye'
import { MapType } from '../../type'
import { equalHelper } from './helper'
import { EqualHelper } from './type'

/**
 * @title equalMap
 * @param {MapType} compareMap
 * @param {MapType} beCompareMap
 * @returns {boolean}
 */
export function equalMap(
  compareMap: MapType | unknown,
  beCompareMap: MapType | unknown,
  equal: EqualHelper = equalHelper
): boolean {
  if (
    !isMap(compareMap) ||
    !isMap(beCompareMap) ||
    compareMap.size !== beCompareMap.size
  )
    return false

  for (const [key, value] of compareMap) {
    const beCompareMapTempValue = beCompareMap.get(key)
    if (equal(value, beCompareMapTempValue)) {
      continue
    }
    return false
  }
  return true
}
