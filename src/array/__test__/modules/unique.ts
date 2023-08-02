import { test } from 'unit-testing-js'
import { unique } from '../..'

test('unique', unique,
	{ param: [1, 1, 1, 1], tobe: [1] }
)