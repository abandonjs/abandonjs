import * as _ from '..'
import { test } from 'unit-testing-js'

const tmpObj = {
	a: {
		b: {
			c: {
				e: 12356,
				d: [0, 233],
				f: false,
				fs: 'false',
				g: true,
			}
		}
	}
}

test('toPathValue', _.toPathValue,
{
	params: [
		tmpObj,
		'a.b.c.e'
	],
	tobe: 12356
},
	{
		params: [{
			['a.2.3']: {
				4: 123
			}
		}, 'a\\.2\\.3.4'], tobe: 123
	},
)
