import { CaseUnit } from 'unit-testing-js'
import * as _ from '..'
import { ObjectType } from '../../type'

type Method = (...args: any[]) => any | any[]

export type TCaseUnit = {
	method: Method
	params: CaseUnit[]
	[key: string]: any
}

export const cases: ObjectType<TCaseUnit> = {
	'toArray-cases': {
		method: _.toArray,
		params: [
			{ param: [], tobe: [] },
			{ param: new Array(1110000).fill('1'), tobe: new Array(1110000).fill('1') },
			{ param: 1, tobe: [1] },
			{ param: 33, tobe: [33] },
			{ param: [{}, 1], tobe: [{}, 1] },
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