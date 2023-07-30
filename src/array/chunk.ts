
/**
 * @title chunk<T>
 * @description 通过 size 切割数组
 * @param list {T[]}
 * @param size {number} 切割点索引
 * @returns {T[][]} [ [切割点前数据], [切割点后数据] ]
 */
export function chunk<T>(list: T[], size: number): T[][] {
  return [list.slice(0, size), list.slice(size)]
}
