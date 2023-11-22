/**
 * @title reverseString 
 * @description 反转字符串
 * @param {string} target
 * @return {string}
 */
export function reverseString(target: string): string {
	return target.split('').reverse().join('')
}