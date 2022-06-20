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