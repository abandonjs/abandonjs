/* eslint-disable*/
const getMonth = (timestamp: number) => {
  const tDate = new Date(timestamp)
  const mouthTime =
    new Date(tDate.getFullYear(), tDate.getMonth() - 1, 0).getDate() * 86400_000
  return mouthTime
}
const s = 1000
const m = 6_0000
const h = 3600_000
const d = 86400_000

export function cron(expression: string, date: Date = new Date()) {
  const expressions = expression.split(' ')
  const [second, min, hour, day, month, week, year] = expressions

  const time = {
    year: date.getFullYear(),
    week: date.getDay(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    date,
    gap: 0,
  }

  let gap = 0

  if (day !== '*') {
    const [start = '0', iGap]: string[] = day.split('/')
    // 需要边界校验
    date.setDate(Number(start))
    iGap && (gap += Number(iGap) * d)

    time.day = Number(start)
  }

  if (hour !== '*') {
    const [start = '0', iGap]: string[] = hour.split('/')
    date.setHours(Number(start))
    iGap && (gap += Number(iGap) * h)

    time.hour = Number(start)
  }

  if (min !== '*') {
    const [start = '0', iGap]: string[] = min.split('/')
    date.setMinutes(Number(start) * m)
    iGap && (gap += Number(iGap) * m)

    time.minute = Number(start)
  }

  if (second !== '*') {
    const [start = '0', iGap]: string[] = second.split('/')
    date.setSeconds(Number(start))
    iGap && (gap += Number(iGap) * s)

    time.second = Number(start)
  }

  if (gap === 0) {
    gap = 1000
  }
  const getDate = () => {
    return new Date(
      time.year,
      time.month,
      time.day,
      time.hour,
      time.minute,
      time.second,
    )
  }
  const newDate = getDate()
  const timestamp = newDate.getTime()

  return {
    next: (count: number = 1) => {
      return new Date(timestamp + gap * count)
    },
    pre: (count: number = 1) => {
      return new Date(timestamp - gap * count)
    },
  }
}

export function cronToText(cronExpression:string) {
  const cronParts = cronExpression.split(' ')
  const minute = cronParts[0]
  const hour = cronParts[1]
  const dayOfMonth = cronParts[2]
  const month = cronParts[3]
  const dayOfWeek = cronParts[4]

  let text = ''

  // 解析分钟
  if (minute === '0') {
    text += 'every minute'
  } else {
    text += `every ${minute} minutes`
  }

  // 解析小时
  if (hour !== '0') {
    text += ` past ${hour}`
  }

  // 解析日期
  if (dayOfMonth !== '*') {
    text += ` on the ${dayOfMonth}th`
  }

  // 解析月份
  if (month !== '*') {
    text += ` of ${month}`
  }

  // 解析星期几
  if (dayOfWeek !== '*') {
    text += ` on ${dayOfWeek}`
  }

  return text
}

export function cronToChinese(cronExpression: string) {
  const cronParts = cronExpression.split(' ')
  const minute = cronParts[0]
  const hour = cronParts[1]
  const dayOfMonth = cronParts[2]
  const month = cronParts[3]
  const dayOfWeek = cronParts[4]

  let text = ''

  // 解析分钟
  if (minute === '0') {
    text += '每分钟'
  } else {
    text += `每隔${minute}分钟`
  }

  // 解析小时
  if (hour !== '0') {
    text += `，从${hour}点开始`
  }

  // 解析日期
  if (dayOfMonth !== '*') {
    text += `，每月${dayOfMonth}号`
  }

  // 解析月份
  if (month !== '*') {
    text += `，在${month}月`
  }

  // 解析星期几
  if (dayOfWeek !== '*') {
    text += `，星期${dayOfWeek}`
  }

  return text
}