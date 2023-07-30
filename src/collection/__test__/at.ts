import { UnitTest } from 'unit-testing-js'
import { at } from '..'

UnitTest(at, 'at')
	.addParamMap(
		[
			[1, 24, 9, 0],
			'abee,fg',
		],
		[0, 1, 3, 9, -1]
	)
	.setIndexValues({
		0: 1,
		1: 24,
		2: 0,
		3: 0,
		4: 0,
		5: 'abee,fg'[0],
		6: 'abee,fg'[1],
		7: 'abee,fg'[3],
		8: 'abee,fg'[6],
		9: 'abee,fg'[6],
	})
	.buildCases()
	// .log('cases')
	.run()

UnitTest(at, 'at-Object')
	.addParamMap(
		[
			{
				a: 1,
				b: 2,
			}
		],
		['a', 'b', 'c']
	)
	.setIndexValues({
		0: 1,
		1: 2,
	})
	.buildCases()
	// .log('cases')
	.run()