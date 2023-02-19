import { UnitTest } from 'unit-testing-js'
import { copyWithin } from '..'

const array1 = ['a', 'b', 'c', 'd', 'e']

UnitTest(copyWithin)
	.addCases(
		{
			params: [array1, 1],
			tobe: [...array1].copyWithin(1, 0)
		},
		{
			params: [array1, 2, 1],
			tobe: [...array1].copyWithin(2, 1)
		},
	).run()