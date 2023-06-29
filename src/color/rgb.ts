import type { Color } from './type'
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



/**
 * @title toRGBRecord
 * @description 16进制颜色转RGB/RGBA字符串
 * @param val 16进制颜色
 * @param ?opa 透明度
 * @returns {Color}
 * @version 2.5.4
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


export function HSVtoRGB(h, s, v) {
	let i, f, p1, p2, p3;
	let r = 0, g = 0, b = 0;
	if (s < 0) s = 0;
	if (s > 1) s = 1;
	if (v < 0) v = 0;
	if (v > 1) v = 1;
	h %= 360;
	if (h < 0) h += 360;
	h /= 60;
	i = Math.floor(h);
	f = h - i;
	p1 = v * (1 - s);
	p2 = v * (1 - s * f);
	p3 = v * (1 - s * (1 - f));
	switch (i) {
		case 0: r = v; g = p3; b = p1; break;
		case 1: r = p2; g = v; b = p1; break;
		case 2: r = p1; g = v; b = p3; break;
		case 3: r = p1; g = p2; b = v; break;
		case 4: r = p3; g = p1; b = v; break;
		case 5: r = v; g = p1; b = p2; break;
	}
	return 'rgb(' + Math.round(r * 255) + ',' + Math.round(g * 255) + ',' + Math.round(b * 255) + ')';
}


export function HuetoRGB(h) {
	let doHandle = (num) => {
		if (num > 255) {
			return 255;
		} else if (num < 0) {
			return 0;
		} else {
			return Math.round(num);
		}
	}

	let hueRGB = h / 60 * 255;
	let r = doHandle(Math.abs(hueRGB - 765) - 255);
	let g = doHandle(510 - Math.abs(hueRGB - 510));
	let b = doHandle(510 - Math.abs(hueRGB - 1020));
	return 'rgb(' + r + ',' + g + ',' + b + ')';
}


export function HexTorgb(hex) {
	var hexNum = hex.substring(1);
	hexNum = '0x' + (hexNum.length < 6 ? repeatLetter(hexNum, 2) : hexNum);
	var r = hexNum >> 16;
	var g = hexNum >> 8 & 0xff
	var b = hexNum & 0xff
	return `rgb(${r},${g},${b})`;

	function repeatWord(word, num) {
		var result = '';
		for (let i = 0; i < num; i++) {
			result += word;
		}
		return result;
	}
	function repeatLetter(word, num) {
		var result = '';
		for (let letter of word) {
			result += repeatWord(letter, num);
		}
		return result;
	}
}
