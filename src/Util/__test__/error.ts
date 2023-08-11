import * as _ from '../index'
import { add, toBe, test } from 'unit-testing-js'

test('guard', toBe,
	{
		func: _.guard(add, 0),
		params: [0, 1, 2, 3], tobe: 6
	},
	{
		func: _.guard(JSON.parse, 123),
		params: ['{123}'],
		tobe: 123
	}
)

test('asyncGuard', toBe,
	{
		func: _.asyncGuard(add, 0),
		params: [0, 1, 2, 3], tobe: 6
	},
	{
		func: _.asyncGuard(JSON.parse, 123),
		params: ['{123}'],
		tobe: 123
	}
)
