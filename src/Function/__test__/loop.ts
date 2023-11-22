import { test } from 'unit-testing-js'
import { loop } from '..'

const result: any[] = []

loop([
	[2, 3, 2],
	[1, 3, 4],
], (values: any, indexes: any) => {
	result.push({ values, indexes })
})

const value = [
	{ values: [2, 1], indexes: [0, 0] },
	{ values: [2, 3], indexes: [0, 1] },
	{ values: [2, 4], indexes: [0, 2] },
	{ values: [3, 1], indexes: [1, 0] },
	{ values: [3, 3], indexes: [1, 1] },
	{ values: [3, 4], indexes: [1, 2] },
	{ values: [2, 1], indexes: [2, 0] },
	{ values: [2, 3], indexes: [2, 1] },
	{ values: [2, 4], indexes: [2, 2] },
]
test('loop',
	{ param: result, tobe: value }
)