import { ObjectType } from "../../type"
import { proxyGet } from './get'
import { proxySet } from "./set"
import type { ProxyFactoryProps } from './type'

export class ProxyFactory {
	props: ProxyFactoryProps
	constructor(props: ProxyFactoryProps) {
		this.props = props
	}
	getProxy<T extends ObjectType>(target: T) {
		return new Proxy(target, {
			set: proxySet.bind(this),
			get: proxyGet.bind(this),
		})
	}
}