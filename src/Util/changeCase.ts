/**
 * 首字母大写
 */
type CaseTypeFirstUpper = 'FirstUpper'
/**
 * 首字母小写
 */
type CaseTypeFirstLower = 'FirstLower'
/**
 * 全部大写
 */
type CaseTypeUpper = 'Upper'
/**
 * 全部小写
 */
type CaseTypeLower = 'Lower'
export type CaseType =
  | CaseTypeFirstUpper
  | CaseTypeFirstLower
  | CaseTypeLower
  | CaseTypeUpper
/**
 * @title changeCase
 * @description  字符转换
 * --- type: FirstUpper:首字母大写 FirstLower：首字母小写  Upper：全部大写 Lower：全部小写
 * @param str string
 * @param type number
 * @returns string
 */
export function changeCase(str: string, type: CaseType = 'Upper'): string {
  switch (type) {
    case 'FirstUpper':
      return str.replace(
        /\b.*/g,
        (word) => word.substring(0, 1).toUpperCase() + word.substring(1)
      )
    case 'FirstLower':
      return str.replace(
        /\b.*/g,
        (word) => word.substring(0, 1).toLowerCase() + word.substring(1)
      )
    case 'Upper':
      return str.toUpperCase()
    case 'Lower':
      return str.toLowerCase()
    default:
      return str
  }
}