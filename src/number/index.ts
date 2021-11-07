import { anyToNumberFn } from '../type'

const BaseToNumber: anyToNumberFn = (value: any): number => {
	if (typeof value === 'number') return value;
	return +value;
}

const isNumber: (value: any) => boolean = (value: any): boolean => {
	return typeof value !== 'undefined'
		&& !isNaN(Number(value))
}

function randomNumByRange(min: number, max: number): number {
	switch (arguments.length) {
		case 1: return parseInt(String(Math.random() * min + 1));
		case 2: return parseInt(String(Math.random() * (max - min + 1) + min));
		default: return 0;
	}
}

export {
	BaseToNumber,
	isNumber,
	randomNumByRange,
}