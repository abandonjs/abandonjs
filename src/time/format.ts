import { spLength } from '../number'
import { replaces } from '../string'
import { type } from 'check-it-type'
import { Time } from './type'

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