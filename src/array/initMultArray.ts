/**
 * @title initMultArray
 * @description 生成多维数组
 * @param unit 初始化单元
 * @param dimension 多维指定 用&符号隔开
 * @returns 多维数组
 */
export default function initMultArray(unit: any, dimension?: string): any[] {
  if (!dimension) return [unit]
  if (!unit) unit = undefined

  const dimArr: number[] = dimension
    .split('&')
    .map((item: string): number => Number(item) || 1)

  if (dimArr.length < 2) {
    return Array(dimArr[0]).fill(unit)
  }

  let depth: number = dimArr.length
  let arrItem: any[] = Array(dimArr[--depth]).fill(unit)
  do {
    const tmp_arrItem: any[] = JSON.parse(JSON.stringify(arrItem)) || []
    arrItem = Array(dimArr[--depth]).fill(tmp_arrItem)
  } while (depth)

  return arrItem
}
