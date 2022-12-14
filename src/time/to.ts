/**
 * @title toDate
 * @description 字符串装换成Date对象
 * @param value string 可以转换成时间的字符串
 * @returns {Date}
 */
export function toDate(value: string): Date {
	// ios 不支持 YYYY-MM-DD hh:mm:ss
	if (/\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}/.test(value)) {
		value.replaceAll('-', '/')
	}
	return new Date(value)
}