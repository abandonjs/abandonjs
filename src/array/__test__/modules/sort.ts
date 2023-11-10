import { test } from 'unit-testing-js'
import { descSort, ascSort } from '../..'

test(descSort,
	{ param: ['a', 'c', 'b', {}], tobe: ['c', 'b', 'a', {}] },
	{ params: [['1', { a: '3' }, '2'], 'a'], tobe: [{ a: '3' }, '2', '1'] },
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
	{ param: ['a', 'c', 'b', {}], tobe: ['a', 'b', 'c',{}] },
	{ params: [['1', { a: '3' }, '2'], 'a'], tobe: ['1', '2', { a: '3' }] },
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