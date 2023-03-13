import { UnitTest } from 'unit-testing-js'
import { includes } from '..'

UnitTest(includes)
	.addCases(
		{ params: [], tobe: false },
		{ name: 'array', params: [[1, 2, 3], 1], tobe: true },
		{ name: 'array', params: [[1, 2, 3], 1, 2], tobe: false },
		{ params: [{ 'user': 'fred', 'age': 40 }, 'fred'], tobe: true },
		{ name: 'string', params: ['pebbles', 'eb'], tobe: true },
		{ name: 'string', params: ['pebbles', 'es', -2], tobe: true },
		{ name: 'string', params: ['pebbles', 'ebc'], tobe: false },
		{ name: 'string', params: ['pebbles', 'eb', 1], tobe: true },
		{ name: 'string', params: ['pebbles', 'ebbless'], tobe: false },
	)
	.run(
		// [
			// 'array', 
			// 'string'
		// ]
	)