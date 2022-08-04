export * from './existKeys';
/**
 * @title isObject
 * @description 判断是否为Oject
 * @param value
 * @returns boolean
 */
export declare function isObject(value: any): boolean;
/**
 * @title serialize
 * @description 序列化对象
 * @param query object
 * @param encode boolean = false
 * @returns string
 */
export declare function serialize<T extends object = Record<string, string | number>>(query: T, encode?: boolean): string;
//# sourceMappingURL=index.d.ts.map