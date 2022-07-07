import * as _ from '../index'
import { test } from 'rh-test'
import { MAX_VALUES_NUMBER } from '../../constants'


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

test('isNumber', _.isNumber,
	{ params: MAX_VALUES_NUMBER, tobe: true },
	{ params: '1', tobe: false },
	{ params: null, tobe: false },
	{ params: NaN, tobe: false },
	{ params: undefined, tobe: false },
	{ params: -1, tobe: true },
	{ params: 10000, tobe: true },
)



test('isEffectNumber', _.isEffectNumber,
	{ params: 1, tobe: true },
	{ params: '1', tobe: false },
	{ params: null, tobe: false },
	{ params: NaN, tobe: false },
	{ params: undefined, tobe: false },
	{ params: -1, tobe: true },
	{ params: 10000, tobe: true },
	{ params: MAX_VALUES_NUMBER * 9999, tobe: false },
	{ params: Infinity, tobe: false },
	{ params: MAX_VALUES_NUMBER, tobe: true },
	{ params: -MAX_VALUES_NUMBER * 9999, tobe: false },
	{ params: -Infinity, tobe: false },
)

test('toNumber', _.toNumber,
	{ params: 1, tobe: 1 },
	{ params: '1', tobe: 1 },
	{ params: null, tobe: 0 },
	{ params: NaN, tobe: 0 },
	{ params: undefined, tobe: 0 },
	{ params: -1, tobe: -1 },
	{ params: 10000, tobe: 10000 },
)

test('isFloat', _.isFloat,
	{ params: 1, tobe: false },
	{ params: 1.1, tobe: true },
	{ params: 1.0, tobe: false },
	{ params: 0.0, tobe: false },
)


test('clamp', _.clamp,
	{ params: [100, - 1, 1], tobe: 1 },
	{ params: [-100, - 1, 1], tobe: -1 },
	{ params: [10, -5, 5], tobe: 5 },
	{ params: [-10, -5, 5], tobe: -5 },
)

test('random', _.random,
	{ params: [1, 1], tobe: 1 },
	{ params: [3, 4], tobe: true },
	{ params: [3, 4], tobe: true },
)

test('inRnage', _.inRange,
	{ params: [0], tobe: true },
	{ params: [0, 1], tobe: false },
	{ params: [0, 1, 2], tobe: false },
)

test('round', _.round,
	{ params: 1, tobe: 1 },
	{ params: [1.05, 2], tobe: 1.05 },
	{ params: [1.056, 2], tobe: 1.06 },

)

test('between', _.between,
	{ params: [123, - 1, 1234], tobe: true },
	{ params: [100, 99, 1000], tobe: true },
	{ params: [1000, 99, 1000], tobe: false },
)


test('toThousands', _.toThousands,
	{ params: 1, tobe: '1' },
	{ params: '1', tobe: '1' },
	{ params: 1000, tobe: '1,000' },
	{ params: '1000', tobe: '1,000' },
	{ params: 1000000, tobe: '1,000,000' },
	{ params: '1000000', tobe: '1,000,000' }
)
