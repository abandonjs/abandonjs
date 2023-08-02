import { type } from 'asura-eye'
import { toString } from './toString'

/**
 * @title hide
 * @description 隐藏指定位置的字符
 * @param target {string} 待替换子串
 * @param start {?number=0}  开始位置
 * @param end {?number=target.length} 结束位置
 * @returns {string}
 * @lastUpdate 2.2.1
 */
export function hide(target: string, start = 0, end?: number): string {
	if (type(target) !== 'String') {
		target = toString(target)
	}
	if (start <= 0) start = 0

	if (!end || (end > target.length)) {
		end = target.length
		if (start === 0) return target.replace(/./gi, '*')
	}
	const center_len = end - start
	const end_len = (target.length - end) || 0
	const reg = new RegExp(`(.{${start}})(.{${center_len}})(.{${end_len}})`, 'g')
	const result:string[] = reg.exec(target) as string[]

	if (result?.length === 4) {
		result[2] = result[2].replace(/./gi,'*')
		delete result[0]
		return result.join('')
	}

	return target.replace(/./gi, '*')
}