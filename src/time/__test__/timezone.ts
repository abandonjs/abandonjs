import { UnitTest } from 'unit-testing-js'
import { timezone } from '..'

const oDate = new Date('2022-12-11T07:58:07.945Z')
const tDate = new Date('2022-12-11T15:58:07.945Z')

// console.log( timezone('1', 9 * 3600000)(oDate).toString() === tDate.toString())

UnitTest(timezone('1', 9 * 3600000))
	.addParamMap([oDate])
	.tobe(tDate)
	.buildCases()
	// .log('cases')
	.run()