import { CaseUnit } from 'rh-test'
import * as _ from '../index'
	
type Method = (...args: any[]) => any | any[]

export type TCaseUnit = {
	method: Method
	params: CaseUnit<any, any>[]
	[key:string]:any
}

export const cases:Record<string,TCaseUnit> = {
	'toArray': {
		method: _.toArray,
		params: [
			{ param: [], tobe: [] },
			{ param: new Array(1110000).fill('1'), tobe: new Array(1110000).fill('1') },
			{ param: 1, tobe: [1] },
			{ param: 33, tobe: [33] },
			{ param: [{}, 1], tobe: [{}, 1] },
		]
	},
	'isArray': {
		method: _.isArray,
		params: [
			{ param: [], tobe: true },
			{ param: 1, tobe: false },
			{ param: 33, tobe: false },
			{ param: [{}, 1], tobe: true },
		]
	},
	'pick': {
		method: _.pick,
		params: [
			{ param: [1, 2, 3], tobes: ['<=3', '>=1'], type: 'Match' }
		]
	},
	'unique': {
		method: _.unique,
		params: [
			{ param: [1, 1, 1, 1], tobe: [1] }
		]
	},
	'chunk': {
		method: _.chunk,
		params: [
			{ params: [[1, 1, 1, 1], 2], tobe: [[1, 1], [1, 1]] },
		]
	},
	'concat': {
		method: _.concat,
		params: [
			{ params: [[1, 1, 1, 1], 2, [3]], tobe: [1, 1, 1, 1, 2, 3] },
		]
	},
	'drop': {
		method: _.drop,
		params: [
			{ params: [[1, 2, 3, 4]], tobe: [1, 2, 3, 4] },
			{ params: [[1, 2, 3, 4], 2], tobe: [3, 4] },
		]
	},
	'dropRight': {
		method: _.dropRight,
		params: [
			{ params: [[1, 1, 1, 2]], tobe: [1, 1, 1] },
			{ params: [[1, 1, 1, 1], 2], tobe: [1, 1] },
			{ params: [[1, 2, 3]], tobe: [1, 2] },
			{ params: [[1, 2, 3, 9, 10], 4], tobe: [1] },
			{ params: [[1, 2, 3], 2], tobe: [1] },
			{ params: [[1, 2, 3], 5], tobe: [] },
			{ params: [[1, 2, 3], 0], tobe: [1, 2, 3] },
		]
	},
	'fill': {
		method: _.fill,
		params: [
			{ params: [[1, 2, 3], 4, 1], tobe: [1, 2, 3, 4] }
		]
	},
	'difference': {
		method: _.difference,
		params: [
			{ params: [[1, 2, 3], 4, 1], tobe: [2, 3] }
		]
	},
	'filter': {
		method: _.filter,
		params: [
			{ params: [[{ a: 123 }, { a: 456 }, 12], { a: 123 }], tobe: [{ a: 123 }] },
			{ params: [[{ a: 123 }, { a: 456 }, 12], { a: 123 }, true], tobe: [{ a: 123 }, 12] },
		]
	},
	'select': {
		method: _.select,
		params: [
			{ params: [[]], tobe: null },
			{ params: [[1, 2, 3, 4, 5, 6], 0], tobe: 1 },
			{ params: [[1, 2, 3, 4, 5, 6], 7], tobe: 2 },
			{ params: [[1, 2, 3, 4, 5, 6], -7], tobe: 6 },
			{ param: [1, 2, 3, 4, 5, 6], tobes: [1, 2, 3, 4, 5, 6], type: 'Match' },
			{ params: [[1, 2, 3, 4, 5, 6], 2], tobe: 3, type: 'Match' },
		]
	},
	'selects': {
		method: (list, min, max) => _.selects(list, min, max).length,
		params: [
			{ params: [[], 0, 0], tobe: 0 },
			{ params: [[1, 2, 3, 4, 5, 6], 2, 6], tobes: ['>2', '<=6'], type: 'Matcher' },
			{ params: [[1, 2, 3, 4, 5, 6], 2, 6], tobes: ['>2', '<=6'], type: 'Matcher' },
			{ params: [[1, 2, 3, 4, 5, 6], 2, 6], tobes: ['>2', '<=6'], type: 'Matcher' },
			{ params: [[1, 2, 3, 4, 5, 6], 2, 6], tobes: ['>2', '<=6'], type: 'Matcher' },
			{ params: [[1, 2, 3, 4, 5, 6], 2, 6], tobes: ['>2', '<=6'], type: 'Matcher' },
		]
	}

}