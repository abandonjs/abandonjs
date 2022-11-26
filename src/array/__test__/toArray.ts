import { toArray } from '..'
import { test } from 'unit-testing-js'

test<any, any>('toArray', toArray,
	{ param: 123, tobe: [123] },
	{ param: undefined, tobe: [] }
)