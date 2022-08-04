import { Time } from './type';
/**
 * @title toDate
 * @description 字符串装换成Date对象
 * @param value string 可以转换成时间的字符串
 * @returns Date
 */
export declare function toDate(value: string): Date;
/**
 * @title deadline
 * @description 倒计时
 * @param target:Date 目标时间
 * @param timeKey?: 'year' | 'mouth' | 'day' | 'hour' | 'minute' | 'second' | 'timeStamp'  指定倒计时单位
 * @param now?:Date 起始时间
 * @returns number
 */
declare type TimeKey = 'year' | 'mouth' | 'day' | 'hour' | 'minute' | 'second' | 'timeStamp';
export declare function deadline(target: Date, timeKey?: TimeKey, now?: Date): number;
/**
 * @title isDate
 * @description 检查日期是否有效, 时间戳也为有效时间(13位)
 * @param date:any 待判断日期
 * @returns boolean
 */
export declare function isDate(date: any): boolean;
/**
 * @title format
 * @description 时间格式化
 * @param time:number|string|Date  时间
 * @param pattern?:string 格式
 * @returns string 格式化后的数据
 
| 符号 | 结果| 描述 |
| md-thl md-thl md-thl
| YYYY	| 2022	| 4位数字的年份, 忽略大小写 |
| YY	|  1-14	| 2 位数字的年份, 忽略大小写 |
| M  MM |	1-12 |	月份数字 |
| D  DD |	1-31 |	日数, 忽略大小写 |
| H  HH	| 0-23 |  24 小时制 |
| h  hh	| 1-12 |	12 小时制 |
| m  mm | 0-59 |	分钟|
| s  ss	| 0-59 |	秒钟|

 */
export declare function format(time?: Time, pattern?: string): string;
/**
 * @title isSameDate
 * @description 时间是否相同, 时间类型支持isDate的类型
 * @param timeA 比较时间
 * @param timeB 被比较时间
 * @returns boolean
 */
export declare function isSameDate(timeA: Time, timeB: Time): boolean;
export {};
//# sourceMappingURL=index.d.ts.map