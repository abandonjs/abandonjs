import { isObject } from './is'
import { ObjectType } from '../type'
import { isEqual } from '../util/isEqual'

export type MapEntityUnit<V> = Map<string, V> | WeakMap<ObjectType, V>
export type MapEntityKey = string | ObjectType
export interface MapEntityProps<V> {
	/**
	 * 清空
	 */
	clear(): void;
	/**
	 * @description 删除一项, 若无对应的key, 返回 false
	 * @returns {boolean}
	 */
	delete(key: MapEntityKey): boolean;
	/**
	 * Executes a provided function once per each key/value pair in the Map, in insertion order.
	 */
	forEach(callback: (value: V, key: MapEntityKey, map: MapEntity<V>) => void, thisArg?: any): void;
	/**
	 * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
	 * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
	 */
	get(key: MapEntityKey): V | undefined;
	/**
	 * @returns boolean indicating whether an element with the specified key exists or not.
	 */
	has(key: MapEntityKey): boolean;
	/**
	 * Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
	 */
	set(key: MapEntityKey, value: V): this;
	/**
	 * @returns the number of elements in the Map.
	 */
	readonly size: number;
}

function includes(list: unknown[], item: unknown): boolean {
	if (isObject(item)) {
		for (let i = 0; i < list.length; i++)
			if (isEqual(list[i], item))
				return true
	}
	if (list.includes(item)) return true
	return false
}

export class MapEntity<V = unknown> implements MapEntityProps<V>{
	map: Map<string, V>
	weakMap: WeakMap<ObjectType, V>
	keyList: MapEntityKey[] = []
	size = 0
	constructor() {
		this.map = new Map<string, V>()
		this.weakMap = new WeakMap<ObjectType, V>()
		this.size = 0
	}
	clear(): void {
		this.map.clear()
		this.weakMap = new WeakMap<ObjectType, V>()
		this.keyList = []
		this.size = 0
	}
	delete(key: MapEntityKey): boolean {
		if (!includes(this.keyList, key)) return false
		--this.size;
		const newKeyList = [...this.keyList]
		this.keyList = this.keyList.filter(item => !isEqual(item, key))
		if (!isObject(key)) return this.map.delete(key)
		for (let i = 0; i < newKeyList.length; i++)
			if (isEqual(newKeyList[i], key))
				return this.weakMap.delete(newKeyList[i] as ObjectType)

		return false
	}
	forEach(
		callback: (value: V, key: MapEntityKey, map: MapEntity<V>) => void,
		thisArg: any = {}
	): void {
		const newCallback = callback.bind(thisArg)
		for (let i = 0; i < this.keyList.length; i++) {
			const key = this.keyList[i]
			let val: V
			if (isObject(key)) {
				val = this.weakMap.get(key) as V
			} else {
				val = this.map.get(key) as V
			}
			newCallback(val, key, this)
		}
	}
	get(key: MapEntityKey): V | undefined {
		if (!isObject(key)) return this.map.get(key)
		for (let i = 0; i < this.keyList.length; i++)
			if (isEqual(this.keyList[i], key))
				return this.weakMap.get(this.keyList[i] as ObjectType)
		return undefined
	}
	has(key: MapEntityKey): boolean {
		if (isObject(key))
			return this.weakMap.has(key)
		return this.map.has(key)
	}
	set(key: MapEntityKey, value: V): this {
		if (includes(this.keyList, key)) {
			if (!isObject(key)) {
				this.map.set(key, value)
				return this
			}
			for (let i = 0; i < this.keyList.length; i++)
				if (isEqual(this.keyList[i], key))
					this.weakMap.set(this.keyList[i] as ObjectType, value)
			return this
		}

		this.keyList.push(key)
		++this.size

		if (!isObject(key)) {
			this.map.set(key, value)
			return this
		}
		for (let i = 0; i < this.keyList.length; i++)
			if (isEqual(this.keyList[i], key))
				this.weakMap.set(this.keyList[i] as ObjectType, value)
		this.weakMap.set(key, value)
		return this
	}

}