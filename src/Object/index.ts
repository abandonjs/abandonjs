export interface iObject {
	[key: string]: any;
}
export type iObjectKey = String;
export function objectIncluede(obj: iObject, keys: iObjectKey[] | iObjectKey): boolean | boolean[] {
	const result: string[] = [];
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