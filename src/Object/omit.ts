import { ObjectType } from "../type"

/**
 * @title omitRecord<T extends ObjectType>
 * @description 忽略object属性
 * @param record T
 * @param propertys string[]
 * @returns T
 */
export function omitRecord<T extends ObjectType>(record: T, propertys: string[] = []): T {
	propertys.forEach(property => {
		record[property] && delete record[property]
	})
	return record
}

