

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

// count 次的调用后, 才执行fn
export function after(count: number, fn: any): any {
	let runCount: number = 0;
	return function runAfter(): any {
		runCount = runCount + 1;
		if (runCount >= count) {
			return fn.apply(this, arguments);
		}
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
	const debounced = (): void => {
		clearTimeout(timer);
		const args: any = arguments;
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, interval);
	};
	return debounced;
}