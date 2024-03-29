import { test } from 'unit-testing-js'
import { toArray } from '..'

test('toArray', toArray,
	{
		param: new Map([
			[1, 2],
			[2, 3]
		]), tobe: [
			[1, 2],
			[2, 3]
		]
	},
	{
		param: new Set([1, 2, 3]),
		tobe: [1, 2, 3]
	},
	{
		param: {
			a: '1',
			b: 2,
		},
		tobe: [
			['a', '1'],
			['b', 2],
		]
	},
	{ param: 123, tobe: [123] },
	{ param: undefined, tobe: [] },
	{ params: [null], tobe: [] },
	{ params: [NaN], tobe: [] },
	{ params: [undefined], tobe: [] },
	{ params: [true], tobe: [true] },
	{ params: [1], tobe: [1] },
	{ params: [10], tobe: [10] },
	{ params: ['template'], tobe: ['template'] },
	{ params: [[]], tobe: [] },
	{ params: [{}], tobe: [] },
	{ params: [false], tobe: [false] },
	{ params: [0], tobe: [0] },
	{ params: [-1], tobe: [-1] },
	{ params: [null], tobe: [] },
	{ params: [NaN], tobe: [] },
	{ params: [''], tobe: [''] },
	{ params: [0], tobe: [0] },
	{ params: [0.00001], tobe: [0.00001] },
	{ params: [-0.00001], tobe: [-0.00001] },
	{ params: [1], tobe: [1] },
	{ params: [-1], tobe: [-1] },
	{ params: [99999], tobe: [99999] },
	{ params: [-99999], tobe: [-99999] },
	{ params: [Infinity], tobe: [-Infinity] },
	{ params: [-Infinity], tobe: [-Infinity] },
	{
		params: [1.7976931348623157e+308],
		tobe: [1.7976931348623157e+308]
	},
	{
		params: [-1.7976931348623157e+308],
		tobe: [-1.7976931348623157e+308]
	},
	{ param: [], tobe: [] },
	{ param: new Array(1110000).fill('1'), tobe: new Array(1110000).fill('1') },
	{ param: 1, tobe: [1] },
	{ param: 33, tobe: [33] },
	{ param: [{}, 1], tobe: [{}, 1] },
)
