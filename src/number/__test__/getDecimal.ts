import * as _ from '../index'
import { test } from 'rh-test'

test('getDecimal', _.getDecimal,
	{ param: 13.001, tobe: 3 }
)