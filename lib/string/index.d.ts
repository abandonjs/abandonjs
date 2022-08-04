/**
 * @title hide
 * @description 隐藏指定位置的字符
 * @param target 待替换子串
 * @param start = 0  开始位置
 * @param end = target.length
 * @returns string
 */
export declare function hide(target: string, start?: number, end?: number): string;
/**
 * @title replaces
 * @description 同时定义多个replace的规则使用
 * @param target string
 * @param regs { reg: RegExp | string, value: string }[]
 * @returns string
 */
export declare function replaces(target?: string, regs?: {
    reg: RegExp | string;
    value: string;
}[]): string;
/**
 * @title isString
 * @description 是否为字符串
 * @param val any
 * @returns boolean
 */
export declare function isString(val: any): boolean;
/**
 * @title reverseString
 * @description 反转字符串
 * @param target string
 * @return string
 */
export declare function reverseString(target: string): string;
/**
 * @title isJsonString<T>
 * @description 判断是否为json字符串, 若是并返回处理后的对象
 * @param val 待判断字符串
 * @returns T | false
 */
export declare function isJsonString<T>(val: any): T | false;
/**
 * @title toString
 * @description 转换为字符串
 * @param value any
 * @returns string
 */
export declare function toString(value: any): string;
/**
 * @title toStrings
 * @description 转换为字符串数组
 * @param value any[]
 * @returns string[]
 */
export declare function toStrings(values: any[]): string[];
//# sourceMappingURL=index.d.ts.map