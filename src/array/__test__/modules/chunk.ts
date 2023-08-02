import { test, Cases, UnitTest, BaseValueMap } from 'unit-testing-js'
import { chunk } from '..'

test('chunk', chunk,
	{ params: [[1, 1, 1, 1], 2], tobe: [[1, 1], [1, 1]] },
)