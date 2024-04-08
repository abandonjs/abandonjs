/* eslint-disable*/
import * as _ from '..'
import * as h from '../..'
const getDate = () => new Date(2024, 3, 15, 15, 10, 10)


// const cronExpression = '0 0 0 15 * *';
// const humanReadable = _.cronToChinese(cronExpression)
// const humanReadable = _.cronToText(cronExpression)

// console.log(humanReadable); // 输出：every 0 minutes past 0 on the 15th of *


const list = [
  {
    exp: `* * * * * ?`,
    desc: '每1秒',
    n1: '2024-04-15 15:10:11',
    p1: '2024-04-15 15:10:09',
  },
  {
    exp: `0/2 * * * * ?`,
    desc: '每2秒',
    p1: '2024-04-15 15:09:58',
    n1: '2024-04-15 15:10:02',
  },
  {
    exp: `0 0/2 * * * ?`,
    desc: '每2分钟',
    p1: '2024-04-15 14:58:00',
    n1: '2024-04-15 15:02:00',
  },
  { exp: `0 0 2 1 * ?`, desc: '在每月的1日的凌晨2点调整任务' },
  // { exp: `0 15 10 ? * MON-FRI`, desc: '周一到周五每天上午10:15执行作业' },
  {
    exp: `0 15 10 ? 6L 2002-2006`,
    desc: '2002-2006年的每个月的最后一个星期五上午10:15执行作',
  },
  { exp: `0 0 10,14,16 * * ?`, desc: '每天上午10点，下午2点，4点' },
  { exp: `0 0/30 9-17 * * ?`, desc: '朝九晚五工作时间内每半小时' },
  // { exp: `0 0 12 ? * WED`, desc: `每个星期三中午12点` },
  { exp: `0 0 12 * * ?`, desc: `每天12:00` },
  { exp: `0 15 10 ? * *`, desc: `每天上午10:15` },
  { exp: `0 15 10 * * ?`, desc: `每天上午10:15` },
  { exp: `0 15 10 * * ?`, desc: `每天上午10:15` },
  { exp: `0 15 10 * * ? 2005`, desc: `2005年的每天上午10:15` },
  { exp: `0 * 14 * * ?`, desc: `在每天下午2点到下午2:59期间的每1分钟` },
  { exp: `0 0/5 14 * * ?`, desc: `在每天下午2点到下午2:55期间的每5分钟` },
  {
    exp: `0 0/5 14,18 * * ?`,
    desc: `在每天下午2点到2:55期间和下午6点到6:55期间的每5分钟`,
  },
  { exp: `0 0-5 14 * * ?`, desc: `在每天下午2点到下午2:05期间的每1分钟` },
  // { exp: `0 10,44 14 ? 3 WED`, desc: `每年三月的星期三的下午2:10和2:44` },
  // { exp: `0 15 10 ? * MON-FRI`, desc: `周一至周五的上午10:15` },
  { exp: `0 15 10 15 * ?`, desc: `每月15日上午10:15` },
  { exp: `0 15 10 L * ?`, desc: `每月最后一日的上午10:15` },
  { exp: `0 15 10 ? * 6L`, desc: `每月的最后一个星期五上午10:15` },
  // {
  //   exp: `0 15 10 ? * 6L 2002-2005`,
  //   desc: `2002年至2005年的每月的最后一个星期五上午10:15`,
  // },
  // { exp: `0 15 10 ? * 6#3`, desc: `每月的第三个星期五上午10:15` },
]
for (let i = 0; i < list.length; i++) {
  /* eslint-disable*/
  const j = list[i]
  const cron = j.exp

  // const cron1 = _.cron(cron, getDate())
  // const n1 = h.format(cron1.next(), 'YYYY-MM-DD HH:mm:ss')
  // const p1 = h.format(cron1.pre(), 'YYYY-MM-DD HH:mm:ss')

  // if (n1 == item.n1 && p1 === item.p1) continue
  // console.log()
  // console.log(i + 1, item.desc, item.exp)
  // console.log("p1:'" + p1 + "',")
  // console.log("n1:'" + n1 + "'")
  // console.log()
  // break
}