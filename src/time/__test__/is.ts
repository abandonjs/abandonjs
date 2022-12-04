import { UnitTest, BaseValueMap } from 'unit-testing-js'
import { likeDate } from '..'

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
	.tobe(true,true,true,true,true)
	.setIndexValues({
		69: true
	})
	.buildCases()
	.run()