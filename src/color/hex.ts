import type { RGB } from './type'
/**
 * @title RGB2HEX
 * @description RGB 转为 HEX
 * @param color {RGB}
 * @returns {string}
 */
export const RGB2HEX = (color: RGB) => {
	const { red, green, blue } = color
	return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)
}


/**
 * @title HEX2RGB
 * @description HEX 转 RGB
 * @param hex {string}
 * @returns {[string, RGB]}
 */
export function HEX2RGB(hex: string) {
	let hexNum: string = hex.substring(1);
	function repeatWord(word, num) {
		let result = '';
		for (let i = 0; i < num; i++) {
			result += word;
		}
		return result;
	}
	function repeatLetter(word, num) {
		let result = '';
		for (let letter of word) {
			result += repeatWord(letter, num);
		}
		return result;
	}
	hexNum = '0x' + (hexNum.length < 6 ? repeatLetter(hexNum, 2) : hexNum);

	let red = Number(hexNum) >> 16
	let green = Number(hexNum) >> 8 & 0xff
	let blue = Number(hexNum) & 0xff

	return [
		`rgb(${red},${green},${blue})`,
		{ red, green, blue }
	]

}
