import { ProxyObject } from '..'
import { test, toBe } from 'unit-testing-js'


{
	interface PO {
		a: string
		[key: string]: any
	}
	const obj: PO = {} as PO
	const poObj = ProxyObject<PO>(obj, [
		{
			name: 'a5',
			// configurable: false,
			initProp: true,
			default: 12355,
			required: false,
			writable: false,
			// enumerable: false,
		},
		{
			name: 'a4',
			configurable: true,
			initProp: true,
			default: 123,
			required: false,
			writable: false,
			enumerable: false,
		},
		{
			name: 'a3',
			configurable: true,
			initProp: true,
			default: 123,
			required: true,
			writable: true,
		},
		{
			name: 'a2',
			initProp: true,
			default: 123,
		},
		{
			name: 'a',
			initProp: true,
		},
		{
			name: 'b',
			initProp: true,
			default: 333,
			type: 'string'
		},
		{
			name: 'b1',
			initProp: true,
			default: 333,
			type: 'string'
		},
		{
			name: 'c1',
			default: 'c',
			configurable: true,
		},
		{
			name: 'c2',
			default: 'c',
			configurable: false,
		},
		{
			name: 'd1',
			default: 'd',
			enumerable: true,
		},
		{
			name: 'd2',
			default: 'd',
			enumerable: false,
		},

		{
			name: 'e1',
			default: 'e',
			writable: true,
		},
		{
			name: 'e2',
			default: 'e',
			writable: false,
		},
		{
			name: 'f1',
			default: 'v',
			required: true,
		},
		{
			name: 'f2',
			default: 'v',
			required: true,
		},
		{
			name: 'f3',
			default: 'v',
			required: false,
		},

		{
			name: 'g1',
			default: 'v',
			once: true,
		},
		{
			name: 'g2',
			default: 'v',
			once: false,
		},

	])

	{
		poObj.g1 = 'vv'
		poObj.g1 = 'vvv'
		poObj.g2 = 'vv'
		poObj.g2 = 'vvv'
	}

	{
		poObj.f1 = null
		poObj.f2 = undefined
		poObj.f3 = 'vv'
	}

	{
		// e
		try {
			poObj.e1 = 'eee'
			poObj.e2 = 'eee'
		} catch (error) {

		}
	}
	{
		try {
			delete poObj.c1
			delete poObj.c2
		} catch (error) { }
	}
	{
		try {
			poObj.a4 = undefined
			poObj.a4 = 91
		} catch (error) { }
		try {
			poObj.a3 = undefined
			poObj.a3 = 99
		} catch (error) { }
		try {
			delete poObj.a5
		} catch (error) { }

		try {
			poObj.b = 123
		} catch (error) { }
		try {
			poObj.b = '123'
		} catch (error) { }
		try {
			poObj.b1 = 123
		} catch (error) { }
	}

	test('ProxyObject', toBe,
		{ name: 'g1', param: poObj.g1, tobe: 'vv' },
		{ name: 'g2', param: poObj.g2, tobe: 'vvv' },
		{ name: 'f1', param: poObj.f1, tobe: 'v' },
		{ name: 'f2', param: poObj.f2, tobe: 'v' },
		{ name: 'f2', param: poObj.f3, tobe: 'vv' },

		{ name: 'e1', param: poObj.e1, tobe: 'eee' },
		{ name: 'e2', param: poObj.e2, tobe: 'e' },

		{ name: 'a', param: poObj.a, tobe: undefined },
		{ name: 'b', param: poObj.b, tobe: '123' },
		{ name: 'b1', param: poObj.b1, tobe: undefined },

		{ name: 'c1', param: poObj.c1, tobe: undefined },
		{ name: 'c2', param: poObj.c2, tobe: 'c' },

		{ name: 'd1', param: poObj.d1, tobe: 'd' },
		{ name: 'd2', param: poObj.d2, tobe: 'd' },
		{ name: 'd2-2', param: Object.keys(poObj).includes('d'), tobe: false },
	)
}