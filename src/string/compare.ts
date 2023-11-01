import { isString } from 'asura-eye';
/**
 * @title compareString
 * @description 比较字符串大小
 * @param {string} compare 
 * @param {string} compared 
 * @returns {boolean}
 */
export function compareString(compare: string, compared: string): boolean {
  if (isString(compare) && isString(compared)) {
    if (compare.length !== compared.length) {
      return compare.length > compared.length
    }
    for (let i = 0; i < compare.length; i++) {
      if (compare.charCodeAt(i) > compared.charCodeAt(i)) {
        return true
      }
      if (compare.charCodeAt(i) < compared.charCodeAt(i)) {
        return false
      }
    }
  }
  return false
}