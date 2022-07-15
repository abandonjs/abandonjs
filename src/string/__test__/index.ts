import * as _ from '../index'
import { test } from 'rh-test'

test('hide', _.hide,
	{ params: ['abcd'], tobe: '****' },
	{ params: ['abcd', 2], tobe: 'a***' },
	{ params: ['abcd', 2, 4], tobe: 'a***' },
	{ params: ['abcd', 2, 3], tobe: 'a**d' },
)

test<any>('replaces', _.replaces,
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

test<any>('isString', _.isString,
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

test<any, object | boolean>('isJsonString', _.isJsonString,
	{ param: '', tobe: false },
	{ param: '{}', tobe: {} },
	{ param: '{"a":123}', tobe: { a: 123 } },
)

test<object | number>('toString', _.toString,
	{ param: 1, tobe: '1' },
	{ param: { a: 1 }, tobe: '{"a":1}' },
	{ param: [1, 2, '3'], tobe: '[1,2,"3"]' },
)

test('toStrings', _.toStrings,
	{ param: [1, 2, 3, '4'], tobe: ['1', '2', '3', '4'] }
)