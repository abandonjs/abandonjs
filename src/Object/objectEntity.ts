import { equal } from '../util'
import { ObjectType } from '../type'

export interface ObjectEntity<Value> {
	defaultValue?: Value
	defaultKey?: string
}

export function ObjectEntity<Value = any>(target: ObjectType = {}, config?: ObjectEntity<Value>) {

	const { defaultValue, defaultKey } = config || {};

	const keys = Object.keys(target)
	const values = Object.values(target)

	const get = (key: string) => keys.includes(key) ? target[key] : defaultValue

	const getKey = (value: Value) => {
		if (values.includes(value)) {
			for (let i = 0; i < keys.length; i++)
				if (equal(target[keys[i]], value))
					return keys[i]
		}
		return defaultKey
	}

	const list = (keyName = 'key', valueName = 'value', keyValueReverse = false) => {
		return Object.entries(target)
			.map(([key, value]: [string, Value]) => {
				if (keyValueReverse) {
					return {
						[valueName]: key,
						[keyName]: value,
					}
				}
				return {
					[keyName]: key,
					[valueName]: value
				}
			})
	}

	return {
		target,
		keys,
		values,
		get,
		getKey,
		list,
	}
}