import { RGB } from "./type";
import { toRgbSet } from "./util";

/**
 * @title RGB2HUE
 * @description rgb 转 hue
 * @param color {RGB}
 * @returns {number}
 */
export function RGB2HUE(color: RGB) {
	const { red: r, green: g, blue: b } = color
	let max = Math.max(r, g, b)
	let min = Math.min(r, g, b)
	if (max == min) {
		return 0;
	} else {
		if (max == r && g >= b) {
			return 60 * (g - b) / (max - min);
		} else if (max == r && g < b) {
			return 60 * (g - b) / (max - min) + 360;
		} else if (max == g) {
			return 60 * (b - r) / (max - min) + 120;
		} else if (max == b) {
			return 60 * (r - g) / (max - min) + 240;
		}
	}
}

/**
 * @title HUE2RGB
 * @param hue {number} 
 * @returns [string, RGB]
 */
export function HUE2RGB(hue: number) {

	const doHandle = (num) => {
		if (num > 255) {
			return 255;
		} else if (num < 0) {
			return 0;
		} else {
			return Math.round(num);
		}
	}

	const hueRGB = hue / 60 * 255;
	const red = doHandle(Math.abs(hueRGB - 765) - 255);
	const green = doHandle(510 - Math.abs(hueRGB - 510));
	const blue = doHandle(510 - Math.abs(hueRGB - 1020));
	return toRgbSet(red, green, blue)
}