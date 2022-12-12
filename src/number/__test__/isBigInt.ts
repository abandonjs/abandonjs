import { UnitTest } from 'unit-testing-js'
import { isBigInt } from '..'

console.log(BigInt(123).toString())

UnitTest(isBigInt)
	.setDefaultValue(true)
	.addParamMap([
		// [BigInt(9007199254740991), BigInt("9007199254740991")]
	])
	.buildCases()
	.run()