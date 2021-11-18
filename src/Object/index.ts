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