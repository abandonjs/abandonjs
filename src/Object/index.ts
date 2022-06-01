export interface iObject {
	[key: string]: any;
}
export type iObjectKey = string;

export function isObject(val: any): boolean {
	return Object.prototype.toString.call(val) === '[object Object]';
}

export function objectInclude(obj: iObject, keys: iObjectKey[] | iObjectKey): boolean | boolean[] {
	const result: boolean[] = [];
	const objKeys: string[] = Object.keys(obj);
	if (!Array.isArray(keys)) keys = [keys];
	keys.forEach((item: iObjectKey): void => {
		if (objKeys.includes(item)) {
			result.push(true)
		} else {
			result.push(false)
		}

	})
	if (result.length === 0) return false;
	if (result.length === 1) return result[0]
	return result;
}

/**
 * @title assign
 * @description 合并对象
 * @param 来源对象
 * @returns 合并后的对象
 */
export function assign(): any {
	let result: any = {};
	for (const key in arguments) {
		result = Object.assign(result, { ...arguments[key] })
	}
	return result;
}

/**
 * @title assignIn
 * @description 合并对象(没有实现)
 * @param 来源对象
 * @returns 合并后的对象
 */
export function assignIn(): any {
	let result: any = {};
	for (const key in arguments) {
		result = Object.assign(result, { ...arguments[key] })
	}
	return result;
}