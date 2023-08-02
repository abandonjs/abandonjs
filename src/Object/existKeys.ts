import { ObjectType } from "../type"
import { toArray } from "../array/toArray"

/**
 * @title existKeys
 * @description 判断对象是否拥有指定keys
 * @param obj object
 * @param keys string[] | string
 * @returns boolean
 */
export function existKeys(obj: ObjectType, keys: string[] | string): boolean {
	const objKeys: string[] = Object.keys(obj);
	keys = toArray<string>(keys)

	for (let i = 0; i < keys.length; i++) {
		if (objKeys.includes(keys[i])) return true
	}
	return false
}