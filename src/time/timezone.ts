import { toNumber } from "../number/to"
import { isString } from "asura-eye"

export type LikeNumber = number | `${number}`
/**
 * @title timezone
 * @description 指定时区时间偏移量, 转换为目标时间
 * @param {LikeNumber} originOffset 当前时间的时区(number:时间偏移量|string:时区)
 * @param {LikeNumber} targetOffset 目标时间的时区(number:时间偏移量|string:时区)
 * @returns {(data:Date)=>Date} 
 * @eg ```js
 const oDate = new Date('2022-12-11T07:58:07.945Z')
 const tDate = new Date('2022-12-11T15:58:07.945Z')
 timezone('1', 9 * 3600000)(oDate) ==> tDate
 ```
 */
export function timezone(originOffset: LikeNumber, targetOffset: LikeNumber) {

	const originOffsetNum = isString(originOffset) ? toNumber(originOffset) * 3600000 : originOffset

	const targetOffsetNum = isString(targetOffset) ? toNumber(targetOffset) * 3600000 : targetOffset

	const offset: number = targetOffsetNum - originOffsetNum
	
	return (date: Date) => new Date(date.getTime() + offset)
}

