import { test, UnitTest } from 'unit-testing-js'
import { hide } from '.'

test('hide', hide,
	{ params: ['abcd'], tobe: '****' },
	{ params: ['abcd123'], tobe: '*******' },
	{ params: ['abcd', 2], tobe: 'ab**' },
	{ params: ['abcd', 2, 4], tobe: 'ab**' },
	{ params: ['abcd', 2, 3], tobe: 'ab*d' },
	{ params: ['abcde', 2, 5], tobe: 'ab***' },
	{ params: ['abcde', -1, 5], tobe: '*****' },
	{ params: ['abcde', -1, 3], tobe: '***de' },
	{ params: ['abcde', 2, -1], tobe: '*****' },
	{ params: ['abcde', 2, 0], tobe: 'ab***' },
)