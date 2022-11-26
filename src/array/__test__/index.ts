import './flat'
import { test } from 'unit-testing-js'
import * as _Array from '../index'
import * as _ from '../index'
import { cases } from './cases'
import './toArray'
// import './zip'

function testHoc(names: string[] = []) {
	names.forEach(name => {
		if (!cases[name]) return;
		const { method, params = [] } = cases[name]
		test(name, method, ...params)
	})
}



testHoc(Object.keys(cases))