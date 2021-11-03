import { anyToStringFn } from '../type'

const BaseToString: anyToStringFn = (value: any): string => {
	if (typeof value === 'string') return value;
	if (Array.isArray(value)) return `${value.map(BaseToString)}`
	const result: string = `${value}`;
	return (result === '0' && (1 / value) === -Infinity ? '-0' : result) || '';
}

export {
	BaseToString,
}