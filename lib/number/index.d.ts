/**
 * @title spLength
 * @description 指定长度
 * @param value any
 * @param min = 0
 * @param max number
 * @returns string
 */
export declare function spLength(value: number | string, min: number | undefined, max: number): string;
/**
 * @title isNumber
 * @description 是否为数字
 * @param value any
 * @returns boolean
 */
export declare function isNumber(value: any): boolean;
/**
 * @title isEffectNumber
 * @description 是否为js的有效区间的数, 非number类型都为false
 * @param num any
 * @returns boolean
 */
export declare function isEffectNumber(num: any): boolean;
/**
 * @title toNumber
 * @description 将值转换为Number, 不可以正确装换的值, 均返回0
 * @param value any 待转换的数值
 * @returns number
 */
export declare function toNumber(value: any): number;
/**
 * @title isFloat
 * @description 判断数是否为浮点型
 * @param num 待检测的数据类型
 * @returns boolean
 */
export declare function isFloat(num: number): boolean;
/**
 * @title clamp
 * @description 限制在lower和upper之间
 * @param num 待限制的值
 * @param lower 下限
 * @param upper 上限
 * @returns 返回被限制的值
 */
export declare function clamp(num: number, lower?: number, upper?: number): number;
/**
 * @title random
 * @description 随机数
 * @param lower 下限
 * @param upper 上限
 * @param floating 是否返回浮点数
 */
export declare function random(lower?: number, upper?: number, floating?: boolean): number;
/**
 * @title inRange
 * @description 判断是否在该范围
 * @param num 要检查的值
 * @param start=0 开始范围
 * @param end 结束范围(包含该值)
 * @returns boolean
 */
export declare function inRange(num: number, start?: number, end?: number): boolean;
/**
 * @title between
 * @description 判断值是否在两值之间
 * @param num number 待判断值
 * @param start=0 起始值
 * @param end number 结束值(不包含该值)
 * @returns boolean
 */
export declare function between(num: number, start?: number, end?: number): boolean;
/**
  * @title round
  * @description数字四舍五入，保留n位小数
  * @param number number 待处理数值
  * @param n number = 0 四舍五入的位数
  * @returns
*/
export declare function round(number: number, n?: number): number;
/**
 * @title toThousands
 * @description 数字每千位加逗号
 * @param num string|number
 * @returns string
 */
export declare function toThousands(num: string | number): string;
//# sourceMappingURL=index.d.ts.map