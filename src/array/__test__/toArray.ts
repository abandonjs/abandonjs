import { toArray } from '..'
import { test } from 'rh-test'

test<any, any>('toArray', toArray,
	{ param: 123, tobe: [123] },
	{ param: undefined, tobe: [] }
)