import { toBe, UnitTest } from 'unit-testing-js'
import { pipe } from '..'


UnitTest(toBe, 'pipe')
	.addCases(
		{
			param: pipe(
				(a, b) => [a + b, a - b],
				(a, b) => a ** b
			)(5, 2),
			tobe: 7 ** 3
		},
	)
	.run()