/**
 * @title omitRecord<T extends Record<string, any> = Record<string, any>>
 * @description 忽略object属性
 * @param record T
 * @param propertys string[]
 * @returns T
 */
export function omitRecord<T extends Record<string, any> = Record<string, any>>(record: T, propertys: string[] = []): T {
	propertys.forEach(property => {
		record[property] && delete record[property]
	})
	return record
}

