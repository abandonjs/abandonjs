import { Val } from './type';
/**
 * @title toPathValue
 * @description 通过path 来获取值
 * @param val 待取值
 * @param path string 路径 
 * @returns 通过路径获取对应值
 */
export function toPathValue(val: Val, path: string): Val {

	const paths: string[] = path.split('.') || []

	paths.forEach((item: string) => {
		val = val[item] ?? undefined
	})

	return val

}