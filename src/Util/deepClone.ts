import { type } from "check-it-type"

function deepClonePredicate(value: any) {
  switch (type(value)) {
    case 'RegExp':
    case 'Function':
    case 'AsyncFunction':
    case 'GeneratorFunction':
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
 * @param value {any}
 * @returns {any}
 * @version 2.4.1
 */
export function deepClone(value: any) {
  return deepClonePredicate(value)
}