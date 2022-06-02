/**
 * @title type
 * @description 获取类型
 * @param any 参数
 * @return string 类型名称
 */
type typeResult = 'Array' | 'Object' | 'Function' | 'AsyncFunction' | 'GeneratorFunction' | 'String' | 'Number'
export function type(param: any): typeResult | string {
  const result: string = Object.prototype.toString
    .call(param)
    .match(/\[object (\w+)\]/)[1]
  if (result === 'Number' && isNaN(param)) return 'NaN'
  return result
}