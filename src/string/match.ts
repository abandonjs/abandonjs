/**
 * @title once
 * @description  将提取字母和数字
 * @param str 待处理 字符串
 * @returns RegExpMatchArray( string[] | [] ) | null
 */
export function getWordAndNumber(str: string): RegExpMatchArray | null {
	return str.match(/[a-zA-Z]+|[1-9]+/g)
}