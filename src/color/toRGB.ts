/**
 * @title toRGB
 * @description 16进制颜色转RGB/RGBA字符串
 * @param val 16进制颜色
 * @param ?opa 透明度
 * @returns string
 * @version 2.4.0
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

export interface Color {
	red: number
	green: number
	blue: number
	opacity: number
}

/**
 * @title toRGBRecord
 * @description 16进制颜色转RGB/RGBA字符串
 * @param val 16进制颜色
 * @param ?opa 透明度
 * @returns {Color}
 * @version 2.5.3
 */
export function toRGBRecord(val: string, opa?: number): Color {
	if (val.length === 3) {
		val += val;
	}
	const pattern = /^(#?)[a-fA-F0-9]{6}$/
	const color = {
		red: 0,
		green: 0,
		blue: 0,
		opacity: opa === undefined ? 1 : opa
	}
	if (!pattern.test(val)) return color

	const v: string = val.replace(/#/, '')
	//如果有#号先去除#号
	color.red = parseInt(v.substring(0, 2), 16)
	color.green = parseInt(v.substring(2, 4), 16)
	color.blue = parseInt(v.substring(4, 6), 16)

	return color
}
