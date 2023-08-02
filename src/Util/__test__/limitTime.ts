import { test, add } from 'unit-testing-js'
import { limitTime, guard } from '..'

test('ban & catchError: count',
	guard(limitTime(add, { count: 10 }), -1),
	{ params: [1, 2], tobe: 3 },
	{ params: [1, 2], tobe: 3 },
	{ params: [1, 2], tobe: 3 },
	{ params: [1, 2], tobe: 3 },
	{ params: [1, 2], tobe: 3 },
	{ params: [1, 2], tobe: 3 },
	{ params: [1, 2], tobe: 3 },
	{ params: [1, 2], tobe: 3 },
	{ params: [1, 2], tobe: 3 },
	{ params: [1, 2], tobe: 3 },
	{ params: [1, 2], tobe: -1 },
)