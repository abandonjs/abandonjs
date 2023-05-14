import { test } from 'unit-testing-js'
import { fill } from '../..'

test('fill', fill,
	{ params: [[1, 2, 3], 4, 1], tobe: [1, 2, 3, 4] },
	{
		params: [[1, 2, 3], (num) => {
			return num + 1
		}, 2], tobe: [1, 2, 3, 4, 5]
	},
)