export declare type FilterConditions<T = unknown> = Record<string, any> | ((value: T, index: number, array: T[]) => boolean);
/**
 * @title filter<T extends object>
 * @description 单层过滤
 * @param list {T[]} 待过滤数组
 * @param filterConditions {Record<string,number|string|RegExp>} 过滤条件
 * @param retainNotObject {boolean=false} 是否保留非对象项
 * @returns {T[]}
 */
export declare function filter<T extends Record<string, any>>(list: T[], filterConditions?: FilterConditions<T>, retainNotObject?: boolean): T[];
//# sourceMappingURL=filter.d.ts.map