import { spLength } from '../number'
import { replaces } from '../string'
import { type } from '../util'
import { Time } from './type'

export * from './is'

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

/**
 * @title deadline
 * @description 倒计时
 * @param target:Date 目标时间
 * @param timeKey?: 'year' | 'mouth' | 'day' | 'hour' | 'minute' | 'second' | 'timeStamp'  指定倒计时单位
 * @param now?:Date 起始时间
 * @returns {number} 
 */
type TimeKey = 'year' | 'mouth' | 'day' | 'hour' | 'minute' | 'second' | 'timeStamp'
export function deadline(
	target: Date,
	timeKey: TimeKey = 'day',
	now: Date = new Date(),
): number {
	const surplusTimeStamp = target.getTime() - now.getTime()
	const surplusDay: number = Math.ceil(surplusTimeStamp / 86400000)
	switch (timeKey) {
		case 'year': return target.getFullYear() - now.getFullYear()
		case 'mouth': return (target.getFullYear() - now.getFullYear()) * 12 + (target.getDate() - now.getDate())
		case 'day': return surplusDay
		case 'hour': return surplusDay * 24
		case 'minute': return surplusDay * 1440
		case 'second': return surplusDay * 8640086400
		case 'timeStamp': return surplusDay
		default: return surplusTimeStamp
	}
}



/**
 * @title format
 * @description 时间格式化
 * @param time:number|string|Date  时间
 * @param pattern?:string 格式 
 * @returns string 格式化后的数据 

 * @note
| 符号 | 结果| 描述 |
|:----|:----|:----|
| YYYY	| 2022	| 4位数字的年份(忽略大小写) |
| YY	|  1-14	| 2 位数字的年份(忽略大小写) |
| M  MM |	1-12 |	月份数字 |
| D  DD |	1-31 |	日数(忽略大小写) |
| H  HH	| 0-23 |  24 小时制 |
| h  hh	| 1-12 |	12 小时制 |
| m  mm | 0-59 |	分钟|
| s  ss	| 0-59 |	秒钟|

 */

export function format(time: Time = new Date(), pattern = 'YYYY-MM-DD'): string {

	if (type(time) === 'Number') {
		if (time.toString().length === 10) time += '000'
	}
	const date: Date = new Date(time)
	const year: number = date.getFullYear()
	// eslint-disable-next-line
	if (isNaN(year)) {
		return 'Invalid Date'
	}
	const month: number = date.getMonth() + 1
	const day: number = date.getDate()
	const hour: number = date.getHours()
	const minutes: number = date.getMinutes()
	const seconds: number = date.getSeconds()

	return replaces(pattern, [
		{ reg: /[Y|y]{4}/, value: spLength(year, 4, 4) },
		{ reg: /[Y|y]{2}/, value: spLength(year, 2, 2) },
		{ reg: /[M]{2}/, value: spLength(month, 2, 2) },
		{ reg: /[M]{1}/, value: spLength(month, 1, 2) },
		{ reg: /[D|d]{2}/, value: spLength(day, 2, 2) },
		{ reg: /[D|d]{1}/, value: spLength(day, 1, 2) },
		{ reg: /[H]{2}/, value: spLength(hour, 2, 2) },
		{ reg: /[H]{1}/, value: spLength(hour, 1, 2) },
		{ reg: /[h]{2}/, value: spLength(hour % 12, 2, 2) },
		{ reg: /[h]{1}/, value: spLength(hour % 12, 1, 2) },
		{ reg: /[m]{2}/, value: spLength(minutes, 2, 2) },
		{ reg: /[m]{1}/, value: spLength(minutes, 1, 2) },
		{ reg: /[s]{2}/, value: spLength(seconds, 2, 2) },
		{ reg: /[s]{1}/, value: spLength(seconds, 1, 2) }
	])
}

