import { Itteratee } from '../type';
export * from './oddAndEven';
export * from './average';
/**
 * @title HEX
 * @description 将数字装换成需要装换的数据格式(k, m, g, t, p, e, z, y, b)
 * @param num (number|string) 待转换的数子 (<binary^ 9)
 * @param binary (number) 进制 (default:1024)
 * @returns (number)
 */
export declare function toHEX(num: number | string, binary?: number): string;
/**
 * @title add
 * @description 两数求和
 * @param augend number 加数
 * @param addend number 被加数
 * @returns number ( 不会超过数字的边界值 1.7976931348623157e+308 )
 */
export declare function add(augend: number, addend: number): number;
/**
 * @title ceil
 * @description 向上取整的值(没有对number边界值[Infinity值处理])
 * @param num 要向上舍入的值
 * @param precision number = 0 精度(负数就是想整数部分取整)
 * @returns number
 */
export declare function ceil(num: number, precision?: number): number;
/**
 * @title divide
 * @description 相除
 * @param dividend number 除数
 * @param divisor number 被除数
 * @returns number 商
 */
export declare function divide(dividend: number, divisor: number): number;
/**
 * @title floor
 * @description 向下取整(没有对number边界值[Infinity值处理])
 * @param num 待向下舍入的值
 * @param precision 精度 (负数就是处理整数部分)
 * @returns 向下取整
 */
export declare function floor(num: number, precision?: number): number;
/**
 * @title max
 * @description 求最大值(只会判断有效值), 只会统计number | string类型的数值
 * @param list 数组
 * @returns 最大值
 */
export declare function max(list: any[]): number | undefined;
/**
 * @title maxBy
 * @description 求最大值
 * @param list 要迭代数组
 * @param itteratee 迭代函数 / key
 * @returns 最大值
 */
export declare function maxBy(list: any[], itteratee?: Itteratee): number | undefined | {
    [key: string]: any;
};
/**
 * @title mean
 * @description 求平均值
 * @param list 要迭代的数组
 * @returns 平均值
 */
export declare function mean(list: any[]): number | undefined;
/**
 * @title meanBy
 * @description 求平均数
 * @param list 要迭代的数组
 * @param itteratee 迭代函数 / key
 * @returns 平均数
 */
export declare function meanBy(list: any[], itteratee?: Itteratee): any;
/**
 * @title min
 * @description 求最小值
 * @param list 要迭代的数组
 * @returns 最小值
 */
export declare function min(list: any[]): number | undefined;
/**
 * @title minBy
 * @description 求最小值
 * @param list 要迭代的数组
 * @param itteratee 迭代函数 / key
 * @returns 最小值
 */
export declare function minBy(list: any[], itteratee?: Itteratee): any;
/**
 * @title sum
 * @description 求和
 * @param list 要迭代的数组
 * @returns 总和
 * @version 2.2.3
 */
export declare function sum(list?: any[]): number;
/**
 * @title sumBy
 * @description 求和
 * @param list 要迭代的数组
 * @param itteratee 迭代函数 / key
 * @returns 总和
 */
export declare function sumBy(list: any[], itteratee?: Itteratee): undefined | number;
/**
 * @title multiply
 * @description 相乘
 * @param augend number 乘数
 * @param addend number 被乘数
 * @returns 积
 */
export declare function multiply(augend: number, addend: number): number;
//# sourceMappingURL=index.d.ts.map