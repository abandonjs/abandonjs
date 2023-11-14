import { test } from 'unit-testing-js'
import { descSort, ascSort } from '../..'

test(descSort,
	{ params: [[]], tobe: [] },
	{ params: [[1, 2, 3, 4, 5, 6]], tobe: [6, 5, 4, 3, 2, 1] },
	{ params: [['1', '2', '3', '4', '5', '6']], tobe: ['6', '5', '4', '3', '2', '1'] },
	{
		params: [
			[
				{
					value: 'a',
					orderBy: 1,
				},
				{
					value: 'b',
					orderBy: 2,
				},
			],
			'orderBy'
		],
		tobe: [
			{
				value: 'b',
				orderBy: 2,
			},
			{
				value: 'a',
				orderBy: 1,
			},
		]
	},
)

test(ascSort,
	{ params: [[]], tobe: [] },
	{ params: [[1, 2, 3, 4, 5, 6]], tobe: [1, 2, 3, 4, 5, 6] },
	{
		params: [['1', '2', '3', '4', '5', '6']],
		tobe: ['1', '2', '3', '4', '5', '6'],
	},
	{
		params: [
			[
				{
					value: 'a',
					orderBy: 1,
				},
				{
					value: 'b',
					orderBy: 2,
				},
			],
			'orderBy'
		],
		tobe: [
			{
				value: 'a',
				orderBy: 1,
			},
			{
				value: 'b',
				orderBy: 2,
			},
		]
	},
)