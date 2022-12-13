import * as _ from '..'
import './MapEntity'
import './SetEntity'
import { test } from 'unit-testing-js'
const obj = { a: 1, b: 'bb', c: undefined }

test('omit', _.omitRecord,
	{
		params: [{ a: 1, b: 'bb', c: undefined }, ['a', 'c']],
		tobe: { b: 'bb' }
	},
	{
		params: [obj, ['a', 'c', 'd']],
		tobe: { b: 'bb' }
	},
)

test('isObject', _.isObject,
	{ param: {}, tobe: true },
	{ param: null, tobe: false },
	{ param: undefined, tobe: false },
	{ param: NaN, tobe: false },
	{ param: { a: 123 }, tobe: true },
)

test('existKeys', _.existKeys,
	{ params: [{ a: 123 }, 'a'], tobe: true },
	{ params: [{ a: 123 }, ['a']], tobe: true },
	{ params: [{ a: 123, b: 3 }, 'a'], tobe: true },
)

test('serialize', _.serialize,
	{ param: { a: 1, b: 'c' }, tobe: 'a=1&b=c' }
)


// const handler = {
//     get: function(obj, prop) {
//         return prop in obj ? obj[prop] : 37;
//     }
// };

// const p = new Proxy({}, handler);
// p.a = 1;
// p.b = undefined;
// console.log(p.a, p.b);      // 1, undefined
// console.log('c' in p, p.c); // false, 37
