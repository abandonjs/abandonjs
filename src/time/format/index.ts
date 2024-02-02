import { padNumber } from '../../number'
import { type, isNaN } from 'asura-eye'
import { Time } from '../type'

const getOffsetToTimezone = (date: Date, format = 'Z') => {
  const offsetMinutes = date.getTimezoneOffset()
  const offsetHours = offsetMinutes / 60
  const sign = offsetHours > 0 ? '-' : '+'
  const absOffsetHours = Math.abs(offsetHours)
  const hours = Math.floor(absOffsetHours)
  const minutes = Math.floor((absOffsetHours - hours) * 60)
  if (format === 'ZZ') return sign + padNumber(hours, 2) + padNumber(minutes, 2)
  return sign + padNumber(hours, 2) + ':' + padNumber(minutes, 2)
}

/**
 * @title format
 * @description 时间格式化
 * @param {number|string|Date} [time=new Date()]  时间
 * @param {string} [pattern='YYYY-MM-DD'] 格式 
 * @returns {string} 格式化后的数据 
 * @eg
| 符号 | 结果| 描述 |
|:----|:----|:----|
| YYYY	| 2022	| 4位数字的年份 |
| YY	|  1-14	| 2 位数字的年份 |
| M  MM |	1-12 |	月份数字 |
| D  DD |	1-31 |	日数(忽略大小写) |
| d |	0-6 |	一周的第几天， 0：星期天 |
| H  HH	| 0-23 |  24 小时制 |
| h  hh	| 1-12 |	12 小时制 |
| m  mm | 0-59 |	分钟|
| s  ss	| 0-59 |	秒钟|
| S |	0-9 |	毫秒，一位数
| SS |	00-99 |	毫秒，两位数
| SSS |	000-999 |	毫秒，三位数
| A | AM PM	|
| a | am pm |
| Z |	+05:00 |	UTC 的偏移量，±HH:mm
| ZZ |+0500	| UTC 的偏移量，±HHmm
 */
export function format(
  time: Time = new Date(),
  pattern = 'YYYY-MM-DD',
): string {
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
  const week: number = date.getDay()
  const hour: number = date.getHours()
  const minutes: number = date.getMinutes()
  const seconds: number = date.getSeconds()
  const milliseconds = date.getMilliseconds()
  const reg =
    /Y{4}|\[Y{4}\]|YY|\[YY\]|[DMHhmsZ]{1,2}|\[[DMHhmsZ]{1,2}\]|SSS|\[SSS\]|[AaXxd]|\[[AaXxd]\]|./gi
  const patterns: string[] = pattern.match(reg) || []
  const result = patterns
    .map((item) => {
      if (!item.match(reg)) return item
      if (item.match(/^\[.*?\]$/)) return item.replace(/\[|\]/gi, '')

      if (item === 'YYYY') return padNumber(year, 4)
      if (item === 'YY') return padNumber(year % 100, 2)

      if (item === 'MM') return padNumber(month, 2)
      if (item === 'M') return month

      if (item === 'DD') return padNumber(day, 2)
      if (item === 'D') return day
      if (item === 'D') return week

      if (item === 'HH') return padNumber(hour, 2)
      if (item === 'H') return hour

      if (item === 'hh') return padNumber(hour % 12, 2)
      if (item === 'h') return hour % 12

      if (item === 'mm') return padNumber(minutes, 2)
      if (item === 'm') return minutes

      if (item === 'A') return hour >= 12 ? 'PM' : 'AM'
      if (item === 'a') return hour >= 12 ? 'pm' : 'am'

      if (item === 'ss') return padNumber(seconds, 2)
      if (item === 's') return seconds

      if (item === 'SSS') return padNumber(milliseconds, 3)
      if (item === 'SS') return padNumber(Math.floor(milliseconds / 10), 2)
      if (item === 'S') return padNumber(Math.floor(milliseconds / 100), 1)

      if (item === 'ZZ') return getOffsetToTimezone(date, 'ZZ')
      if (item === 'Z') return getOffsetToTimezone(date)

      return item
    })
    .join('')
  return result
}
