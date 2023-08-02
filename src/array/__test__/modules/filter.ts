import { test, Cases, UnitTest, BaseValueMap } from 'unit-testing-js'
import { filter } from '..'

test('filter', filter,
	{ params: [[{ a: 123 }, { a: 456 }, 12], { a: 123 }], tobe: [{ a: 123 }] },
	{ params: [[{ a: 123 }, { a: 456 }, 12], { a: 123 }, true], tobe: [{ a: 123 }, 12] },
)

test('filter-no-filterCondition', filter,
	...Cases('@EMPTY', 123, '@EMPTY').map(item => {
		item.tobe = item.params
		item.params = [item.params]
		return item
	})
)


UnitTest(filter, 'filter:list no array')
	.addParamMap(
		BaseValueMap.get('@EMPTY')
	)
	.setDefaultValue([])
	.buildCases()
	// .log('cases')
	.run()

UnitTest(filter, 'filter:filterCondition=function')
	.addParamMap(
		[BaseValueMap.get('@EMPTY')]
	)
	.addParamMap([
		Boolean
	])
	.setDefaultValue([])
	.buildCases()
	// .log('cases')
	.run()

UnitTest(filter, 'filter:filterCondition=ObjectType')
	.addParamMap(
		[
			[{ a: 1, b: '1' }, { b: 1 }, { a: 1, b: '1', c: 3 }, {}],
			[{ a: 1, b: '1' }, { b: 1, a: 0 }, { a: 1, b: '1', c: 3 }, {}]
		].map(item => BaseValueMap.get('@EMPTY').concat(item))
	)
	.addParamMap([
		{ a: 1 },
		{ a: /1/ },
		{ b: '1' },
		{ a: /1/, b: '1' }
	])
	.setDefaultValue([
		{ a: 1, b: '1' },
		{ a: 1, b: '1', c: 3 }
	])
	.buildCases()
	// .log('cases')
	.run()

UnitTest(filter, 'filter:filterCondition=function')
	.addParamMap(
		[BaseValueMap.get('@EMPTY')]
	)
	.addParamMap([
		Boolean
	])
	.setDefaultValue([])
	.buildCases()
	// .log('cases')
	.run()

// UnitTest(filter, 'filter:filterCondition=Record<string, any>, retainNotObject=true')
// 	.addParamMap(
// 		[
// 			[{ a: 1, b: '1' }, { b: 1 }, { a: 1, b: '1', c: 3 }, {}],
// 			[{ a: 1, b: '1' }, { b: 1, a: 0 }, { a: 1, b: '1', c: 3 }, {}]
// 		].map(item => BaseValueMap.get('@EMPTY').concat(item))
// 	)
// 	.addParamMap([
// 		{ a: 1 },
// 		{ a: /1/ },
// 		{ b: '1' },
// 		{ a: /1/, b: '1' }
// 	])
// 	.addParam(true)
// 	.setDefaultValue([
// 		{ a: 1, b: '1' },
// 		{ a: 1, b: '1', c: 3 }
// 	])
// 	.buildCases()
// 	// .log('cases')
// 	.run()

// test('filter-filterConditions=Boolean', filter,
// 	...Cases('@EMPTY', 123, '@EMPTY').map(item => {
// 		item.tobe = [123]
// 		item.params = [item.params, Boolean]
// 		return item
// 	})
// )

// test('filter-filterConditions=Object', filter,
// 	...Cases('@EMPTY', 123, '@EMPTY').map(item => {
// 		const tempValue = item.params
// 		item.tobe = [{ ...tempValue }]
// 		item.params = [[tempValue, { ...tempValue }], { 1: 2 }]
// 		return item
// 	})
// )