import { type, types } from './type';
export { type, types };
export * from './matchValue';
export * from './deepClone';
export * from './error';
export * from './ban';
/**
 * 首字母大写
 */
declare type CaseTypeFirstUpper = 'FirstUpper';
/**
 * 首字母小写
 */
declare type CaseTypeFirstLower = 'FirstLower';
/**
 * 全部大写
 */
declare type CaseTypeUpper = 'Upper';
/**
 * 全部小写
 */
declare type CaseTypeLower = 'Lower';
export declare type CaseType = CaseTypeFirstUpper | CaseTypeFirstLower | CaseTypeLower | CaseTypeUpper;
/**
 * @title changeCase
 * @description  字符转换
 * --- type: FirstUpper:首字母大写 FirstLower：首字母小写  Upper：全部大写 Lower：全部小写
 * @param str string
 * @param type number
 * @returns string
 */
export declare function changeCase(str: string, type?: CaseType): string;
/**
 * @title logGroup
 * @description 分组打印(简化console.groupCollapsed)
 * @param name 分组名称
 * @param ...args 需要分组打印的结果
 * @example logGroup(name[, ...args])
 */
export declare function logGroup(name?: string, ...args: any[]): void;
/**
 * @title isEmpty
 * @description 判断是否为无效值 undefined , null, NaN
 * @param value any 待判断值
 * @returns boolean
 */
export declare function isEmpty(value: any): boolean;
/**
 * @title runFunc
 * @description 运行函数, 支持普通函数和async函数, 否则返回func
 * @param func
 * @param ...args
 * @returns
 */
export declare function runFunc(func: any, ...args: any[]): any;
//# sourceMappingURL=index.d.ts.map