import * as _ from '../index'
import { add, toBe, test } from 'unit-testing-js'

test<number | string>('throwError', toBe,
	{
		func: _.throwError(add, 0),
		params: [0, 1, 2, 3], tobe: 6
	},
	{
		func: _.throwError(JSON.parse, 123),
		params: ['{123}'],
		tobe: 123
	}
)

test<number | string>('asyncThrowError', toBe,
	{
		func: _.asyncThrowError(add, 0),
		params: [0, 1, 2, 3], tobe: 6
	},
	{
		func: _.asyncThrowError(JSON.parse, 123),
		params: ['{123}'],
		tobe: 123
	}
)
