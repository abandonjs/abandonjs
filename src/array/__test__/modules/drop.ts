import { test } from 'unit-testing-js'
import { drop, dropRight } from '../..'


const t1 = [1, 2, 3, 4]

test('drop', drop,
	{ params: [[1, 2, 3, 4]], tobe: [1, 2, 3, 4] },
	{ params: [[1, 2, 3, 4], 2], tobe: [3, 4] },
	{ name: '影响元数据', params: [t1, 1], tobe: t1 }
)


test('dropRight', dropRight,
	{ params: [[1, 1, 1, 2]], tobe: [1, 1, 1] },
	{ params: [[1, 1, 1, 1], 2], tobe: [1, 1] },
	{ params: [[1, 2, 3]], tobe: [1, 2] },
	{ params: [[1, 2, 3, 9, 10], 4], tobe: [1] },
	{ params: [[1, 2, 3], 2], tobe: [1] },
	{ params: [[1, 2, 3], 5], tobe: [] },
	{ params: [[1, 2, 3], 0], tobe: [1, 2, 3] },
)