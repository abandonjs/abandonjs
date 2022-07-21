import * as _ from '../index'
import { add, equal } from 'rh-test'

equal<number | string>('throwError',
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

equal<number | string>('asyncThrowError',
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
