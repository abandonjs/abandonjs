import * as _ from '../index'
import { test } from 'unit-testing-js'

test('type', _.type,
	{ param: '', tobe: 'String' },
	{ param: new String(), tobe: 'String' },
	{ param: [], tobe: 'Array' },
	{ param: new Array(), tobe: 'Array' },
	{ param: {}, tobe: 'Object' },
	{ param: new Object(), tobe: 'Object' },
	{ param: () => { }, tobe: 'Function' },
	{ param: new Function(), tobe: 'Function' },
	{ param: async () => { }, tobe: 'AsyncFunction' },
	{ param: function* a() { }, tobe: 'GeneratorFunction' },
	{ param: 123, tobe: 'Number' },
	{ param: 123.1, tobe: 'Number' },
	{ param: parseInt('aa'), tobe: 'NaN' },
	{ param: /a/, tobe: 'RegExp' },
	{ param: new Date(), tobe: 'Date' },
	{ param: undefined, tobe: 'Undefined' },
)

test('types', _.types,
	{ params: [['a', 123, 4]], tobe: ['String', 'Number'] },
	{ params: [['a', 123, 4], true], tobe: ['String', 'Number', 'Number'] },
)

test('toPathValue', _.toPathValue,
	{
		params: [{
			['a.2.3']: {
				4: 123
			}
		}, 'a\\.2\\.3.4'], tobe: 123
	},
)




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

