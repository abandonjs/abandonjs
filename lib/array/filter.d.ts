export declare type FilterCondition<T = unknown> = ((value: T, index: number, array: T[]) => boolean) | Record<string, number | string | RegExp | any>;
/**
 * @title filter<T extends object>
 * @description 单层过滤
 * @param list {T[]} 待过滤数组
 * @param filterCondition {FilterCondition<T>} 过滤条件
 * @param retainNotObject {boolean=false} 是否保留非对象项
 * @returns {T[]}
 * @version 2.3.1
 */
export declare function filter<T extends Record<string, any>>(list: T[], filterCondition?: FilterCondition<T>, retainNotObject?: boolean): T[];
//# sourceMappingURL=filter.d.ts.map