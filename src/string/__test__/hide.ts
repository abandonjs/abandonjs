import { test, UnitTest } from 'unit-testing-js'
import { hide } from '.'

test('hide', hide,
	{ params: ['abcd'], tobe: '****' },
	{ params: ['abcd', 2], tobe: 'a***' },
	{ params: ['abcd', 2, 4], tobe: 'a***' },
	{ params: ['abcd', 2, 3], tobe: 'a**d' },
)