import { toArray } from '..'
import { test } from 'unit-testing-js'

test('toArray', toArray,
	{ param: 123, tobe: [123] },
	{ param: undefined, tobe: [] }
)