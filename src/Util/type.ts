/**
 * @title type
 * @description 获取类型
 * @param any 参数
 * @return string 类型名称
 */
export type typeResult = 'Array' | 'Object' | 'Function' | 'AsyncFunction' | 'GeneratorFunction' | 'String' | 'Number' | 'NaN' | 'RegExp' | string

export function type(param: any): typeResult {
  const result: string = Object.prototype.toString
    .call(param)
    .match(/\[object (\w+)\]/)[1]
  if (result === 'Number' && isNaN(param)) return 'NaN'
  return result
}

/**
 * @title types
 * @description 获取类型数组
 * @param params any[] 待判断的参数列表
 * @param hasRepeat=false 保留重复类型
 * @return string[] 类型名称
 */
export function types(params: any[], hasRepeat = false): typeResult[] {
  const result = params.map(i => type(i)) || []
  if (hasRepeat) {
    return result
  }
  return [...new Set(result)]
}