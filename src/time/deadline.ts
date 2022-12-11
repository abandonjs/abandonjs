import type { TimeKey } from './type'
/**
 * @title deadline
 * @description 倒计时
 * @param target {Date} 目标时间
 * @param timeKey {?'year' | 'mouth' | 'day' | 'hour' | 'minute' | 'second' | 'timeStamp'}  指定倒计时单位
 * @param now {?Date = new Date()} 起始时间
 * @returns {number} 
 */
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