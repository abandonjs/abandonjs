import { UnitTest, BaseValueMap } from 'unit-testing-js'
import { isArray } from '..'

UnitTest(isArray, 'isArray')
	.addParamMap([[]].concat(BaseValueMap.get('@EMPTY')))
	.addCases(
		{ params: [[]], tobe: true },
		{ params: [1], tobe: false },
		{ params: [33], tobe: false },
		{ params: [[{}, 1]], tobe: true }
	)
	.setDefaultValue(false)
	.setIndexValues({
		0: true
	})
	// .tobe(true)
	.buildCases()
	// .log('cases')
	.run()
