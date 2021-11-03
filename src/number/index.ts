import { anyToNumberFn } from '../type'

const BaseToNumber: anyToNumberFn = (value: any): number => {
	if (typeof value === 'number') return value;
	return +value;
}

const isNumber: boolean = (value: any): boolean => {
	return typeof value !== 'undefined'
		&& !isNaN(Number(value))
}

export {
	BaseToNumber,
	isNumber,
}