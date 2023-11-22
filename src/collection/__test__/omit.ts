import { test } from 'unit-testing-js'
import { omit } from '..'

const obj = { a: 1, b: 'bb', c: undefined }

test(omit,
	{
		params: [
			new Map([
				['a', 'b'],
				['a1', 'b1'],
			]),
			['a1']
		],
		tobe: new Map([
			['a', 'b']
		])
	},
	{
		params: [
			{ a: 1, b: 'bb', c: undefined },
			['a', 'c']
		],
		tobe: { b: 'bb' }
	},
	{
		params: [
			obj,
			['a', 'c', 'd']
		],
		tobe: { b: 'bb' }
	},
)