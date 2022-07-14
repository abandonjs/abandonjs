import * as _Array from '../index'
import * as _ from '../index'
import { test } from 'rh-test'

test<any, any>('toArray', _.toArray,
	{ param: [], tobe: [] },
	{ param: 1, tobe: [1] },
	{ param: 33, tobe: [33] },
	{ param: [{}, 1], tobe: [{}, 1] },
)

test<any, any>('isArray', _.isArray,
	{ param: [], tobe: true },
	{ param: 1, tobe: false },
	{ param: 33, tobe: false },
	{ param: [{}, 1], tobe: true },
)


test('dropRight', _.dropRight,
	{ params: [[1, 2, 3]], tobe: [1, 2] },
	{ params: [[1, 2, 3, 9, 10], 4], tobe: [1] },
	{ params: [[1, 2, 3], 2], tobe: [1] },
	{ params: [[1, 2, 3], 5], tobe: [] },
	{ params: [[1, 2, 3], 0], tobe: [1, 2, 3] },
)

test('pick', _.pick,
	{ param: [1, 2, 3], tobes: ['<=3', '>=1'], type: 'Match' }
)

test('unique', _.unique,
	{ param: [1, 1, 1, 1], tobe: [1] }
)

test('chunk', _.chunk,
	{ params: [[1, 1, 1, 1], 2], tobe: [[1, 1], [1, 1]] },
)

test('concat', _.concat,
	{ params: [[1, 1, 1, 1], 2, [3]], tobe: [1, 1, 1, 1, 2, 3] },
)

test('drop', _.drop,
	{ params: [[1, 2, 3, 4]], tobe: [1, 2, 3, 4] },
	{ params: [[1, 2, 3, 4], 2], tobe: [3, 4] },
)

test('dropRight', _.dropRight,
	{ params: [[1, 1, 1, 2]], tobe: [1, 1, 1] },
	{ params: [[1, 1, 1, 1], 2], tobe: [1, 1] },
)

test('fill', _.fill,
	{ params: [[1, 2, 3], 4, 1], tobe: [1, 2, 3, 4] }
)

test('difference', _.difference,
	{ params: [[1, 2, 3], 4, 1], tobe: [2, 3] }
)

test('filter', _.filter,
	{ params: [[{ a: 123 }, { a: 456 }, 12], { a: 123 }], tobe: [{ a: 123 }] },
	{ params: [[{ a: 123 }, { a: 456 }, 12], { a: 123 }, true], tobe: [{ a: 123 }, 12] },
)

test('select', _.select,
	{ params: [[]], tobe: null },
	{ params: [[1, 2, 3, 4, 5, 6], 0], tobe: 1 },
	{ params: [[1, 2, 3, 4, 5, 6], 7], tobe: 2 },
	{ params: [[1, 2, 3, 4, 5, 6], -7], tobe: 6 },
	{ param: [1, 2, 3, 4, 5, 6], tobes: [1, 2, 3, 4, 5, 6], type: 'Match' },
	{ params: [[1, 2, 3, 4, 5, 6], 2], tobe: 3, type: 'Match' },
)

test('selects', (list, min, max) => _.selects(list, min, max).length,
	{ params: [[], 0, 0], tobe: 0 },
	{ params: [[1, 2, 3, 4, 5, 6], 2, 6], tobes: ['>2', '<=6'], type: 'Matcher' },
	{ params: [[1, 2, 3, 4, 5, 6], 2, 6], tobes: ['>2', '<=6'], type: 'Matcher' },
	{ params: [[1, 2, 3, 4, 5, 6], 2, 6], tobes: ['>2', '<=6'], type: 'Matcher' },
	{ params: [[1, 2, 3, 4, 5, 6], 2, 6], tobes: ['>2', '<=6'], type: 'Matcher' },
	{ params: [[1, 2, 3, 4, 5, 6], 2, 6], tobes: ['>2', '<=6'], type: 'Matcher' },
)