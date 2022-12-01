import { type } from '../util'

export function stringify(value: any, replacer?: any, space?: number): string {
	// let newValue:string 

	if (type(value) === 'String') return value
	if (type(value) === 'NaN') return 'NaN'
	if (type(value) === 'Date') return new Date(value).toString()
	if ([
		'Function', 'AsyncFunction', 'GeneratorFunction',
		'Symbol', 'RegExp', 'Promise'
	].includes(type(value)))
		return value.toString()


	if (value === Infinity) return 'Infinity'
	if (value === -Infinity) return '-Infinity'
	if (value === undefined) return 'undefined'
	if (value === null) return 'null'

	return JSON.stringify(value, replacer, space)
}

