import * as _ from '../index'
import { test } from 'unit-testing-js'


test('changeCase', _.changeCase,
	{ params: ['abcde'], tobe: 'ABCDE' },
	{ params: ['abcde', 'FirstUpper'], tobe: 'Abcde' },
	{ params: ['Abcde', 'FirstLower'], tobe: 'abcde' },
	{ params: ['abcde', 'Upper'], tobe: 'ABCDE' },
	{ params: ['ABCDE', 'Lower'], tobe: 'abcde' },
)