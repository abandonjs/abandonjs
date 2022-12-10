import { test } from 'unit-testing-js'
import { runFunc } from '..'

test('runFunc', runFunc,
	{ params: [() => 3], tobe: 3 },
	{ params: [(a) => 3 + a, 2], tobe: 5 },
	{ params: [async () => 3], tobe: 3 },
	{ params: [async (a) => 3 + a, 2], tobe: 5 },
)