/**
 * @title randomString
 * @description 随机字符串
 * @returns {string}
 * @version 2.4.0
 */
export function randomString(): string {
	return Math.random().toString(36).slice(2)
}