import { UnitTest } from 'unit-testing-js'
import { compareString } from '..'

UnitTest(compareString)
.addParamMap(
  ['1a','1b','1c'],
  ['1', 'a', 'b', 'c', '10', 'g']
)
.setDefaultValue(true)
.buildCases().run()

UnitTest(compareString)
.addParamMap(
  ['1a','1b','1c'],
  ['1e', '1g', '100']
)
.setDefaultValue(false)
.buildCases().run()