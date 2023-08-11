import * as _ from '../index'
import { test } from 'unit-testing-js'


test('toFirstUpperCase', _.toFirstUpperCase,
	{ param: 'abcde', tobe: 'Abcde' },
)

test('toFirstLowerCase', _.toFirstLowerCase,
	{ param: 'Abcde', tobe: 'abcde' },
)

test('toUpperCase', _.toUpperCase,
	{ param: 'abcde', tobe: 'ABCDE' },
)

test('toLowerCase', _.toLowerCase,
	{ param: 'ABCDE', tobe: 'abcde' },
)