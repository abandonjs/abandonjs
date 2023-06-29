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
	opacity: number
}

export interface Color {
	red: number
	green: number
	blue: number
	opacity: number
}

export interface HSV {
	/**
	 * 色相, 色调(单位度)
	 */
	hus: number
	/**
	 * 饱和度, 色彩纯净度
	 */
	saturation: string
	/**
	 * 明度
	 */
	value: string
}