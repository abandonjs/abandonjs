import * as _ from '../index'
import { test } from 'unit-testing-js'

const sym = Symbol(12)
test('equal', _.equal,
	{ name: 'date', params: [new Date('2022'), new Date('2022')], tobe: true },
	{ params: [new Date(), new Date()], tobe: true },
	{ params: [1, 1], tobe: true },
	{ params: [[1], [1]], tobe: true },
	{ params: [{}, {}], tobe: true },
	{ params: [{ a: 1 }, { a: 1 }], tobe: true },
	{ params: [sym, sym], tobe: true },
	{ params: [Symbol(123), Symbol(123)], tobe: false },
	{ params: [Symbol(1234), Symbol(123)], tobe: false },
	{ params: [NaN, NaN], tobe: true },
	{ params: [undefined, undefined], tobe: true },
	{ params: [null, null], tobe: true },
	{ params: [undefined, null], tobe: false },
	{ params: ['', undefined], tobe: false },
	{ params: [null, ''], tobe: false },
)