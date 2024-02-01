import { isNumber, isString, isNaN } from 'asura-eye'
/**
 * @title padNumber
 * @description 填充数字
 * @param {number|string} value 推荐使用字符串，数字小数点最后的零可能会导致结果不符合预期
 * @param {number|`${number|''}.${number|''}`} length length>0 表整数位保留部分， length<0 表小数点保留位： '2.3': 表2位整数， 3位小数
 * @returns {string}
 */
export function padNumber(
  value: number | string,
  length?: number | `${number | ''}.${number | ''}`,
  strict: boolean = false,
): string {
  const target: string = isNumber(value) ? String(value) : value
  const [leftNum, rightNum] = target.split('.')
  const len = leftNum ? leftNum.length : 0

  if (isNumber(length)) {
    if (length > 0) {
      if (length > len) {
        return new Array(length + 1 - len).join('0') + target
      }
      if (strict) {
        return new Array(length + 1).join('9')
      }
      return target
    }
    if (length < 0) {
      return Number(target).toFixed(-length)
    }
    return target
  }

  if (isString(length)) {
    const [left, right] = length.split('.').map((v) => Math.abs(Number(v)))
    let newTarget: string = leftNum

    if (!isNaN(left) && left > 0) {
      if (left > len) {
        newTarget = new Array(left + 1 - len).join('0') + leftNum
      } else if (strict) {
        newTarget = new Array(left + 1).join('9')
      }
    }

    if (!isNaN(right) && right > 0) {
      if (strict || !rightNum || right > rightNum.length) {
        newTarget =
          newTarget +
          Number(rightNum || 0)
            .toFixed(right)
            .toString()
            .slice(1)
      } else {
        newTarget = newTarget + '.' + rightNum
      }
    }
    return newTarget
  }
  return target
}
