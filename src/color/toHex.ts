
/**
 * @title rgbToHex
 * @description RGB的颜色值转化为16进制值
 * @param r {number}
 * @param g {number}
 * @param b {number}
 * @returns {string}
 * @version 2.4.0
 */
export const rgbToHex = (r: number, g: number, b: number) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);