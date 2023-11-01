import { UnitTest } from 'unit-testing-js'
import { pageQuery } from '../..'

const list = [
	{ a: 1, b: 11, c: 'code_1222', d: 'cccc' },
	{ a: 2, b: 12, c: 'code_1223', d: 'cccc' },
	{ a: 3, b: 13, c: 'code_1224', d: 'cccc' },
	{ a: 4, b: 14, c: 'code_1225', d: 'cccc' },
	{ a: 5, b: 15, c: 'code_1226', d: 'cccc' },
	{ a: 6, b: 16, c: 'code_1227', d: 'cccc' },
	{ a: 7, b: 17, c: 'code_1228', d: 'cccc' },
	{ a: 8, b: 18, c: 'code_1229', d: 'cccc' },
	{ a: 9, b: 19, c: 'code_1230', d: 'cccc' },
	{ a: 10, b: 20, c: 'code_1231', d: 'cccc' },
	{ a: 11, b: 21, c: 'code_1232', d: 'cccc' },
]

UnitTest(pageQuery)
	.addCases(
		{
			name: 'params: numberFuzzyQuery=true2',
			param: {
				list,
				params: {
					b: 1,
				},
				fields: {
					b: {
						numberFuzzyQuery: true,
					}
				},
				paging: { pageNo: 1, pageSize: 3 }
			},
			tobe: {
				list: [
					{ a: 1, b: 11, c: 'code_1222', d: 'cccc' },
					{ a: 2, b: 12, c: 'code_1223', d: 'cccc' },
					{ a: 3, b: 13, c: 'code_1224', d: 'cccc' },
					{ a: 4, b: 14, c: 'code_1225', d: 'cccc' },
					{ a: 5, b: 15, c: 'code_1226', d: 'cccc' },
					{ a: 6, b: 16, c: 'code_1227', d: 'cccc' },
					{ a: 7, b: 17, c: 'code_1228', d: 'cccc' },
					{ a: 8, b: 18, c: 'code_1229', d: 'cccc' },
					{ a: 9, b: 19, c: 'code_1230', d: 'cccc' },
					{ a: 11, b: 21, c: 'code_1232', d: 'cccc' },
				],
				pageList: [
					{ a: 1, b: 11, c: 'code_1222', d: 'cccc' },
					{ a: 2, b: 12, c: 'code_1223', d: 'cccc' },
					{ a: 3, b: 13, c: 'code_1224', d: 'cccc' },
				],
				paging: { pageNo: 1, pageSize: 3, total: 10 }
			},
		},
		{
			name: 'params: numberFuzzyQuery=true',
			param: {
				list,
				params: {
					b: 1,
				},
				numberFuzzyQuery: true,
				paging: { pageNo: 1, pageSize: 3 }
			},
			tobe: {
				list: [
					{ a: 1, b: 11, c: 'code_1222', d: 'cccc' },
					{ a: 2, b: 12, c: 'code_1223', d: 'cccc' },
					{ a: 3, b: 13, c: 'code_1224', d: 'cccc' },
					{ a: 4, b: 14, c: 'code_1225', d: 'cccc' },
					{ a: 5, b: 15, c: 'code_1226', d: 'cccc' },
					{ a: 6, b: 16, c: 'code_1227', d: 'cccc' },
					{ a: 7, b: 17, c: 'code_1228', d: 'cccc' },
					{ a: 8, b: 18, c: 'code_1229', d: 'cccc' },
					{ a: 9, b: 19, c: 'code_1230', d: 'cccc' },
					{ a: 11, b: 21, c: 'code_1232', d: 'cccc' },
				],
				pageList: [
					{ a: 1, b: 11, c: 'code_1222', d: 'cccc' },
					{ a: 2, b: 12, c: 'code_1223', d: 'cccc' },
					{ a: 3, b: 13, c: 'code_1224', d: 'cccc' },
				],
				paging: { pageNo: 1, pageSize: 3, total: 10 }
			},
		},
		{
			name: 'params: numberQuery',
			param: {
				list,
				params: {
					b: 1,
				},
				paging: { pageNo: 1, pageSize: 3 }
			},
			tobe: {
				list: [],
				pageList: [],
				paging: { pageNo: 1, pageSize: 3, total: 0 }
			},
		},
		{
			name: 'params',
			param: {
				list,
				params: {
					c: '1222'
				},
				paging: { pageNo: 1, pageSize: 3 }
			},
			tobe: {
				list: [
					{ a: 1, b: 11, c: 'code_1222', d: 'cccc' }
				],
				pageList: [
					{ a: 1, b: 11, c: 'code_1222', d: 'cccc' }
				],
				paging: { pageNo: 1, pageSize: 3, total: 1 }
			},
		},
		{
			name: 'paging1-3',
			param: {
				list,
				paging: { pageNo: 2, pageSize: 3 }
			},
			tobe: {
				list: list,
				pageList: list.slice(3, 6),
				paging: { pageNo: 2, pageSize: 3, total: list.length }
			},
		},
		{
			param: {
				list,
				paging: { pageNo: 0, pageSize: 3 }
			},
			tobe: {
				list,
				pageList: [],
				paging: { pageNo: 0, pageSize: 3, total: list.length }
			},
		},
		{
			param: {
				list,
				paging: { pageNo: 1, pageSize: 0 }
			},
			tobe: {
				list,
				pageList: [],
				paging: { pageNo: 1, pageSize: 0, total: list.length }
			},
		},

	)
	.run()