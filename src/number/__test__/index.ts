import * as _ from '../index'
import { test as tst, expect } from 'rh-test'
import { once } from '../../function'
import { MAX_VALUES_NUMBER } from '../../constants'
const test = once(tst)
// const test = tst

test('isNumber',
	expect(_.isNumber).setParams(MAX_VALUES_NUMBER).tobe(true),
	expect(_.isNumber).setParams('1').tobe(false),
	expect(_.isNumber).setParams(null).tobe(false),
	expect(_.isNumber).setParams(NaN).tobe(false),
	expect(_.isNumber).setParams(undefined).tobe(false),
	expect(_.isNumber).setParams(-1).tobe(true),
	expect(_.isNumber).setParams(10000).tobe(true),
)



test('isEffectNumber',
	expect(_.isEffectNumber).setParams(1).tobe(true),
	expect(_.isEffectNumber).setParams('1').tobe(false),
	expect(_.isEffectNumber).setParams(null).tobe(false),
	expect(_.isEffectNumber).setParams(NaN).tobe(false),
	expect(_.isEffectNumber).setParams(undefined).tobe(false),
	expect(_.isEffectNumber).setParams(-1).tobe(true),
	expect(_.isEffectNumber).setParams(10000).tobe(true),
	expect(_.isEffectNumber).setParams(MAX_VALUES_NUMBER*9999).tobe(false),
	expect(_.isEffectNumber).setParams(Infinity).tobe(false),
	expect(_.isEffectNumber).setParams(MAX_VALUES_NUMBER).tobe(true),
	expect(_.isEffectNumber).setParams(-MAX_VALUES_NUMBER*9999).tobe(false),
	expect(_.isEffectNumber).setParams(-Infinity).tobe(false),
)

test('toNumber',
	expect(_.toNumber).setParams(1).tobe(1),
	expect(_.toNumber).setParams('1').tobe(1),
	expect(_.toNumber).setParams(null).tobe(0),
	expect(_.toNumber).setParams(NaN).tobe(0),
	expect(_.toNumber).setParams(undefined).tobe(0),
	expect(_.toNumber).setParams(-1).tobe(-1),
	expect(_.toNumber).setParams(10000).tobe(10000),
)

test('isFloat',
	expect(_.isFloat).setParams(1).tobe(false),
	expect(_.isFloat).setParams(1.1).tobe(true),
	expect(_.isFloat).setParams(1.0).tobe(false),
	expect(_.isFloat).setParams(0.0).tobe(false),
)


test('clamp',
	expect(_.clamp).setParams(100, -1, 1).tobe(1),
	expect(_.clamp).setParams(-100, -1, 1).tobe(-1),
	expect(_.clamp(10, -5, 5)).tobe(5),
	expect(_.clamp(-10, -5, 5)).tobe(-5),
)

test('random',
	expect(_.random).setParams(1, 1).tobe(1),
	expect((a, b) => _.inRange(_.random(a, b), a, b)).setParams(3, 4).tobe(true),
	expect((a, b) => _.inRange(_.random(a, b, true), a, b)).setParams(3, 4).tobe(true),
)

test('inRnage',
	expect(_.inRange).setParams(0).tobe(true),
	expect(_.inRange).setParams(0, 1).tobe(false),
	expect(_.inRange).setParams(0, 1, 2).tobe(false),
)

test('round',
	expect(_.round(1)).tobe(1),
	expect(_.round).setParams(1.05, 2).tobe(1.05),
	expect(_.round).setParams(1.056, 2).tobe(1.06),
)


test('between',
	expect(_.between).setParams(123, -1, 1234).tobe(true),
	expect(_.between).setParams(100, 99, 1000).tobe(true),
	expect(_.between).setParams(1000, 99, 1000).tobe(false),
)


test('toThousands',
	expect(_.toThousands).setParams(1).tobe('1'),
	expect(_.toThousands).setParams('1').tobe('1'),
	expect(_.toThousands).setParams(1000).tobe('1,000'),
	expect(_.toThousands).setParams('1000').tobe('1,000'),
	expect(_.toThousands).setParams(1000000).tobe('1,000,000'),
	expect(_.toThousands).setParams('1000000').tobe('1,000,000')
)


// logGroup('isNumber',
// 	_.isNumber(-1),
// 	_.isNumber(1),
// 	_.isNumber(-1.2),
// )
// logGroup(
//   'countingMethod',
//   _.countingMethod(1024),
//   _.countingMethod(1024 * 12),
//   _.countingMethod(1024 ** 3 + 1024 * 12 + 12),
//   _.countingMethod(1024 * 12),
//   _.countingMethod(1024 * 12)
// )
