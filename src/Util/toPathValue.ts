import { Val } from './util/type';
/**
 * @title toPathValue
 * @description 通过path 来获取值
 * @param val 待取值
 * @param path string 路径 (若路径有`.` 可用`\\.`代替)
 * @returns 通过路径获取对应值
 */
export function toPathValue(val: Val, path: string): Val {

	const paths: string[] = path.split('.') || []
	
	let beforKey = ''
	paths.forEach((item: string) => {

		if (beforKey !== '' && val[beforKey+item] !== undefined) {
			val = val[beforKey+item] || undefined
			return
		}

		if (val[item]) {
			val = val[item] || undefined
		} else {
			if (/\\$/.test(item)) {
				beforKey += item.replace(/\\$/, '.')
			}
		}

	})

	return val

}