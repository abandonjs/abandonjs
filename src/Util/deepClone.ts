// 深拷贝
export function deepClone(obj: any, cache = new WeakMap()) {
  if (typeof obj !== 'object') return obj // 普通类型，直接返回
  if (obj === null) return obj
  if (cache.get(obj)) return cache.get(obj) // 防止循环引用，程序进入死循环
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)

  // 找到所属原型上的constructor，所属原型上的constructor指向当前对象的构造函数
  const cloneObj: any = new obj.constructor()
  cache.set(obj, cloneObj) // 缓存拷贝的对象，用于处理循环引用的情况
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], cache) // 递归拷贝
    }
  }
  return cloneObj
}


// /**
// * value：需要拷贝的对象
// * bitmask：位掩码，其中 1 是深拷贝，2 拷贝原型链上的属性，4 是拷贝 Symbols 属性
// * key：传入 value 值的 key
// * object：传入 value 值的父对象
// * stack：Stack 栈，用来处理循环引用
// */

// function baseClone(value:any, bitmask, key, object, stack) {
//     let result
 
//     // 标志位
//     const isDeep = bitmask & CLONE_DEEP_FLAG		// 深拷贝，true
//     const isFlat = bitmask & CLONE_FLAT_FLAG		// 拷贝原型链，false
//     const isFull = bitmask & CLONE_SYMBOLS_FLAG	// 拷贝 Symbol，true
 
//     if (result !== undefined) {
//         return result
//     }
 
//     // 非对象  
//     if (!isObject(value)) {
//         return value
//     }
    
//     const isArr = Array.isArray(value)
//     const tag = getTag(value)
//     if (isArr) {
//         // 数组
//         result = initCloneArray(value)
//         if (!isDeep) {
//             return copyArray(value, result)
//         }
//     } else {
//         // 对象
//         const isFunc = typeof value == 'function'
 
//         if (isBuffer(value)) {
//             return cloneBuffer(value, isDeep)
//         }
//         if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
//             result = (isFlat || isFunc) ? {} : initCloneObject(value)
//             if (!isDeep) {
//                 return isFlat
//                     ? copySymbolsIn(value, copyObject(value, keysIn(value), result))
//                 	: copySymbols(value, Object.assign(result, value))
//             }
//         } else {
//             if (isFunc || !cloneableTags[tag]) {
//                 return object ? value : {}
//             }
//             result = initCloneByTag(value, tag, isDeep)
//         }
//     }
//     // 循环引用
//     stack || (stack = new Stack)
//     const stacked = stack.get(value)
//     if (stacked) {
//         return stacked
//     }
//     stack.set(value, result)
 
//     // Map
//     if (tag == mapTag) {
//         value.forEach((subValue, key) => {
//             result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack))
//         })
//         return result
//     }
 
//     // Set
//     if (tag == setTag) {
//         value.forEach((subValue) => {
//             result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack))
//         })
//         return result
//     }
 
//     // TypedArray
//     if (isTypedArray(value)) {
//         return result
//     }
 
//     // Symbol & 原型链
//     const keysFunc = isFull
//     	? (isFlat ? getAllKeysIn : getAllKeys)
//     	: (isFlat ? keysIn : keys)
 
//     const props = isArr ? undefined : keysFunc(value)
    
//     // 遍历赋值
//     arrayEach(props || value, (subValue, key) => {
//         if (props) {
//             key = subValue
//             subValue = value[key]
//         }
//         assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack))
//     })
    
//     // 返回结果
//     return result
// }
