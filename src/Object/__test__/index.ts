import * as _ from '../index'
import { test } from 'rh-test'

test<any, boolean>('isObject', _.isObject,
	{ param: {}, tobe: true },
	{ param: null, tobe: false },
	{ param: undefined, tobe: false },
	{ param: NaN, tobe: false },
	{ param: { a: 123 }, tobe: true },
)

test<any, boolean>('existKeys', _.existKeys,
	{ params: [{ a: 123 }, 'a'], tobe: true },
	{ params: [{ a: 123 }, ['a']], tobe: true },
	{ params: [{ a: 123, b: 3 }, 'a'], tobe: true },
)

test('serialize', _.serialize,
	{ param: { a: 1, b: 'c' }, tobe: 'a=1&b=c' }
)