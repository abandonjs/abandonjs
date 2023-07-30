import { UnitTest } from 'unit-testing-js'
import { concat } from '..'

UnitTest(concat)
	.addCases(
		{
			params: [[1, 1, 1, 1], 2, [3]],
			tobe: [1, 1, 1, 1, 2, 3]
		},
		{
			params: [[1, 1, 1, 1], 2, [3], new Set([1])],
			tobe: [1, 1, 1, 1, 2, 3, 1]
		},
	).run()