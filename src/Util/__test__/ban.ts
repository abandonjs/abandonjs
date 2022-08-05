import { test, add, asyncAdd } from 'rh-test'
import { ban, CatchError, asyncBan, asyncCatchError } from '..'

test('ban & catchError: count',
	CatchError(ban(add, { count: 10 }), -1),
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

test('ban & catchError: timeout ',
	asyncCatchError(asyncBan(asyncAdd, { timeout: 10 }), -1),
	{ params: [1, 2], tobe: -1 },
)