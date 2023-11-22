import { type } from "asura-eye"

function deepClonePredicate(value: any) {
  switch (type(value)) {
    case 'RegExp':
      return new RegExp(value)
    case 'Array':
    case 'Object': {
      const cloneObj = new value.constructor()
      for (const key in value) {
        if (value.hasOwnProperty(key)) {
          cloneObj[key] = deepClonePredicate(value[key]) // 递归拷贝  
        }
      }
      return cloneObj
    }
    case 'Date': {
      return new Date(value)
    }
  }
  return value
}

/**
 * @title deepClone
 * @description 深拷贝
 * @param {unknown} value
 * @returns {Result}
 * @version 2.4.1
 */
export function deepClone<Result = any>(value: unknown): Result {
  return deepClonePredicate(value) as Result
}