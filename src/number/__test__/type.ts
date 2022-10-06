import * as _ from '../index'
import { test } from 'rh-test'

test('toFloat', _.toFloat,
	{ params: [12, 1], tobe: 12.0 }
)