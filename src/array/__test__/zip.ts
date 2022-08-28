import * as _Array from '../index'
import * as _ from '../index'
import { test } from 'rh-test'

test('zip', _Array.zip,
	{ 
		params: [['fred', 'barney'], [30, 40], [true, false]], 
		tobe: [['fred', 30, true], ['barney', 40, false]]
	}
)