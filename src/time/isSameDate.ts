import { isTime, Time } from 'asura-eye'

/**
 * @title isSameDate
 * @description 时间是否相同, 时间类型支持isDate的类型
 * @param {Time} timeA 比较时间
 * @param {Time} timeB 被比较时间
 * @returns {boolean}
 * @version 2.4.0
 */
export function isSameDate(timeA: Time, timeB: Time): boolean {
	
	if (!isTime(timeA) || !isTime(timeB)) return false
	if (timeA.toString() === timeB.toString()) return true
	if (new Date(timeA).getTime() === new Date(timeB).getTime()) return true

	return false
}