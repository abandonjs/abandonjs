import * as _ from '../index'
import { test } from 'unit-testing-js'


test<string | _.CaseType, string>('changeCase', _.changeCase,
	{ params: ['abcde'], tobe: 'ABCDE' },
	{ params: ['abcde', 'FirstUpper'], tobe: 'Abcde' },
	{ params: ['Abcde', 'FirstLower'], tobe: 'abcde' },
	{ params: ['abcde', 'Upper'], tobe: 'ABCDE' },
	{ params: ['ABCDE', 'Lower'], tobe: 'abcde' },
)

test<any, boolean>('isEmpty', _.isEmpty,
	{ param: '', tobe: false },
	{ param: 0, tobe: false },
	{ param: '-1', tobe: false },
	{ param: -1, tobe: false },
	{ param: undefined, tobe: true },
	{ param: null, tobe: true },
	{ param: NaN, tobe: true },
	{ param: Number.NaN, tobe: true },
)

test<any>('runFunc', _.runFunc,
	{ params: [() => 3], tobe: 3 },
	{ params: [(a) => 3 + a, 2], tobe: 5 },
	{ params: [async () => 3], tobe: 3 },
	{ params: [async (a) => 3 + a, 2], tobe: 5 },
)
