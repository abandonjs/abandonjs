import { type } from "../util/type"
import { toString } from './toString'

/**
 * @title hide
 * @description 隐藏指定位置的字符
 * @param target {string} 待替换子串
 * @param start {?number=0}  开始位置
 * @param end {?number=target.length} 结束位置
 * @returns {string}
 * @version 2.0.0
 * @lastUpdate 2.2.1
 */
export function hide(target: string, start = 0, end?: number): string {
	if (type(target) !== 'String') {
		target = toString(target)
	}
	if (start <= 0) return target.replace(/./g, '*')

	if (!end || (end > target.length)) {
		end = target.length
	}
	const end_len = (target.length - end) || 0
	const reg = new RegExp(`(.{${start - 1}}).{${end - start + 1}}${end_len > 0 ? `(.{${end_len}})` : ''}`, 'g')

	return target
		.replace(reg, `$1${new Array(end - start + 1).fill('*').join('')}${end_len > 0 ? '$2' : ''}`)

}