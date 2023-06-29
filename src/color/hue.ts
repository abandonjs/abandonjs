import { RGB } from "./type";

export function rgb2Hue(color: RGB) {
	let max, min;
	let r = color.red
	let g = color.green
	let b = color.blue
	max = Math.max(r, g, b)
	min = Math.min(r, g, b)
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
