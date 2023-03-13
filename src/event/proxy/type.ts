import { ObjectType } from "../../type"

export interface ProxyFactoryProp<T = any> extends ObjectType {
	/**
	 * @description 属性名
	 */
	name: string | symbol
	/**
	 * @description 默认值
	 * @default undefined
	 */
	default?: T
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
	/**
	 * @description 只有该属性描述符的类型可以被改变并且该属性可以从对应对象中删除
	 * @default false
	 */
	configurable?: boolean
	/**
	 * @description 只有在枚举相应对象上的属性时该属性显现
	 * @default false
	 */
	enumerable?: boolean
	/**
	 * @description 只有与该属性相关联的值被assignment operator 改变时
	 * @default false
	 */
	writable?: boolean
}

export type ProxyFactoryProps = ProxyFactoryProp[]

export interface ProxyObjectProp {
	/**
	 * @description 属性名
	 */
	name: string
	/**
	 * @description 默认值
	 * @default undefined
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
	 * @description 不可以为空
	 * @default false
	 */
	required?: boolean
	/**
	 * @description 只修改赋值一次, 优先级大于
	 * @default false
	 */
	once?: boolean
	
	/**
	 * @description false: 拦截 删除该属性
	 */
	configurable?: boolean
	/**
	 * @description false: 在枚举相应对象上的属性时该属性隐藏
	 */
	enumerable?: boolean
	/**
	 * @description false: 不可以修改值
	 */
	writable?: boolean
}