/**
 * @title truncateString
 * @description 指定长度处截断字符串
 * @param {string} str
 * @param {string }length
 * @returns {string}
 */
export const truncateString = (str: string, length: number) => str.length < length ? str : `${str.slice(0, length - 3)}...`;

// 添加一个不同类型字符截断单位长度不一样的截断方法
