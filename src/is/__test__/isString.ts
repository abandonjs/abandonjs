import { test } from 'unit-testing-js'
import { isString, isJsonString } from '..'

test('isString', isString,
	{ param: 1, tobe: false },
	{ param: null, tobe: false },
	{ param: undefined, tobe: false },
	{ param: NaN, tobe: false },
	{ param: '', tobe: true },
	{ param: '0', tobe: true },
	{ param: '0', tobe: true },
)



test('isJsonString', isJsonString,
	{ param: '', tobe: false },
	{ param: '{}', tobe: {} },
	{ param: '{"a":123}', tobe: { a: 123 } },
)