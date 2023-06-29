
/**
 * @title rgbToHex
 * @description RGB的颜色值转化为16进制值
 * @param red {number}
 * @param green {number}
 * @param blue {number}
 * @returns {string}
 * @version 2.4.0
 */
export const rgbToHex = (red: number, green: number, blue: number) => "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);