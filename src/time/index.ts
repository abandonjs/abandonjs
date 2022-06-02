import { type } from '../util';
import { extendLength } from './util'

/**
 * @title deadline
 * @description 倒计时
 * @param target:Date 目标时间
 * @param timeKey?: 'year' | 'mouth' | 'day' | 'hour' | 'minute' | 'second' | 'timeStamp'  指定倒计时单位
 * @param now?:Date 起始时间
 * @returns number 
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
 * @title isDate
 * @description 检查日期是否有效
 * @param date:any 待判断日期
 * @returns boolean
 */
export function isDate(date: any): boolean {
	return date instanceof Date && !isNaN(date.getTime());
}

/**
 * @title format
 * @description 时间格式化
 * @param time:number|string|Date  时间
 * @param pattern?:string 格式 
 * @returns string 格式化后的数据 
 
| 符号 | 结果| 描述 |
| md-thl md-thl md-thl
| YYYY	| 2022	| 4位数字的年份 |
| YY	|  1-14	| 2 位数字的年份 |
| M  MM |	1-12 |	月份数字 |
| D  DD |	1-31 |	日数 |
| H  HH	| 0-23 |  24 小时制 |
| h  hh	| 1-12 |	12 小时制 |
| m  mm | 0-59 |	分钟|
| s  ss	| 0-59 |	秒钟|

 */
export function format(time: number | string | Date = new Date(), pattern = 'YYYY-MM-DD'): string {
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

	return pattern
		.replace(/[Y|y]{4}/, extendLength(year, 4))
		.replace(/[Y|y]{2}/, extendLength(year, 2, 2))
		.replace(/[M]{2}/, extendLength(month, 2, 2))
		.replace(/[M]{1}/, extendLength(month, 1, 2))
		.replace(/[D]{2}/, extendLength(day, 2, 2))
		.replace(/[D]{1}/, extendLength(day, 1, 2))
		.replace(/[H]{2}/, extendLength(hour, 2, 2))
		.replace(/[H]{1}/, extendLength(hour, 1, 2))
		.replace(/[h]{2}/, extendLength(hour % 12, 2, 2))
		.replace(/[h]{1}/, extendLength(hour % 12, 1, 2))
		.replace(/[m]{2}/, extendLength(minutes, 2, 2))
		.replace(/[m]{1}/, extendLength(minutes, 1, 2))
		.replace(/[s]{2}/, extendLength(seconds, 2, 2))
		.replace(/[s]{1}/, extendLength(seconds, 1, 2))
}


