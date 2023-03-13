import { UnitTest } from 'unit-testing-js'
import { memoize } from '..'

const _ = memoize((a, b) => [a + b, a - b])

UnitTest(_, 'pipe')
	.addCases(
		{
			param: [5, 3],
			tobe: [8, 2]
		},
		{
			param: [5, 3],
			tobe: [8, 2]
		},
	)
	.run()