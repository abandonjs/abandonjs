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

test('isString', _.isString,
	{ param: 1, tobe: false },
	{ param: null, tobe: false },
	{ param: undefined, tobe: false },
	{ param: NaN, tobe: false },
	{ param: '', tobe: true },
	{ param: '0', tobe: true },
	{ param: '0', tobe: true },
)

test('reverseString', _.reverseString,
	{ param: 'abc', tobe: 'cba' }
)

test('isJsonString', _.isJsonString,
	{ param: '', tobe: false },
	{ param: '{}', tobe: {} },
	{ param: '{"a":123}', tobe: { a: 123 } },
)