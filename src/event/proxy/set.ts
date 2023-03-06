import { isEffectArray, isEmpty, isNoEmpty, type as TYPE } from "check-it-type"
import { ObjectType } from "../../type"
import { ProxyFactory } from "./factory"
import type { ProxyFactoryProp } from './type'

export function proxySet<T extends ObjectType>(target: T, prop: string | symbol, newValue: any, receiver: any): boolean {
	const { props }: ProxyFactory = this
	if (isEffectArray(props)) {
		for (let i = 0; i < props.length; i++) {
			const { name, type, canEmpty }: ProxyFactoryProp = props[i]
			if (name !== prop) continue;
			if (isEmpty(newValue) && canEmpty === false) continue;
			if (isNoEmpty(type)) {
				if (
					new Array(0).concat(type).includes(TYPE(newValue))
					|| new Array(0).concat(type).includes(TYPE(newValue).toLowerCase())
				) {
					return Reflect.set(target, prop, newValue, receiver)
				}
				return false
			}
		}
	}
	return Reflect.set(target, prop, newValue, receiver)
}