import { UnitTest, BaseValueMap } from 'unit-testing-js'
import { stringify } from '.'

function test() {
	console.log('test')
}

UnitTest(stringify, 'stringify:space')
	.addParamMap([
		{ a: '123', b: '345' },
		test
	])
	.addParamMap([null])
	.addParamMap([2])
	.setIndexValues({
		1: JSON.stringify(test.toString(), null, 2).replace(/^(")+|(")+$/g, '')
	})
	.setMapValues(
		[{ a: '123', b: '345' }, null, 2], `{
  "a": "123",
  "b": "345"
}`
	)
	.buildCases()
	// .log('cases')
	.run()

	false &&
UnitTest(stringify, 'stringify')
	.addParamMap(BaseValueMap.get(
		'@EMPTY', '@TRUE', '@FALSE', '@NUMBER',
		'@EMPTY_FUNCTION', '@FUNCTION', '@DATE'
	).concat([
		/.+/,
		Symbol(),
		new Promise(resolve => resolve('Empty')),
		new Proxy({ a: 123, b: 456 }, {}),
		new Map(),
		new WeakMap(),
		new Set(),
		new WeakSet(),
		[1, 2, 3]
	]))
	.tobe(
		'null', 'NaN', 'undefined',
		'true', '1', '10', 'template', '[]', '{}',
		'false', '0', '-1', 'null', 'NaN',
		'undefined', '', '0', '0.00001', '-0.00001', '1',
		'-1', '99999', '-99999', 'Infinity', '-Infinity', '1.7976931348623157e+308',
		'-1.7976931348623157e+308', 'function(){}', '()=>{}', 'async function(){}',
		'async()=>{}', 'function*(){yield}', 'function(e){return e}', 'e=>e',
		'async function(e){return e}', 'async e=>e',
		'function*(e){yield e}', new Date(2022,12,2,4,13,14).toString()
	)
	.setIndexValues({
		42: "/.+/",
		43: 'Symbol()',
		44: '[object Promise]',
		45: JSON.stringify({ a: 123, b: 456 }),
		46: '[object Map]',
		47: '[object WeakMap]',
		48: '[object Set]',
		49: '[object WeakSet]',
		50: JSON.stringify([1, 2, 3])
	})
	.setMapValues(
		[1669900531674], '1669900531674',
		['1669900531674'], '1669900531674',
		[1669900531], '1669900531',
		['1669900531'], '1669900531',
	)
	.buildCases()
	// .log('cases')
	.run()

