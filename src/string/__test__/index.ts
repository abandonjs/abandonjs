import * as _ from '../index'
import { test } from 'rh-test'

test('hide', _.hide,
	{ params: ['abcd'], tobe: '****' },
	{ params: ['abcd', 2], tobe: 'a***' },
	{ params: ['abcd', 2, 4], tobe: 'a***' },
	{ params: ['abcd', 2, 3], tobe: 'a**d' },
)

// test('replaces',_.replaces,
// 	expect(_.replaces).().tobe(''),
// 	expect(_.replaces).('123').tobe('123'),
// 	expect(_.replaces).('123',[{reg:'12', value: '99'}]).tobe('993'),
// 	expect(_.replaces).setParams('123', [{
// 		reg: /1/,
// 		value: 'aaa'
// 	}]).tobe('aaa23'),
// )