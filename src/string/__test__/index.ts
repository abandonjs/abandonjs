import * as _ from '../index'
import { test, expect } from 'rh-test'

test('replaces',
	expect(_.replaces).setParams().tobe(''),
	expect(_.replaces).setParams('123').tobe('123'),
	expect(_.replaces).setParams('123',[{reg:'12', value: '99'}]).tobe('993'),
	expect(_.replaces).setParams('123', [{
		reg: /1/,
		value: 'aaa'
	}]).tobe('aaa23'),
)