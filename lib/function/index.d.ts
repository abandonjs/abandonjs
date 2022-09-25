import { AnyFunction, AnyObject } from '../type';
export * from './loop';
/**
 * @title toPromise<T>
 * @description 将方法或值转换为Promise对象, 若传输values切target为function, 就会返回执行结果
 * @param target any
 * @param ...values ?any[]
 * @returns Promise<T>
 */
export declare function toPromise<T>(target: any, ...values: any[]): Promise<T>;
/**
 * @title isArray
 * @description 是否为数组
 * @param value any
 * @returns boolean
 */
export declare function isFunction(value: any): boolean;
/**
 * @title once
 * @description  fn 方法只会执行一次
 * @param fn 指定值运行一次的方法
 * @returns 返回封装后的方法
 */
export declare function once(fn: AnyFunction): any;
/**
 * @title throttle
 * @description 节流: 用于限制函数触发频率, 每个delay时间间隔，最多只能执行函数一次
 * @param fn function 待处理函数
 * @param interval number 间隔
 * @returns func
 */
export declare function throttle(fn: AnyFunction, interval: number): any;
/**
 * @title debounce
 * @description
 * -- 防抖:  时间内只会执行一次 可以减少函数触发的频率
 * -- 当函数触发时，使用一个定时器延迟执行操作。
 * -- 当函数被再次触发时，清除已设置的定时器，重新设置定时器。
 * -- 如果上一次的延迟操作还未执行，则会被清除。
 * @param fn function
 * @param interval number
 * @returns
 */
export declare function debounce(fn: AnyFunction, interval: number): any;
/**
 * @title after
 * @description 调用n次后才触发func
 * @param n 调用后多少次才执行
 * @param func 限定的函数
 * @returns 新的限定函数
 */
export declare function after(n: number | undefined, func: AnyFunction): AnyFunction;
/**
 * @title ary
 * @description 调用func最多接受n个参数
 * @param func 限定函数
 * @param n 限制参数数量
 * @returns 新的覆盖函数
 */
export declare function ary(func: AnyFunction, n: number): AnyFunction;
/**
 * @title before
 * @description 调用n次后，再调用就会返回最后一次调用的结果
 * @param n 超过n次不再调用
 * @param func 限定函数
 * @returns 新的限定函数
 */
export declare function before(n: number, func: AnyFunction): AnyFunction;
/**
 * @title bind
 * @description thisArg绑定func的this，并且func会接收partials附加参数
 * @param func 绑定的函数
 * @param thisArg 绑定的对象
 * @param partials 附加的部分参数
 * @returns 新的绑定函数
 */
export declare function bind<T>(func: AnyFunction, thisArg?: AnyObject, ...partials: any[]): AnyFunction;
/**
 * @title curry
 * @description 柯里化
 * @param func 待柯里化函数
 * @param len 待柯里化参数个数
 * @returns 柯里化函数
 */
export declare function curry(func: AnyFunction, len: number): AnyFunction;
/**
 * @title delay
 * @param func 指定函数
 * @param delayTime 延迟时间
 * @param args 传输参数
 * @returns func执行结果(Promise)
 */
export declare function delay(func: AnyFunction, delayTime?: number, ...args: any[]): any;
/**
 * @title flip
 * @param func 要翻转参数的函数
 * @param args 反转参数
 * @returns
 */
export declare function flip(func: AnyFunction): AnyFunction;
//# sourceMappingURL=index.d.ts.map