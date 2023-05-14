import { test } from 'unit-testing-js'
import * as _ from '..'

test('zip', _.zip,
	{
		params: [['fred', 'barney'], [30, 40], [true, false]],
		tobe: [['fred', 30, true], ['barney', 40, false]]
	}
)

test('zipObject', _.zipObject,
	{
		params: [['a', 'b'], [1, 2]],
		tobe: { 'a': 1, 'b': 2 }
	}
)