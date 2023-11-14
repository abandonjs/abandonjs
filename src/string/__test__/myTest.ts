import * as _ from '..'
import { test } from 'unit-testing-js'



test('replaces', _.replaces,
	{ param: undefined, tobe: '' },
	{ param: '123', tobe: '123' },
	{ params: ['123', [{ reg: '12', value: '99' }]], tobe: '993' },
	{
		params: ['123', [{
			reg: /1/,
			value: 'aaa'
		}]], tobe: 'aaa23'
	},
)


test('reverseString', _.reverseString,
	{ param: 'abc', tobe: 'cba' }
)