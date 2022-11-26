import { cases } from './cases'
import { isEquals } from 'unit-testing-js'
import * as _ from '../index'


const ignoreCases = ['toArray']


// Object.keys(cases).forEach((name: string) => {
// 	if (ignoreCases.includes(name)) return;
// 	describe('array:' + name, () => {
// 		const { method, params = [] } = cases[name] || {}
// 		params.map((unit: any, index: number) => {
// 			const { tobes, tobe: v, param, params: ps, type = 'Type' } = unit || {}
// 			it(`${name} - ${index}`, () => {

// 				if (param) {
// 					expect(isEquals(method(param), v, tobes, type)).toBe(true)
// 				} else {
// 					expect(isEquals(method(...ps), v, tobes, type)).toBe(true)
// 				}

// 			});
// 		})
// 	});

// })

// describe('test', () => {
// 	[
// 		{ param: [], tobe: [] },
// 		{ param: new Array(1110000).fill('1'), tobe: new Array(1110000).fill('1') },
// 		{ param: 1, tobe: [1] },
// 		{ param: 33, tobe: [33] },
// 		{ param: [{}, 1], tobe: [{}, 1] },
// 	].forEach((item, index) => {
// 		it('toArray:' + index, () => {
// 			expect(_.toArray(item.param)).toEqual(item.tobe)
// 		})

// 	})

// })