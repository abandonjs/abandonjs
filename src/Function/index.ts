
import { type } from '../Util'

/* interface & type start */
type tAnyFunction = (...arg: any[]) => any;
type tAnyObject = {
	[key: string]: any,
}
/* interface & type end */


// fn 方法只会执行一次
export function once(fn: any): any {
	let returnValue: any;
	let canRun: boolean = true;

	return function (): any {
		if (canRun) {
			returnValue = fn.apply(this, arguments);
			canRun = false;
		}
		return returnValue;
	};
}

// 节流: 用于限制函数触发频率, 每个delay时间间隔，最多只能执行函数一次
export function throttle(fn: any, interval: number): any {
	let lastTime: number = 0;
	return function throttled(): void {
		const timeSinceLastExecution: number = Date.now() - lastTime;
		if (!lastTime || timeSinceLastExecution >= interval) {
			fn.apply(this, arguments);
			lastTime = Date.now();
		}
	};
}

//  防抖:  时间内只会执行一次 可以减少函数触发的频率
/**
 * 当函数触发时，使用一个定时器延迟执行操作。
 * 当函数被再次触发时，清除已设置的定时器，重新设置定时器。
 * 如果上一次的延迟操作还未执行，则会被清除。 
 * */
export function debounce(fn: any, interval: number): any {
	let timer: number = 0;
	const debounced: () => void = (): void => {
		clearTimeout(timer);
		const args: any = arguments;
		setTimeout((): void => {
			fn.apply(this, args);
		}, interval);
	};
	return debounced;
}

/**
 * @description 调用n次后才触发func
 * @param n 调用后多少次才执行
 * @param func 限定的函数
 * @returns 新的限定函数
 */
export function after(n: number = 0, func: tAnyFunction): tAnyFunction {
	return function (...args: any[]): any {
		if (--n < 0) return func(args);
		return;
	}
}


/**
 * @description 调用func最多接受n个参数
 * @param func 限定函数
 * @param n 限制参数数量
 * @returns 新的覆盖函数
 */
export function ary(func: tAnyFunction, n: number): tAnyFunction {
	return function (...args: any[]): any {
		return func(...args.splice(0, n))
	}
}


/**
 * @description 调用n次后，再调用就会返回最后一次调用的结果
 * @param n 超过n次不再调用
 * @param func 限定函数
 * @returns 新的限定函数
 */
export function before(n: number, func: tAnyFunction): tAnyFunction {
	let lastResult: any = undefined;
	return function (...args: any[]): any {
		if (n-- > 0) {
			lastResult = func(...args);
		}
		return lastResult
	}
}



/**
 * @description thisArg绑定func的this，并且func会接收partials附加参数
 * @param func 绑定的函数
 * @param thisArg 绑定的对象
 * @param partials 附加的部分参数
 * @returns 新的绑定函数
 */
export function bind(func: tAnyFunction, thisArg: tAnyObject = {}, ...partials: any[]): tAnyFunction {
	return function (...args: any[]): any {
		return func.call(thisArg, ...[...partials, ...args])
	}
}

/**
 * (未完成，有问题)
 * @param object 对象
 * @param key 
 * @param partials 
 * @returns 
 */
export function bindkey(object: tAnyObject, key: string, ...partials: any[]): any {
	if (type(object[key]) === 'function') {
		return function (...args: any[]): any {
			return object[key](...partials, ...args);
		}
	}
	return object[key]
}

/**
 * 
 * @param func 待柯里化函数
 * @param len 待柯里化参数个数
 * @returns 柯里化函数
 */
export function curry(func: tAnyFunction, len: number): tAnyFunction {

	// 第一次执行时，定义一个数组专门用来存储所有的参数
	let _args: any[] = [];
	const _resFn: any = function (...args: any[]): any {
		_args = _args.concat(args);
		if (_args.length < len) {
			return _resFn;
		}
		return func(..._args);
	};
	return _resFn;
}

/**
 * @param func 指定函数
 * @param delayTime 延迟时间
 * @param args 传输参数
 * @returns func执行结果(Promise)
 */
export function delay(func: tAnyFunction, delayTime: number = 0, ...args: any[]): any {
	return new Promise(
		(resolve: any, reject: any): void => {
			setTimeout(() => {
				resolve(func(...args))
			}, delayTime);
		}
	)
}

/**
 * @title flip
 * @t
 * @description 
 * @param func 要翻转参数的函数
 * @param args 反转参数
 * @returns 
 */
export function flip(func: tAnyFunction): tAnyFunction {
	return function (...args: any[]): any {
		return func(...args.reverse());
	}
}


/**
 * @title memoize
 * @description 待制作
 * @param func 
 * @param len 
 * @returns 
 */
export function memoize(func: tAnyFunction, len: number): tAnyFunction {
	return function (...args: any[]): any {

	}
}


export function negate(): any {
	return
}
