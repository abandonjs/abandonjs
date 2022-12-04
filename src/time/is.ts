import { isNumber } from '../number'
import { isString } from '../string'
import { type } from '../util/type'
import { Time } from './type'

/**
 * @title isDate
 * @description 检查日期是否有效
 * @param date {any} 待判断日期
 * @returns {boolean}
 * @version 2.2.3
 */
export function isDate(date: unknown): date is Date {
	return type(date) === 'Date'
}

/**
 * @title likeDate
 * @description 检查日期是否有效, 时间戳也为有效时间(13位/10位)
 * @param date {any}
 * @returns {boolean}
 */
export function likeDate(date: unknown): date is Date {
	if (isDate(date)) return true

	if (
		(isString(date) && isNumber(Number(date)))
		|| isNumber(date)
	) {
		if (date.toString().length === 13) return true
		if (date.toString().length === 10) return true
	}
	return false
}

/**
 * @title isTime
 * @description 检查日期是否有效, 时间戳也为有效时间(13位/10位)
 * @param time:any 待判断日期
 * @returns boolean
 * @version 2.2.3
 */
export function isTime(time: any): boolean {
	if (type(time) === 'Number') {
		if (time.toString().length === 13) return true
		if (time.toString().length === 10) return true
	}
	return time instanceof Date && !isNaN(time.getTime());
}

/**
 * @title isSameDate
 * @description 时间是否相同, 时间类型支持isDate的类型
 * @param timeA 比较时间
 * @param timeB 被比较时间
 * @returns {boolean}
 * @version 2.2.3
 */
export function isSameDate(timeA: Time, timeB: Time): boolean {

	if (!isTime(timeA) || !isTime(timeB)) return false
	if (timeA.toString() === timeB.toString()) return true
	if (new Date(timeA).getTime() === new Date(timeB).getTime()) return true

	return false
}