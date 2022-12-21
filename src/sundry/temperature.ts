
/**
 * @title toFahrenheit
 * @description 摄氏度转换为华氏度
 * @param celsius {number}
 * @returns {number}
 * @version 2.4.0
 */
export const toFahrenheit = (celsius: number) => celsius * 9 / 5 + 32

/**
 * @title toCelsius 
 * @description 华氏度转换为摄氏度
 * @param fahrenheit {number}
 * @returns {number}
 * @version 2.4.0
 */
export const toCelsius = (fahrenheit: number) => (fahrenheit - 32) * 5 / 9