import { test, UnitTest } from 'unit-testing-js'
import { loop, loops, loopGroup, loopArrays } from '..'

UnitTest(loop, 'loop')
	.addParamMap(
		[0, 3, 2],
		[v => v]
	)
	.addParam([1])
	.tobe(
		[],
		[[1, 0], [1, 1], [1, 2]],
		[[1, 0], [1, 1]]
	)
	.setDefaultValue([])
	.buildCases()
	.run()

UnitTest(loops, 'loops')
	.addParamMap(
		[[2, 3, 2]]
	)
	.tobe(
		[
			[
				[[0, 0, 0], [0, 0, 1]],
				[[0, 1, 0], [0, 1, 1]],
				[[0, 2, 0], [0, 2, 1]]
			],
			[
				[[1, 0, 0], [1, 0, 1]],
				[[1, 1, 0], [1, 1, 1]],
				[[1, 2, 0], [1, 2, 1]]
			]
		]
	)
	.setDefaultValue([])
	.buildCases()
	.run()


UnitTest(loopGroup, 'loopGroup')
	.addParamMap(
		[[2, 3, 2]]
	)
	.tobe(
		[
			[0, 0, 0], [0, 0, 1],
			[0, 1, 0], [0, 1, 1],
			[0, 2, 0], [0, 2, 1],
			[1, 0, 0], [1, 0, 1],
			[1, 1, 0], [1, 1, 1],
			[1, 2, 0], [1, 2, 1]
		]
	)
	.setDefaultValue([])
	.buildCases()
	.run()

UnitTest(loopArrays, 'loopArrays')
	.addParam(
		[
			[1, 2, 3],
			[4, 5, 6, 7],
		]
	)
	.addParamMap([
		e => {
			return e
		},
		e => e,
	])
	.tobe(
		[[1,4],[1,5],[1,6],[1,7],[2,4],[2,5],[2,6],[2,7],[3,4],[3,5],[3,6],[3,7]],
		[[1,4],[1,5],[1,6],[1,7],[2,4],[2,5],[2,6],[2,7],[3,4],[3,5],[3,6],[3,7]]
	)
	.setDefaultValue([])
	.buildCases()
	// .log('cases')
	.run()