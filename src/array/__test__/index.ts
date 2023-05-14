import { test } from 'unit-testing-js'
export * from '..'
import { cases } from './cases'
import './modules'
import './flat'
import './zip'

function testHoc(names: string[] = []) {
	names.forEach(name => {
		try {
			if (!cases[name]) return;
			const { method, params = [] } = cases[name]
			test(name, method, ...params)
		} catch (error) {
			console.error(error)
		}
	})
}

testHoc(Object.keys(cases))