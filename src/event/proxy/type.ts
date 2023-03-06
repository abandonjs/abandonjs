import { ObjectType } from "../../type"

export interface ProxyFactoryProp extends ObjectType {
	/**
	 * @description 属性名
	 */
	name: string | symbol
	/**
	 * @description 默认值
	 */
	default?: any
	/**
	 * @description 初始化属性名
	 */
	initProp?: boolean
	/**
	 * @description 指定限制类型
	 */
	type?: string | string[]
	/**
	 * @description 可以为空
	 * @default false
	 */
	canEmpty?: boolean
	/**
	 * @description 不可修改
	 * @default false
	 **/
	immutable?: boolean
	/**
	 * @description 只允许赋值一次, 优先级大于 'immutable'
	 * @default false
	 */
	once?: boolean

}

export type ProxyFactoryProps = ProxyFactoryProp[]