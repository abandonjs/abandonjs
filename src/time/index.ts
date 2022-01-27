// import { anyToStringFn } from '../type'
import { calendar } from './lunar';

export {
	calendar
}


// export function dayOfYear(date: Date): number {
// 	return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
// }

// dayOfYear(new Date());   // 307

// 计算两个日期的相隔多少天
export function dateInterval(date1: Date, date2: Date): number {
	return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
}


// 检查日期是否有效
export function isDateValid(val: any): boolean {
	return !Number.isNaN(new Date(val).valueOf());
}

// function minLength(value: any, len: number) {
// 	return String(value).length < len ? `0${value}` : value;
// }

// function date(format: string, timestamp: string): string {

// 	const time: Date = new Date(timestamp);
// 	const year: number = time.getFullYear();
// 	const day: number = time.getDay();
// 	const month: number = time.getMonth();
// 	const hour: number = time.getHours();
// 	const minutes: number = time.getMinutes();
// 	const seconds: number = time.getSeconds()

// 	const formatlist: { reg: string, value: number | string }[] = [
// 		{ reg: 'YYYY', value: minLength(year, 4) },
// 		{ reg: 'yyyy', value: minLength(year, 4) },
// 		{ reg: 'mm', value: minLength(month, 2) },
// 		{ reg: 'dd', value: minLength(day, 2) },
// 		{ reg: 'hh', value: minLength(hour, 2) },
// 		{ reg: 'mm', value: minLength(minutes, 2) },
// 		{ reg: 'ss', value: minLength(seconds, 2) },
// 	]

// 	formatlist.forEach((item: { reg: string, value: number | string }): void => {
// 		// format = format.replace(item.reg, item.value);
// 	})

// 	return format;
// }

// 支持时间戳/ (普通时间, 时间格式), , 指定时区, 指定返回格式

// export function BaseToDateString(time: string): void {
// 	this.time = new Date(time).getTime();
// 	this.formatStr = "YYYY-MM-DD";
// 	this.formTimezone = 8;
// 	this.toTimezone = 8;
// }

// 指定 输入时间 时区
// BaseToDateString.prototype.FormTz = function (timezone: number) {
// 	this.formTimezone = timezone;
// 	return this;
// }

// BaseToDateString.prototype.toTz = function (timezone: number) {
// 	this.toTimezone = timezone;
// 	return this;
// }

// // 指定日期格式化输出
// BaseToDateString.prototype.format = function (format) {
// 	this.formatStr = format;
// 	return date(this.formatStr, this.time);
// }


/*
YYYY	2014	4 或 2 位数字的年份
YY	14	2 位数字的年份
Y	-25	带有任意数字和符号的年份
Q	1..4	年份的季度。将月份设置为季度的第一个月
M MM	1..12	月份数字
MMM MMMM	Jan..December	语言环境中的月份名称，由 moment.locale() 设置
D DD	1..31	月的某天
Do	1st..31st	月的某天，带序数
DDD DDDD	1..365	年的某天
X	1410715640.579	Unix 时间戳
x	1410715640579	Unix 毫秒时间戳

gggg	2014	语言环境的 4 位数字的周年
gg	14	语言环境的 2 位数字的周年
w ww	1..53	语言环境的年的第几周
e	0..6	语言环境的星期几
ddd dddd	Mon...Sunday	语言环境的星期几的名称，由 moment.locale() 设置
GGGG	2014	ISO 的 4 位数字的周年
GG	14	ISO 的 2 位数字的周年
W WW	1..53	ISO 的年的第几周
E	1..7	ISO 的星期几

L	04/09/1986	日期（以本地格式）
LL	September 4 1986	月份名称、月份日期、年份
LLL	September 4 1986 8:30 PM	月份名称、月份日期、年份、时间
LLLL	Thursday, September 4 1986 8:30 PM	星期几、月份名称、月份日期、年份、时间
LT	08:30 PM	时间（不含秒钟）
LTS	08:30:00 PM	时间（含秒钟）

H HH	0..23	小时（24 小时制）
h hh	1..12	小时（使用 a A 的 12 小时制）
k kk	1..24	小时（从 1 到 24 的 24 小时制）
a A	am pm	上午或下午（单一字符 a p 也被视为有效）
m mm	0..59	分钟
s ss	0..59	秒钟
S SS SSS	0..999	带分数的秒钟
Z ZZ	+12:00	从 UTC 偏移为 +-HH:mm、+-HHmm 或 Z

*/