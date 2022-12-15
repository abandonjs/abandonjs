import * as _ from '..'
import { test } from 'unit-testing-js'

test('spLength', _.spLength,
	{ params: ['121212', 3, 5], tobe: '21212' },
	{ params: ['12', 3, 5], tobe: '012' },
	{ params: ['123456', 1, 5], tobe: '23456' },
	{ params: ['123456', 1, 5], tobe: '23456' },
	{ params: ['123456'], tobe: '123456' },
	{ params: [123456], tobe: '123456' },
	{ params: [123456], tobe: '123456' },
	{ params: [{}], tobe: '' },
)

test('toNumber', _.toNumber,
	{ param: 1, tobe: 1 },
	{ param: '1', tobe: 1 },
	{ param: null, tobe: 0 },
	{ param: NaN, tobe: 0 },
	{ param: undefined, tobe: 0 },
	{ param: -1, tobe: -1 },
	{ param: 10000, tobe: 10000 },
)

test('clamp', _.clamp,
	{ params: [100, - 1, 1], tobe: 1 },
	{ params: [-100, - 1, 1], tobe: -1 },
	{ params: [10, -5, 5], tobe: 5 },
	{ params: [-10, -5, 5], tobe: -5 },
)

test('inRange', _.inRange,
	{ params: [0], tobe: true },
	{ params: [0, 1], tobe: false },
	{ params: [0, 1, 2], tobe: false },
)

test('round', _.round,
	{ param: 1, tobe: 1 },
	{ param: [1.05, 2], tobe: '>1.05', type: 'Match' },
	{ param: [1.056, 2], tobe: '<2', type: 'Match' },

)

test('between', _.between,
	{ params: [123, - 1, 1234], tobe: true },
	{ params: [100, 99, 1000], tobe: true },
	{ params: [1000, 99, 1000], tobe: false },
)


test('toThousands', _.toThousands,
	{ param: 1, tobe: '1' },
	{ param: '1', tobe: '1' },
	{ param: 1000, tobe: '1,000' },
	{ param: '1000', tobe: '1,000' },
	{ param: 1000000, tobe: '1,000,000' },
	{ param: '1000000', tobe: '1,000,000' }
)
