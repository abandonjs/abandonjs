import { UnitTest } from 'unit-testing-js'
import { indexOf } from '..'

const emptyMap = new Map([])
const map = new Map<any, any>([
	[{ a: 1, b: 2 }, 123],
	[{ c: 3, d: 4 }, { g: 7, e: 5 }],
])

UnitTest(indexOf, 'indexOf')
	.addCases(
		{ params: [], tobe: undefined },
		{ params: [emptyMap, 111], tobe: undefined },
		{ name: 'array', params: [[1, 2, 3], 1], tobe: 0 },
		{ name: 'array', params: [[1, 2, 3], 2], tobe: 1 },
		{ params: [{ 'user': 'fred', 'age': 40 }, 'fred'], tobe: 'user' },
		{ params: [{ 'user': 'fred', 'age': 40 }, 40], tobe: 'age' },
		{ params: [{ 'user': 'fred', 'age': 40 }, 40], tobe: 'age' },
		{
			name: 'map',
			params: [map, 123],
			tobe: { a: 1, b: 2 }
		},

		// {
		// 	name: 'map',
		// 	params: [map, { e: 5, g: 7 }],
		// 	tobe: { c: 3, d: 4 }
		// },

		{
			name: 'set',
			params: [new Set([{ e: 5, g: 7 }]), { e: 5, g: 7 }],
			tobe: 0
		},
		{
			name: 'set',
			params: [new Set([{ e: 5, g: 7 }]), { e: 5, g: 9 }],
			tobe: -1
		},

		// { name: 'string', params: ['pebbles', 'eb'], tobe: true },
		// { name: 'string', params: ['pebbles', 'es', -2], tobe: true },
		// { name: 'string', params: ['pebbles', 'ebc'], tobe: false },
		// { name: 'string', params: ['pebbles', 'eb', 1], tobe: true },
		// { name: 'string', params: ['pebbles', 'ebbless'], tobe: false },
	)
	.run()