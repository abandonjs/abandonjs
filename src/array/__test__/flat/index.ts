import { test, BaseValueMap, UnitTest } from 'unit-testing-js'
import { flat } from '../..'
import './flat-runtime.test'

test('flat-case-1', flat,
	{ name: 'depth=1-1', param: [1, [2, [3, 4, 5]]], tobe: [1, 2, [3, 4, 5]] },
	{ name: 'depth=1-2', params: [[1, [2, [3, 4, 5]]], 1], tobe: [1, 2, [3, 4, 5]] },
	{ name: 'depth=2-1', params: [[1, [2, [3, 4, 5]]], 2], tobe: [1, 2, 3, 4, 5] },
	{ name: 'depth=2-2', params: [[1, [2, [3, 4, 5]]], 2], tobe: [1, 2, 3, 4, 5] },
	{ name: 'depth=2-3', params: [[1, [2, [3, 4, 5]], {}], 2], tobe: [1, 2, 3, 4, 5, {}] },
	{ name: 'depth=2-4', params: [[1, [2, [3, 4, 5]], {}, undefined], 2], tobe: [1, 2, 3, 4, 5, {}, undefined] },
	{ tobe: [] },
	{ param: undefined, tobe: [] },
	{ param: null, tobe: [] },
	{ param: NaN, tobe: [] },
	{ param: false, tobe: [false] },
	{ param: '', tobe: [''] },
	{ param: {}, tobe: [{}] },
)

UnitTest(flat, 'flat')
	.setDefaultValue([])
	.addParamMap([
		['a', ['b'], [['c']]],
		['a', ['b'], [['c']], [[['d']]]],
		123,
	])
	.addParam(2)
	.tobe(
		['a', 'b', 'c',],
		['a', 'b', 'c', ['d']],
		[123],
	)
	.buildCases()
	.run()