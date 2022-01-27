import {
	lunarInfo, zodiacs, Gan, Zhi,
	weekday, Calendar,
	sTermInfo, solarTerm,
	leapYear
} from "./contant";

const now: Date = new Date()

//用于计算农历年月日的数据
const GY: number = now.getFullYear()
const GM: number = now.getMonth()
const GD: number = now.getDate()

const year: number = now.getFullYear()
const _month: number = now.getMonth() + 1
const _date: number = now.getDate()
const _hours: number = now.getHours()
const _minutes: number = now.getMinutes()
const _seconds: number = now.getSeconds()
const month: string = _month.toString().padStart(2, '0')
const date: string = _date.toString().padStart(2, '0')
const hours: string = _hours.toString().padStart(2, '0')
const minutes: string = _minutes.toString().padStart(2, '0')
const seconds: string = _seconds.toString().padStart(2, '0')

/**
 * @title isLeapYear
 * @description 是否为闰年
 * @param year 需要判断的年份
 * @returns boolean
 */
function isLeapYear(year: number | undefined = new Date().getFullYear()): boolean {
	return (year % 4 === 0 && year % 100 !== 0)
		|| year % 400 === 0
}

//==== 传入 offset 传回干支, 0=甲子
function cyclical(num: number): string {
	return (Gan[num % 10] + Zhi[num % 12])
}

//==== 传回农历 year年的总天数
function lYearDays(year: number): number {
	let i, sum = 348
	for (i = 0x8000; i > 0x8; i >>= 1) {
		sum += (lunarInfo[year - 1900] & i) ? 1 : 0
	}
	return (sum + leapDays(year))
}

//==== 传回农历 year年闰月的天数
function leapDays(year: number): 0 | 30 | 29 {
	if (leapMonth(year)) {
		return ((lunarInfo[year - 1900] & 0x10000) ? 30 : 29)
	}
	else {
		return 0
	}
}


/**
 * @title leapMonth
 * @description 传回农历 year年闰哪个月 1-12 , 没闰传回 0 
 * @param year 指定要判断的年份
 * @returns 
 */
function leapMonth(year?: number): number {
	if (year === undefined) year = new Date().getFullYear()
	return (lunarInfo[year - 1900] & 0xf);
}

//==== 传回农历 year年month月的总天数
function monthDays(year?: number, month?: number): 30 | 29 {
	if (year === undefined) year = new Date().getFullYear()
	if (month === undefined) month = new Date().getMonth() + 1
	return ((lunarInfo[year - 1900] & (0x10000 >> month)) ? 30 : 29)
}

//==== 算出农历, 传入日期对象, 传回农历日期对象
//     该对象属性有 农历年year 农历月month 农历日day 是否闰年isLeap yearCyl dayCyl monCyl
function Lunar(objDate: Date): { [key: string]: any } {
	let i, temp = 0
	const baseDate: Date = new Date(1900, 0, 31)
	let offset: number = Math.floor((objDate.getTime() - baseDate.getTime()) / 86400000)

	const dayCyl: number = offset + 40
	let monCyl = 14

	for (i = 1900; i < 2050 && offset > 0; i++) {
		temp = lYearDays(i)
		offset -= temp
		monCyl += 12
	}
	if (offset < 0) {
		offset += temp;
		i--;
		monCyl -= 12
	}
	//农历年
	const year: number = i
	const yearCyl: number = i - 1864

	const leap: number = leapMonth(i) //闰哪个月
	let isLeap = false  //是否闰年

	for (i = 1; i < 13 && offset > 0; i++) {
		//闰月
		if (leap > 0 && i === (leap + 1) && isLeap === false) {
			--i; isLeap = true; temp = leapDays(year);
		}
		else {
			temp = monthDays(year, i);
		}

		//解除闰月
		isLeap === true && i === (leap + 1) && (isLeap = false)
		offset -= temp
		isLeap === false && (monCyl++)
	}

	if (offset === 0 && leap > 0 && i === leap + 1)
		if (isLeap) { isLeap = false }
		else {
			isLeap = true
			--i
			--monCyl
		}

	if (offset < 0) {
		offset += temp
		--i
		--monCyl
	}
	//农历月
	const month: number = i
	//农历日
	const day: number = offset + 1

	return {
		year: year,
		month: month,
		day: day,
		isLeap: isLeap,
		leap: leap,
		yearCyl: yearCyl,
		dayCyl: dayCyl,
		monCyl: monCyl
	}
}

//==== 中文日期 m为传入月份，d为传入日期
function cDay(m: number, d: number): { [key: string]: any } {
	const nStr1: string[] = ['日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
	const nStr2: string[] = ['初', '十', '廿', '卅', '']
	//农历中文月
	let lunarMonthCn
	//农历中文日
	let lunarDayCn
	if (m > 10) {
		lunarMonthCn = '十' + nStr1[m - 10]
	} else {
		lunarMonthCn = nStr1[m]
	}
	lunarMonthCn += '月'

	switch (d) {
		case 10: lunarDayCn = '初十'; break;
		case 20: lunarDayCn = '二十'; break;
		case 30: lunarDayCn = '三十'; break;
		default: lunarDayCn = nStr2[Math.floor(d / 10)] + nStr1[d % 10]
	}
	return {
		lunarMonthCn: lunarMonthCn,
		lunarDayCn: lunarDayCn
	}
}

//节气
function getSolarTerm(): string {
	let solarTerms = ''

	let tmp1: Date = new Date(
		(31556925974.7 * (GY - 1900)
			+ sTermInfo[GM * 2 + 1] * 60000)
		+ Date.UTC(1900, 0, 6, 2, 5)
	)

	let tmp2: number = tmp1.getUTCDate()

	if (tmp2 === GD) solarTerms = solarTerm[GM * 2 + 1]
	tmp1 = new Date(
		(31556925974.7 * (GY - 1900) + sTermInfo[GM * 2] * 60000) + Date.UTC(1900, 0, 6, 2, 5)
	)
	tmp2 = tmp1.getUTCDate()
	if (tmp2 === GD) solarTerms = solarTerm[GM * 2]

	return solarTerms
}

//去掉时分秒的日期
const sDObj: Date = new Date(GY, GM, GD);
const lDObj: { [key: string]: any } = Lunar(sDObj);

export const calendar: Calendar = {
	//公历年月日、星期、时分秒
	gregorianYear: year,
	gregorianMonth: month,
	gregorianDay: date,
	weekday: weekday[now.getDay()],
	hours: hours,
	minutes: minutes,
	seconds: seconds,

	//农历年月日、生肖年
	lunarYear: lDObj.year,
	lunarMonth: lDObj.month,
	lunarDay: lDObj.day,
	zodiacYear: zodiacs[(GY - 4) % 12],
	//农历中文年月日
	lunarYearCn: cyclical(GY - 1900 + 36),
	lunarMonthCn: cDay(lDObj.month, lDObj.day).lunarMonthCn,
	lunarDayCn: cDay(lDObj.month, lDObj.day).lunarDayCn,

	//节气
	solarTerm: getSolarTerm(),
	leapMonth: leapMonth(new Date().getFullYear()),
	getLeapMonth: leapMonth,
	leapYear: isLeapYear() ? leapYear[1] : leapYear[0],
	isLeapYear,
}

