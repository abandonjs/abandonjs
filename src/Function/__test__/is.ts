import { isFunction } from '..'
import { test, add, asyncAdd } from 'unit-testing-js'

test('isFunction', isFunction,
	{ param: () => 123, tobe: true },
	// { param: async () => 123, tobe: true },
	// { param: function* () { }, tobe: true }
)