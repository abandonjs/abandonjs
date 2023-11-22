import { test, UnitTest, BaseValueMap } from 'unit-testing-js'
import { toString, toStrings } from '..'



test('toString', toString,
	{ param: 1, tobe: '1' },
	{ param: { a: 1 }, tobe: '{"a":1}' },
	{ param: [1, 2, '3'], tobe: '[1,2,"3"]' },
	{ param: BigInt(1).toString(), tobe: '1' }
)

UnitTest(toString, 'toString')
	.addParamMap(BaseValueMap.get(
		'@EMPTY', '@TRUE', '@FALSE', '@NUMBER',
		'@EMPTY_FUNCTION', '@FUNCTION', '@DATE'
	)
		.concat([
			/.+/,
			Symbol(),
			new Promise(resolve => resolve('Empty')),
			new Proxy({ a: 123, b: 456 }, {}),
			new Map(),
			new WeakMap(),
			new Set(),
			new WeakSet(),
		])
	)
	.tobe(
		'', '', '',
		'true', '1', '10', 'template', '[]', '{}',
		'false', '0', '-1', '', '',
		'', '', '0', '0.00001', '-0.00001', '1',
		'-1', '99999', '-99999', 'Infinity', '-Infinity', '1.7976931348623157e+308',
		'-1.7976931348623157e+308', 'function(){}', '()=>{}', 'async function(){}',
		'async()=>{}', 'function*(){yield}', 'function(e){return e}', 'e=>e',
		'async function(e){return e}', 'async e=>e',
		'function*(e){yield e}', new Date(2022, 12, 2, 4, 13, 14).toString()
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


test('toStrings', toStrings,
	{ param: [1, 2, 3, '4'], tobe: ['1', '2', '3', '4'] }
)