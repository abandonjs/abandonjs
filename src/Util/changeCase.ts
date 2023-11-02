/**
 * @title toFirstUpperCase
 * @description 首字母大写
 */
export const toFirstUpperCase = (value: string) => value.replace(
  /\b.*/g,
  (word) => word.substring(0, 1).toUpperCase() + word.substring(1)
)

/**
 * @title toFirstLowerCase
 * @description 首字母小写
 */
export const toFirstLowerCase = (value: string) => value.replace(
  /\b.*/g,
  (word) => word.substring(0, 1).toLowerCase() + word.substring(1)
)

/**
 * @title toUpperCase
 * @description 全部大写
 */
export const toUpperCase = (value: string) => value.toUpperCase()

/**
 * @title toLowerCase 
 * @description 全部小写
 */
export const toLowerCase = (value: string) => value.toLowerCase()
