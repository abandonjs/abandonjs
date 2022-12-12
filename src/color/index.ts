import { type } from "../util";

/**
 * @title isHexColor
 * @description 判断是否为颜色字符串或数字
 * @param hex string 三位/六位的十六进制的颜色
 * @returns boolean
 */
export function isHexColor(hex: string): boolean {
	if (hex.length === 3) {
		hex += hex
	}
	return (type(hex) === 'String')
		&& hex.length === 6 && !isNaN(Number('0x' + hex))

}

/**
 * @title toRGB
 * @description 16进制颜色转RGB/RGBA字符串
 * @param val 16进制颜色
 * @param ?opa 透明度
 * @returns string
 */
export function toRGB(val: string, opa?: number): string {
	if (val.length === 3) {
		val += val;
	}
	const pattern = /^(#?)[a-fA-F0-9]{6}$/
	if (!pattern.test(val)) return ''

	const isOpa: boolean = typeof opa == 'number'

	const v: string = val.replace(/#/, '')
	//如果有#号先去除#号
	const rgbArr: any[] = []
	for (let i = 0; i < 3; i++) {
		rgbArr.push(parseInt(v.substring(i * 2, i * 2 + 2), 16))
	}
	return `rgb${isOpa ? 'a' : ''}(${rgbArr.join(',')}${isOpa ? ',' + opa : ''})`
}