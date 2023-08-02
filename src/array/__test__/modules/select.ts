import { test } from 'unit-testing-js'
import { select, selects } from '../..'

test('select', select,
	{ params: [[]], tobe: null },
	{ params: [[1, 2, 3, 4, 5, 6], 0], tobe: 1 },
	{ params: [[1, 2, 3, 4, 5, 6], 7], tobe: 2 },
	{ params: [[1, 2, 3, 4, 5, 6], -7], tobe: 6 },
	{ param: [1, 2, 3, 4, 5, 6], tobes: [1, 2, 3, 4, 5, 6], type: 'Match' },
	{ params: [[1, 2, 3, 4, 5, 6], 2], tobe: 3, type: 'Match' },
)

test('selects', (list, min, max) => selects(list, min, max).length,
	{ params: [[], 0, 0], tobe: 0 },
	{ params: [[1, 2, 3, 4, 5, 6], 2, 6], tobes: ['>2', '<=6'], type: 'Matcher' },
	{ params: [[1, 2, 3, 4, 5, 6], 2, 6], tobes: ['>2', '<=6'], type: 'Matcher' },
	{ params: [[1, 2, 3, 4, 5, 6], 2, 6], tobes: ['>2', '<=6'], type: 'Matcher' },
	{ params: [[1, 2, 3, 4, 5, 6], 2, 6], tobes: ['>2', '<=6'], type: 'Matcher' },
	{ params: [[1, 2, 3, 4, 5, 6], 2, 6], tobes: ['>2', '<=6'], type: 'Matcher' },
)