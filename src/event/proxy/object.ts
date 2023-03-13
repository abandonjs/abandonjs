import type { ProxyObjectProp } from './type'
import { ObjectType } from '../../type'
import { isEffectArray, isEffectObject, isEmpty, isNoEmpty, isObject, type } from 'check-it-type'

export function ProxyObject(object: ObjectType<any>, props?: ProxyObjectProp[]) {
	if (isEffectArray(props) && isObject(object)) {
		const propsConfig: PropertyDescriptorMap = {}
		const supplyConfigs: ObjectType<any> = {}

		for (let i = 0; i < props.length; i++) {
			const prop = props[i]
			const propName = prop.name
			const supplyConfig: ObjectType<any> = prop

			// supplyConfigs[propName] = prop

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
		return new Proxy<ObjectType<any>>(object, {
			get(target: any, prop: string | symbol, receiver: any): any {
				return Reflect.get(target, prop)
			},
			set(target: any, prop: string | symbol, newValue: any, receiver: any): boolean {
				const supplyConfig: ObjectType<any> = supplyConfigs[prop as string]
				const newValueType = type(newValue).toUpperCase()

				if (
					(isEffectArray(supplyConfig.types) && !supplyConfig.types.includes(newValueType))
					|| (supplyConfig.required === true && isEmpty(newValue))
					|| (supplyConfig.once && supplyConfig.assignCount++ > 0)
				) {
					return Reflect.set(target, prop, target[prop], receiver)
				}
				return Reflect.set(target, prop, newValue, receiver)
			}
		})
	}
	return object
}