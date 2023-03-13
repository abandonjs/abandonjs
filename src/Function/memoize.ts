import { AnyFunction } from "../type"

/**
 * @title memoize
 * @description 缓存方法结果, 若参数相同, 会返回相同结果
 * @param handler {Function}
 * @returns {new Function}
 */
export function memoize(handler: AnyFunction) {
	const cache = new Map();
	return function (...args: unknown[]) {
		const key = JSON.stringify(args);
		if (cache.has(key)) {
			return cache.get(key);
		}
		const result = handler.apply(this, ...args);
		cache.set(key, result);
		return result;
	};
}