import * as _ from '..'
import { test } from 'unit-testing-js'

const sym = Symbol(12)
const mapA = new Map([
	['a', '1']
])
const mapB = new Map([
	['a', '2']
])
const vmapA = new WeakMap([
	[{}, '1']
])
const vmapB = new WeakMap([
	[{}, '2']
])

const setA = new Set([1, 2, 3, 4, 4, undefined]);
const setB = new Set([1, 2, 3, 4, 5]);
const setC = new Set([1, 2, 3, 4, 4, undefined]);

test('equal', _.equal,
	{ params: [vmapA, vmapB], tobe: true },
	{ params: [setA, setB], tobe: false },
	{ params: [setA, setC], tobe: true },
	{ params: [mapA, mapB], tobe: false },
	{ name: 'date', params: [new Date('2022'), new Date('2022')], tobe: true },
	{ params: [new Date(), new Date()], tobe: true },
	{ params: [1, 1], tobe: true },
	{ params: [[1], [1]], tobe: true },
	{ params: [{}, {}], tobe: true },
	{ params: [{ a: 1 }, { a: 1 }], tobe: true },
	{ params: [{ a: 1 }, { a: '1' }], tobe: false },
	{ params: [sym, sym], tobe: true },
	{ params: [Symbol(123), Symbol(123)], tobe: false },
	{ params: [Symbol(1234), Symbol(123)], tobe: false },
	{ params: [NaN, NaN], tobe: true },
	{ params: [undefined, undefined], tobe: true },
	{ params: [null, null], tobe: true },
	{ params: [undefined, null], tobe: false },
	{ params: ['', undefined], tobe: false },
	{ params: [null, ''], tobe: false },
	{ params: [{a: 1, b: 2}, {b: 2, a: 1}], tobe: true },
	{ name: '20', params: [{a: '1', b: 2}, {b: 2, a: 1}], tobe: false },
)