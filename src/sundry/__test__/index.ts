import { test } from 'unit-testing-js'
import * as _ from '..'

test('toFahrenheit', _.toFahrenheit,
	{ param: 15, tobe: 59 },
	{ param: 0, tobe: 32 },
	{ param: -20, tobe: -4 },
)

test('toCelsius', _.toCelsius,
	{ param: 59, tobe: 15 },
	{ param: 32, tobe: 0 },
)