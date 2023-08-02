/**
 * @title dayOfYear
 * @description 指定日期位于今年的第几天
 * @param date {Date}
 * @returns {number}
 */
export const dayOfYear = (date: Date = new Date()): number =>
	Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);