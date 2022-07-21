/**
 * @title selects<T>
 * @description 指定范围 来随机选择数组元素
 * @param list: T[]
 * @param min: number
 * @param max: number (包括)
 * @returns T[]
 */
export declare function selects<T>(list: T[], min: number, max: number): T[];
/**
 * @title select<T>
 * @description 选择数组其中一项, 不指定就随机选一
 * @param list T[] 待选择数组
 * @param index ?number 指定选择索引(可为负数)
 * @returns T|null 选择项
 */
export declare function select<T>(list?: T[], index?: number): T | null;
