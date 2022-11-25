import { Val } from './util/type'

/**
 * @title toPathValue
 * @description 通过path 来获取值
 * @param val 待取值
 * @param path string 路径 (若路径有`.` 可用`\\.`代替)
 * @returns 通过路径获取对应值
 */
export function toPathValue(val: Val, path: string): Val {

	const paths: string[] = path.split('.') || []

	let beforeKey = ''
	paths.forEach((item: string) => {

		if (beforeKey !== '' && val[beforeKey + item] !== undefined) {
			val = val[beforeKey + item] || undefined
			return
		}

		if (val[item]) {
			val = val[item] || undefined
		} else if (/\\$/.test(item)) {
			beforeKey += item.replace(/\\$/, '.')
		}

	})

	return val

}