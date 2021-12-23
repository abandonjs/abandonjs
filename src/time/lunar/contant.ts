export const lunarInfo: number[] = [
	0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260,
	0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
	0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255,
	0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
	0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40,
	0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
	0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0,
	0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
	0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4,
	0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
	0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0,
	0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0,
	0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570,
	0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
	0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4,
	0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6,
	0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a,
	0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
	0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50,
	0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
	0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552,
	0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
	0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9,
	0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
	0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60,
	0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
	0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0,
	0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
	0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577,
	0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0
]

export const zodiacs: string[] = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']
export const Gan: string[] = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
export const Zhi: string[] = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
export const weekday: string[] = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

export const sTermInfo: number[] = [
	0, 21208, 42467, 63836, 85337, 107014,
	128867, 150921, 173149, 195551, 218072, 240693,
	263343, 285989, 308563, 331033, 353350, 375494,
	397447, 419210, 440795, 462224, 483532, 504758
]
export const solarTerm: string[] = [
	'小寒', '大寒', '立春', '雨水', '惊蛰', '春分',
	'清明', '谷雨', '立夏', '小满', '芒种', '夏至',
	'小暑', '大暑', '立秋', '处暑', '白露', '秋分',
	'寒露', '霜降', '立冬', '小雪', '大雪', '冬至'
]

export const leapYear: string[] = [
	'平年', '闰年'
]

export interface Calendar {
	gregorianYear?: number;          //公历年
	gregorianMonth?: string;         //公历月
	gregorianDay?: string;           //公历日
	weekday?: string;                //星期
	hours?: string;
	minutes?: string;
	seconds?: string;

	lunarYear?: number;              //农历年
	lunarMonth?: number;             //农历月
	lunarDay?: number;               //农历日

	lunarYearCn?: string;              //农历天干地支纪年
	lunarMonthCn?: string;             //农历中文月
	lunarDayCn?: string;               //农历中文日
	zodiacYear?: string;               //农历生肖年

	solarTerm?: string;                //节气
	gregorianFestival?: string;        //公历节日
	lunarFestival?: string;             //农历节日

	leapMonth?: number; // 闰几月
	getLeapMonth?: (year: number) => number; // 获取指定年份是否为闰年

	leapYear?: string;
	isLeapYear?: (date: number) => boolean; // 是否为闰年
}