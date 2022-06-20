import * as _ from '../index'
import { test, expect } from 'rh-test'

const sym = Symbol(12)
test('equal', 
	expect(_.equal).setParams(1, 1).tobeTruthy(),
	expect(_.equal).setParams([1], [1]).tobeTruthy(),
	expect(_.equal).setParams({}, {}).tobeTruthy(),
	expect(_.equal).setParams({a:1}, {a: 1 }).tobeTruthy(),
	expect(_.equal).setParams(sym, sym).tobeTruthy(),
	expect(_.equal).setParams(Symbol(123), Symbol(123)).tobeFalse(),
	expect(_.equal).setParams(Symbol(1234), Symbol(123)).tobeFalse(),
	expect(_.equal).setParams(NaN, NaN).tobeTruthy(),
	expect(_.equal).setParams(undefined, undefined).tobeTruthy(),
	expect(_.equal).setParams(null, null).tobeTruthy(),
	expect(_.equal).setParams(undefined, null).tobeFalse(),
	expect(_.equal).setParams('', undefined).tobeFalse(),
	expect(_.equal).setParams(null, '').tobeFalse(),
)

const tmpObj = {
		a: { b: { c: { 
			e: 12356, 
			d: [0, 233] 
		} } }
	}
test('matchStringValue',
	expect(_.matchValue(tmpObj, '>140', 'a.b.c.d.1')).tobeTruthy(),
	expect(_.matchValue(123, '>=123')).tobeTruthy(),
	expect(_.matchValue(123, '>=123')).tobeTruthy(),
	expect(_.matchValue(123, '<=123')).tobeTruthy(),
	expect(_.matchValue(123, '!=122')).tobeTruthy(),
	expect(_.matchValue(123, '<>124')).tobeTruthy(),
	expect(_.matchValue([], [])).tobeTruthy(),
	expect(_.matchValue(false, /false/)).tobeTruthy(),
	expect(_.matchValue(true, /tr.*/)).tobeTruthy(),
	expect(_.matchValue('abb', /(?<=a)[a-z]*/)).tobeTruthy(),
	expect(_.matchValue(123, 123)).tobeTruthy(),
	expect(_.matchValue(123, /12.*/)).tobeTruthy(),
	expect(!_.matchValue(123, /132.*/)).tobeTruthy(),
	// expect(/(?<=(<)[1-9]+)/.test('<123')).tobeTruthy(),
	// expect(/(?<=([<>=])[1-9]+)/.test('=123')).tobeTruthy(),
	// expect(/(?<=([<>=])[1-9]+)/.test('>123')).tobeTruthy(),
	// expect(/(?<=([<>=])[1-9]+)/.test('>=123')).tobeTruthy(),
	// expect(/(?<=([<>=])[1-9]+)/.test('<=123')).tobeTruthy(),
	// expect(/(?<=([<>=])[1-9]+)/.test('<>=123')).tobeTruthy(),
	// expect(/(?<=([<>=])[1-9]+)/.test('<>123')).tobeTruthy(),
)