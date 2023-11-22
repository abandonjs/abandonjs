import { UnitTest } from 'unit-testing-js'
import { memoize } from '..'

const _ = memoize((a, b) => [a + b, a - b])

UnitTest(_, 'memoize')
	.addCases(
		{
			params: [5, 3],
			tobe: [8, 2]
		},
		{
			params: [5, 3],
			tobe: [8, 2]
		},
	)
	.run()