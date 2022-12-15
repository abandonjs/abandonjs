import { test, UnitTest, BaseValueMap } from 'unit-testing-js'
import { likeDate, isDate, isSameDate } from '..'

test('isDate', isDate,
	{ params: ['123'], tobe: false },
	{ params: [new Date()], tobe: true },
	{ params: [new Date().getTime()], tobe: false },
	// { params: [new Date().getTime()], tobe: true },
)

test('isSameDate', isSameDate,
	{ params: [new Date(), new Date()], tobe: true },
	{ params: [new Date().getTime(), new Date()], tobe: true },
	{ params: [new Date(), 123], tobe: false },
	{ params: [123, new Date()], tobe: false },
	{ params: [123, 123], tobe: false },
)
const paramList = BaseValueMap.get('@DATE').concat(
	BaseValueMap.get(
		'@EMPTY', '@TRUE', '@FALSE',
		'@NUMBER', '@TYPE', '@PROMISE',
		'@EMPTY_FUNCTION', '@FUNCTION', '@SIMPLE_PARAM'
	)
)

UnitTest(likeDate, 'likeDate')
	.setDefaultValue(false)
	.addParamMap(paramList)
	.tobe(true, true, true, true, true)
	.setIndexValues({
		69: true
	})
	.buildCases()
	.run()