import { type, types } from './type';
export { type, types };
export * from './matchValue';
export * from './deepClone';
export * from './error';
/**
 * @title changeCase
 * @description  字符转换
 * --- type: FirstUpper:首字母大写 FirstLower：首字母小写  Upper：全部大写 Lower：全部小写
 * @param str string
 * @param type number
 * @returns string
 */
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
export interface EventEmitter<T, U> {
    cache: {
        [key: string]: T[];
    };
    /**
     * @description 绑定事件
     * @param name 事件名称
     * @param fn 待触发事件
     */
    on(name: string, fn: T): void;
    /**
     * @param name 移除事件的名称
     */
    off(name: string): boolean;
    /**
     * @description 触发后就移除当前事件
     * @param name 待触发事件的名称
     * @param args 触发事件的参数
     */
    once<Params extends any[] = any[]>(name: string, ...args: Params): U[];
    /**
     * @param name 待触发事件的名称
     * @param args 触发事件的参数
     */
    emit<Params extends any[] = any[]>(name: string, ...args: Params): U[];
}
/**
 * @title EventEmitter<T, U>
 * @description 简易观察者模式
 */
export declare class EventEmitter<T, U> {
    cache: {
        [key: string]: T[];
    };
}
