import * as _Array from '../index'
import * as _ from '../index'
import { test } from 'rh-test'

test('zip', _Array.zip,
	{
		params: [['fred', 'barney'], [30, 40], [true, false]],
		tobe: [['fred', 30, true], ['barney', 40, false]]
	}
)


test('zipObject', _Array.zipObject,
	{ params: [['a', 'b'], [1, 2]], tobe: { 'a': 1, 'b': 2 } }
)

test('zipObjectDeep', _Array.zipObjectDeep,
	{
		params: [['a.b[0].c', 'a.b[1].d'], [1, 2]],
		tobe: { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
	}
)


console.log('a.b[0].c'.replace(/\w\./,''))
console.log(/(\w)./.exec('a.b[0].c').length)