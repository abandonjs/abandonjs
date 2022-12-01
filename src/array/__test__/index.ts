import { test } from 'unit-testing-js'
import * as _Array from '..'
import * as _ from '..'
export * from '..'
import { cases } from './cases'
import './toArray'
import './modules/filter'
import './modules/toArray'
import './flat'

// import './zip'

function testHoc(names: string[] = []) {
	names.forEach(name => {
		if (!cases[name]) return;
		const { method, params = [] } = cases[name]
		test(name, method, ...params)
	})
}



testHoc(Object.keys(cases))