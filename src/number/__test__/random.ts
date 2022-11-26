import * as _ from '../index'
import { test } from 'unit-testing-js'

test('random', _.random,
	{ params: [1.01, 1.03], tobes: ['<=1.3', '>=1.1'], type: 'Match' },
	{ tobes: ['<1', '>0'], type: 'Match' },
	{ params: [1, 1], tobe: 1 },
	{ params: [1.1, 1.3], tobes: ['<=1.3', '>=1.1'], type: 'Match' },
	{ params: [3, 4], tobes: ['<=4', '>=3'], type: 'Match' },
	{ params: [-3, 4], tobes: ['<=4', '>=-3'], type: 'Match' },
	{ params: [3, 4], tobe: '>2', type: 'Match' },
)
