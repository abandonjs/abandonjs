/**
 * @title average
 * @description 平均数
 * @param ...args {number[]}
 * @returns {number}
 */
export const average = (...args: number[]) => args.reduce((a, b) => a + b) / args.length;