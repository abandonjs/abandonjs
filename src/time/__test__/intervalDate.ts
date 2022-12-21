import { test } from 'unit-testing-js'
import { intervalDate } from '..'

test('intervalDate', intervalDate,
	{ params: [new Date("2021-11-3"), new Date("2022-2-1")], tobe: 90 }
)