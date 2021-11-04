import { anyToStringFn } from '../type'
import { isEmpty } from '../Util'

const BaseToString: anyToStringFn = (value: any): string => {
	if (typeof value === 'string') return value;
	if (Array.isArray(value)) return `${value.map(BaseToString)}`
	const result: string = `${value}`;
	return (result === '0' && (1 / value) === -Infinity ? '-0' : result) || '';
}

// 任何值 => 字符串
const allToString: anyToStringFn = (value: any): string => {
	if (isEmpty(value)) return '';
	return String(value);
}


// 空值 => 空字符串
const isEmptyToEmptyString: anyToStringFn = (value: any): string => {
	if (isEmpty(value)) return '';
	return value;
}

export {
	BaseToString,
	isEmptyToEmptyString,
	allToString,
}