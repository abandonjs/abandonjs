import { UnitTest } from 'unit-testing-js'
import { size } from '..'

UnitTest(size)
	.addCases(
		{ param: 'string', tobe: 6 },
		{ param: 'string'.split(''), tobe: 6 },
		{ param: { a: 1, b: 2, c: 3 }, tobe: 3 },
	)
	.run()