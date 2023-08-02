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



test('matchValue', _.matchValue,
	{ params: [tmpObj, tmpObj], tobe: true },
	{ params: [tmpObj.a, tmpObj, 'a'], tobe: true },
	{ params: [tmpObj, '>=123', 'a.b.c.1'], tobe: true },
	{ params: [tmpObj, '>=123', 'a.b.c.1'], tobe: true },
	{ params: [tmpObj, false, 'a.b.c.fs'], tobe: true },
	{ params: [tmpObj, false, 'a.b.c.f'], tobe: true },
	{ params: [tmpObj, '>140', 'a.b.c.d.1'], tobe: true },
	{ params: [123, '>=123'], tobe: true },
	{ params: [123, '>=123'], tobe: true },
	{ params: [123, '<=123'], tobe: true },
	{ params: [123, '!=122'], tobe: true },
	{ params: [123, '<>124'], tobe: true },
	{ params: [[], []], tobe: true },
	{ params: [false, /false/], tobe: true },
	{ params: [true, /tr.*/], tobe: true },
	{ params: ['abb', /(?<=a)[a-z]*/], tobe: true },
	{ params: [123, 123], tobe: true },
	{ params: [123, /12.*/], tobe: true },
	{ params: [123, /132.*/], tobe: false },
)

