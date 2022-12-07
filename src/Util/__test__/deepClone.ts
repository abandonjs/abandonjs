// import * as _ from '../index'
// import { add, asyncAdd, test } from 'unit-testing-js'

// const beforeEqual = (unit) => {
// 	let tmp = unit.param
// 	tmp = 123
// 	return unit
// }

// test('deepClone', _.deepClone,
// 	{
// 		param: [asyncAdd, { a: 1, b: { c: 1 } }],
// 		tobe: [asyncAdd, { a: 1, b: { c: 1 } }],
// 		beforeEqual: (unit) => {
// 			unit.param[1].b.c = 123
// 			return unit
// 		}
// 	},
// 	{
// 		param: function* () { },
// 		tobe: function* () { },
// 		beforeEqual: unit => {
// 			unit.param = add
// 			return unit
// 		}
// 	},
// 	{
// 		param: asyncAdd,
// 		tobe: asyncAdd,
// 		beforeEqual: (unit) => {
// 			unit.param = add
// 			return unit
// 		}
// 	},
// 	{
// 		param: add,
// 		tobe: add,
// 		beforeEqual: (unit) => {
// 			unit.param = asyncAdd
// 			return unit
// 		}
// 	},
// 	{
// 		param: new RegExp('aa'),
// 		tobe: new RegExp('aa'),
// 		beforeEqual: (unit) => {
// 			unit.param = /bbb/
// 			return unit
// 		}
// 	},
// 	{
// 		param: /123/,
// 		tobe: /123/,
// 		beforeEqual: (unit) => {
// 			unit.param = /345/
// 			return unit
// 		}
// 	},

// 	{
// 		param: new Array([1, 2, '33']),
// 		tobe: new Array([1, 2, '33']),
// 		beforeEqual: (unit) => {
// 			unit.param = new Date('2021')
// 			return unit
// 		}
// 	},
// 	{
// 		param: new Date(),
// 		tobe: new Date(),
// 		beforeEqual: (unit) => {
// 			unit.param = new Date('2021')
// 			return unit
// 		}
// 	},

// 	{
// 		param: /123/,
// 		tobe: /123/,
// 		beforeEqual: (unit) => {
// 			unit.param = /345/
// 			return unit
// 		}
// 	},

// 	{
// 		param: ['123', add],
// 		tobe: ['123', add],
// 		beforeEqual: (unit) => {
// 			unit.param[1] = asyncAdd
// 			unit.param.push(123)
// 			return unit
// 		}
// 	},
// 	{
// 		param: {},
// 		tobe: {},
// 		beforeEqual: (unit) => {
// 			unit.param.a = 123
// 			return unit
// 		}
// 	},
// 	{
// 		param: {
// 			a: 1,
// 			b: { d: 2 },
// 			c: 3,
// 			fn: add,
// 			asFn: asyncAdd,
// 			reg: /123/
// 		},
// 		tobe: {
// 			a: 1, b: { d: 2 }, c: 3,
// 			fn: add, asFn: asyncAdd, reg: /123/
// 		},
// 		warningTobe: {
// 			a: 1, b: { d: 666 }, c: 3,
// 			fn: add, asFn: asyncAdd, reg: /123/
// 		},
// 		beforeEqual: (unit) => {
// 			unit.param.b.d = 666;
// 			unit.param.reg = /223/
// 			return unit
// 		}
// 	},
// 	{ param: undefined, tobe: undefined, beforeEqual },
// 	{ param: null, tobe: null, beforeEqual },
// 	{ param: NaN, tobe: NaN, beforeEqual },
// 	{ param: '', tobe: '', beforeEqual },
// 	{ name: 'number1', param: 1, beforeEqual, tobe: 1 },
// 	{ name: 'number0', param: 0, beforeEqual, tobe: 0 },
// 	{ name: 'number-1', param: -1, beforeEqual, tobe: -1 },
// )