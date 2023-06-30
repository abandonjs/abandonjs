export type HEX = `#${string}`

export interface RGB {
	red: number
	green: number
	blue: number
}

export interface RGBA {
	red: number
	green: number
	blue: number
	alpha: number
}

export interface Color {
	red: number
	green: number
	blue: number
	opacity: number
}

export interface HSV {
	/**
	 * 色相, 色调(度)
	 */
	hus: number
	/**
	 * 饱和度, 色彩纯净度(%)
	 */
	saturation: string
	/**
	 * 明度(%)
	 */
	value: string
}


export interface HSL {
	/**
	 * 色调(度)
	 */
	hue: number
	/**
	 * 饱和度(%)
	 */
	saturation: string
	/**
	 * 亮度(%)
	 */
	lightness: string
}
export interface HSLA {
	/**
	 * 色调(度)
	 */
	hue: number
	/**
	 * 饱和度(%)
	 */
	saturation: string
	/**
	 * 亮度(%)
	 */
	lightness: string
	/**
	 * 透明度
	 */
	alpha: number
}

export interface CMYK {
	/**
	 * 青色
	 */
	cyan: string
	/**
	 * 品红
	 */
	magenta: string
	/**
	 * 黄色
	 */
	yellow: string
	/**
	 * 黑色
	 */
	black: string
}

export interface HSI {
	/**
	 * 色调(度)
	 */
	hue: number
	/**
	 * 饱和度(%)
	 */
	saturation: string
	/**
	 * 亮度(%)
	 */
	intensity: string
}

export interface CIE_LAB {
	/**
	 * 亮度(%)
	 */
	lightness: number
	a: number
	b: number
}