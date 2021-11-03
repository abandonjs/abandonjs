import { anyToNumberFn } from '../type'

const BaseToNumber: anyToNumberFn = (value: any): number => {
	if (typeof value === 'number') return value;
	return +value;
}

export {
	BaseToNumber
}