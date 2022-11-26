import * as _ from '../index'
import { test } from 'unit-testing-js'

test('getDecimal', _.getDecimal,
	{ param: 13.001, tobe: 3 }
)