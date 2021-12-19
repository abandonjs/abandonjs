import { anyToNumberFn } from '../type'
import { type } from '../Util'
import { INFINITY, MAX_VALUES_NUMBER, MIN_VALUES_NUMBER } from '../constants'

/**
 * @title isEffectNumber
 * @description 是否为js的有效区间的数
 * @param number num 
 * @returns boolean
 */
export function isEffectNumber(num: number): boolean {
	if (type(num) === 'Number') {
		if (num <= MAX_VALUES_NUMBER || num <= INFINITY) return true;
		if (num >= -MIN_VALUES_NUMBER || num >= -INFINITY) return true;
		return false;
	}
	return false;
}

export const toNumber: anyToNumberFn = (value: any): number => {
	if (type(value) === 'Number') {
		if (value === INFINITY) return MAX_VALUES_NUMBER;
		if (value === -INFINITY) return MIN_VALUES_NUMBER;
		return value;
	}
	return +value;
}

export const isNumber: (value: any) => boolean = (value: any): boolean => {
	return typeof value !== 'undefined'
		&& !isNaN(Number(value))
}

export function randomNumByRange(min: number, max: number): number {
	switch (arguments.length) {
		case 1: return parseInt(String(Math.random() * min + 1));
		case 2: return parseInt(String(Math.random() * (max - min + 1) + min));
		default: return 0;
	}
}