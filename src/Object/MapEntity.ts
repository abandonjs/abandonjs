import { isObject } from './is'

export interface MapEntityProps<K, V> {
	clear(): void;
	/**
	 * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
	 */
	delete(key: K): boolean;
	/**
	 * Executes a provided function once per each key/value pair in the Map, in insertion order.
	 */
	forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
	/**
	 * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
	 * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
	 */
	get(key: K): V | undefined;
	/**
	 * @returns boolean indicating whether an element with the specified key exists or not.
	 */
	has(key: K): boolean;
	/**
	 * Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
	 */
	set(key: K, value: V): this;
	/**
	 * @returns the number of elements in the Map.
	 */
	readonly size: number;
}

export class MapEntity<V> implements MapEntityProps<any, V>{
	map: Map<string, V>
	weakMap: WeakMap<Record<string, any>, V>
	size: number;
	constructor() {
		this.map = new Map<string, V>()
		this.weakMap = new WeakMap<Record<string, any>, V>()
		this.size = 0
	}
	clear(): void {
		this.map.clear()
		this.weakMap = new WeakMap<Record<string, any>, V>()
		this.size = 0
	}
	delete(key: Record<string, any> | string): boolean {
		throw new Error("Method not implemented.");
	}
	forEach(callbackfn: (value: V, key: string | Record<string, any>, map: Map<string | Record<string, any>, V>) => void, thisArg?: any): void {
		throw new Error("Method not implemented.");
	}
	get(key: string | Record<string, any>): V | undefined {
		if (isObject(key)) {
			return this.weakMap.get(key)
		} else {
			return this.map.get(key)
		}
	}
	has(key: string | Record<string, any>): boolean {
		if (isObject(key)) {
			return this.weakMap.has(key)
		} else {
			return this.map.has(key)
		}
	}
	set(key: string | Record<string, any>, value: V): this {
		if (isObject(key)) {
			this.weakMap.set(key, value)
			++this.size
		} else {
			this.map.set(key, value)
			++this.size
		}

		return this
	}

}