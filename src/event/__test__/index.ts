import { test } from 'unit-testing-js'
import { EventEmitter } from '..'
const _eb = new EventEmitter<any, any>()

test('EventEmitter', (val) => val,
	{
		name: 'emits',
		before: (unit: { name: string; param: any[]; }) => {
			let v = 1
			_eb.$on(unit.name, function () { return ++v })
			// _eb.$on(unit.name, function () { return ++v })

			unit.param = _eb.$emit(unit.name)
			unit.param = _eb.$emit(unit.name)
			return unit
		},
		tobe: [3]
	},
	{
		name: 'emit',
		before: (unit: { name: string; param: any[]; }) => {
			_eb.$on(unit.name, function () { return 3 })

			unit.param = _eb.$emit(unit.name)
			return unit
		},
		tobe: [3]
	},
	{
		name: 'off',
		before: (unit: { name: string; param: any[]; }) => {
			_eb.$on(unit.name, function () { return 3 })
			_eb.$off(unit.name)
			unit.param = _eb.$emit(unit.name)
			return unit
		},
		tobe: []
	},
	{
		name: 'once1',
		before: (unit: { name: string; param: any[]; }) => {
			_eb.$on(unit.name, function () { return 3 })
			unit.param = _eb.$once(unit.name)
			return unit
		},
		tobe: [3]
	},
	{
		name: 'once2',
		before: (unit: { name: string; param: any[]; }) => {
			_eb.$on(unit.name, function () { return 3 })
			_eb.$once(unit.name)
			unit.param = _eb.$emit(unit.name)
			return unit
		},
		tobe: []
	}
)