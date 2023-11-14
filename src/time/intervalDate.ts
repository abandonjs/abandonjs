/**
 * @title intervalDate
 * @description 两个日期间隔天数
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {number}
 * @version 2.4.0
 */
export const intervalDate = (startDate: Date, endDate: Date) => Math.ceil(Math.abs(startDate.getTime() - endDate.getTime()) / 86400000)