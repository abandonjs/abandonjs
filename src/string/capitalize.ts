/**
 * @title capitalize
 * @description 字符串首字母大写
 * @param str {string}
 * @returns {string}
 * @version 2.4.0
 */
export function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1)
}