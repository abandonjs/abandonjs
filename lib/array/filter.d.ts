/**
 * @title filter<T extends object>
 * @description 单层过滤
 * @param list T[] 待过滤数组
 * @param filterConditions { [key:string]: number| string | RegExp } 过滤条件
 * @param retainNotObject 是否保留非对象项
 * @returns T[]
 */
export declare function filter<T extends {
    [key: string]: any;
}>(list: T[], filterConditions: {
    [key: string]: any;
}, retainNotObject?: boolean): T[];
//# sourceMappingURL=filter.d.ts.map