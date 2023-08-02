import * as _ from '..'
export * from '..'
import './ObjectEntity'
import { test } from 'unit-testing-js'

test('existKeys', _.existKeys,
	{ params: [{ a: 123 }, 'a'], tobe: true },
	{ params: [{ a: 123 }, ['a']], tobe: true },
	{ params: [{ a: 123, b: 3 }, 'a'], tobe: true },
)

test('serialize', _.serialize,
	{ param: { a: 1, b: 'c' }, tobe: 'a=1&b=c' }
)