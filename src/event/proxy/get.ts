import { ObjectType } from "../../type"

export function proxyGet<T>(target: ObjectType = {}, prop: string): T | undefined {
	if (prop in target) {
		return Reflect.get(target, prop) as T
	} else {
		return undefined;
	}
}