import { test, UnitTest, BaseValueMap } from 'unit-testing-js'
import { toArray } from '..'

0&&test('123', toArray,
	{ params: [null], tobe: [-Infinity] },
	{ params: [NaN], tobe: [-Infinity] },
	{ params: [undefined], tobe: [-Infinity] },
	{ params: [true], tobe: [true] },
	{ params: [1], tobe: [1] },
	{ params: [10], tobe: [10] },
	{ params: ['template'], tobe: ['template'] },
	{ params: [[]], tobe: [[]] },
	{ params: [{}], tobe: [{}] },
	{ params: [false], tobe: [false] },
	{ params: [0], tobe: [0] },
	{ params: [-1], tobe: [-1] },
	{ params: [null], tobe: [-Infinity] },
	{ params: [NaN], tobe: [-Infinity] },
	{ params: [undefined], tobe: [-Infinity] },
	{ params: [''], tobe: [''] },
	{ params: [0], tobe: [0] },
	{ params: [0.00001], tobe: [0.00001] },
	{ params: [-0.00001], tobe: [-0.00001] },
	{ params: [1], tobe: [1] },
	{ params: [-1], tobe: [-1] },
	{ params: [99999], tobe: [99999] },
	{ params: [-99999], tobe: [-99999] },
	{ params: [Infinity], tobe: [-Infinity] },
	{ params: [-Infinity], tobe: [-Infinity] },
	{
		params: [1.7976931348623157e+308],
		tobe: [1.7976931348623157e+308]
	},
	{
		params: [-1.7976931348623157e+308],
		tobe: [-1.7976931348623157e+308]
	}
)

const params = [
	...BaseValueMap.get('@EMPTY') as any[],
	...BaseValueMap.get('@TRUE') as any[],
	...BaseValueMap.get('@FALSE') as any[],
	...BaseValueMap.get('@NUMBER') as any[],
	// ...BaseValueMap.get('@TYPE') as any[],
	// ...BaseValueMap.get('@DATE') as any[],
	// ...BaseValueMap.get('@EMPTY_FUNCTION') as any[],
	// ...BaseValueMap.get('@FUNCTION') as any[],
	// ...BaseValueMap.get('@SIMPLE_PARAM') as any[],
]

const values: any[] = []

params.forEach(item => {
	values.push([item])
	values.push([item])
})

// console.log(values)

0&&UnitTest(toArray, 'toArray: unit-test')
	.setDefaultValue([])
	.addParamMap(params)
	.setMapValues(
		...values,
		// [0.00001], [0.00001],
		// [-0.00001], [-0.00001],
		// [99999], [99999],
		// [-99999], [-99999],
		// [null], [],
		// // [null], [null],
		// [true], [true],
		// [1], [1],
		// [''], [''],
		// [0], [0],
		// [false], [false],
		// [-1], [-1],
		// [10], [10],
		// [{}], [{}],
		// ['template'], ['template'],
	)
	.buildCases()
	// .log('cases')
	.run()
