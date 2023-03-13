import type { ProxyObjectProp } from './type'
import { ObjectType } from '../type'
import { isEffectArray, isEffectObject, isEmpty, isNoEmpty, isObject, type } from 'check-it-type'

/**
 * @title ProxyObject<T extends object>
 * @description 代理object的属性, 结合 Proxy 和 Object 用法
 * @param object {T} 代理的object
 * @param props {?ProxyObjectProp[]} object 属性配置
 * @param handler {?ProxyHandler<T>}
 * @returns {Proxy<T>}
 */
export function ProxyObject<T extends ObjectType>(object: T, props?: ProxyObjectProp[], handler: ProxyHandler<T> = {}) {
	if (isEffectArray(props) && isObject(object)) {
		const propsConfig: PropertyDescriptorMap = {}
		const supplyConfigs: Record<keyof T, any> = {} as Record<keyof T, any>
		for (let i = 0; i < props.length; i++) {
			const prop = props[i]
			const propName: keyof T = prop.name
			const supplyConfig: ObjectType<any> = prop

			if (isEmpty(propName)) continue;
			let defaultValue = prop.default || undefined
			const types: string[] = new Array(0).concat(prop.type).map((item: string) => item && item.toUpperCase()).filter(Boolean)

			if (isEffectArray(types) && !types.includes(type(prop.default || undefined).toUpperCase())) {
				defaultValue = undefined
			}

			supplyConfig.assignCount = 0
			supplyConfig.default = defaultValue
			supplyConfig.types = types

			if (prop.initProp) object[propName] = defaultValue
			if (isNoEmpty(prop.default) && isEmpty(object[propName])) object[propName] = defaultValue

			const propConfig: PropertyDescriptor = {}
			if (isNoEmpty(prop.configurable)) propConfig.configurable = prop.configurable
			if (isNoEmpty(prop.enumerable)) propConfig.enumerable = prop.enumerable
			if (isNoEmpty(prop.writable)) propConfig.writable = prop.writable

			if (isEffectObject(propConfig)) propsConfig[propName] = propConfig

			supplyConfigs[propName] = supplyConfig
		}

		Object.defineProperties(object, propsConfig)
		const { set, ...rest } = handler
		return new Proxy<T>(object, {
			set(target: any, prop: string | symbol, newValue: any, receiver: any): boolean {
				const supplyConfig: ObjectType<any> = supplyConfigs[prop as string]
				const newValueType = type(newValue).toUpperCase()
				if (set) return set(target, prop, newValue, receiver);
				if (
					(isEffectArray(supplyConfig.types) && !supplyConfig.types.includes(newValueType))
					|| (supplyConfig.required === true && isEmpty(newValue))
					|| (supplyConfig.once && supplyConfig.assignCount++ > 0)
				) {
					return Reflect.set(target, prop, target[prop], receiver)
				}
				return Reflect.set(target, prop, newValue, receiver)
			},
			...rest
		})
	}
	return object
}