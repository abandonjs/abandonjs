/**
 * @title serialize
 * @description 序列化对象
 * @param query object
 * @param encode boolean = false
 * @returns string 
 */
export function serialize<T extends object = Record<string, string | number>>(query: T, encode = false): string {
	return Object.keys(query)
		.map((key) => `${key}=${encode ? encodeURIComponent(query[key]) : query[key]}`)
		.join('&')
}
