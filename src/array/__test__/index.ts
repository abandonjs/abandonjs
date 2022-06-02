import * as _Array from '../index'
import * as _ from '../index'
import { logGroup as log2 } from '../../Util'
import { once } from '../../function'

// 只运行第一个
const logGroup = once(log2)

logGroup('isArray',
  _.isArray([]),
  _.isArray(1),
  _.isArray(33),
  _.isArray([{}, 1]),

)

// logGroup(
//   'dropRight',
//   _.dropRight([1, 2, 3]), // => [1, 2]
//   _.dropRight([1, 2, 3, 9, 10], 4), // => [1, 2]
//   _.dropRight([1, 2, 3], 2), // => [1]
//   _.dropRight([1, 2, 3], 5), // => []
//   _.dropRight([1, 2, 3], 0) // => [1, 2, 3]
// )

// logGroup(
//   'arraySelectOne',
//   _Array.arraySelectOne([1, 4, 5]),
//   _Array.arraySelectOne([1, 4, 5], 0),
//   _Array.arraySelectOne([1, 4, 5], -1)
// )

// logGroup('arrayUniqueItem', arrayUniqueItem([1, 3, 4, 5, 1, 3, 2, 1, 1]))

// logGroup('arrayUniqueItem', arrayUniqueItem([1, 3, 4, 5, 1, 3, 2, 1, 1]))

// logGroup(
//   'initMultArray',
//   initMultArray('unit'),
//   initMultArray('unit', '10'),
//   initMultArray('unit', '10&1'),
//   initMultArray('unit', '2&2'),
//   initMultArray('unit', '2&2')
// )

// logGroup(
//   'arrayFilterByObject',
//   _Array.arrayFilterByObject(
//     [{ a: 123, b: '00' }, { a: 123, b: '00' }, 123, 'fjdsjf'],
//     { a: 1 }
//   ),
//   _Array.arrayFilterByObject(
//     [{ a: 123, b: '00' }, { a: 23, b: '00' }, 123, 'fjdsjf'],
//     { a: 1, b: '0' },
//     true
//   )
// )

// logGroup(
//   'arraySelectItems',
//   _Array.arraySelectItems(
//     [1, 4, 5, 6, 223, 23, 32, 42134, 234, 123, 123],
//     3,
//     5
//   ),
//   _Array.arraySelectItems(
//     [1, 4, 5, 6, 99, 223, 23, 32, 42134, 234, 12, 123, 123],
//     3,
//     10
//   ),
//   _Array.arraySelectItems(
//     [1, 4, 5, 6, 99, 223, 23, 32, 42134, 234, 12, 123, 123],
//     3,
//     3
//   )
// )

// logGroup('chunk', _Array.chunk([1, 3, 4, 5, 3, 2, 3, 12], 3))
// logGroup(
//   'compact',
//   _Array.compact([1, 3, 4, false, 0, 5, '', 3, 2, , 3, 12, null, undefined])
// )

// logGroup(
//   'concat',
//   _Array.concat([1, 4, 6, 7], [33], [444], 3, 1, 2),
//   _Array.concat(3, 1, 2),
//   _Array.concat([3, 1, 2])
// )

// logGroup(
//   'difference',
//   // _Array.difference(),
//   _Array.difference([1, 34, 4]),
//   _Array.difference([1, 34, 4], [4]),
//   _Array.difference([1, 34, 4], [4], 34)
// )

// logGroup(
//   'drop',
//   _Array.drop(),
//   _Array.drop([1, 34, 4]),
//   _Array.drop([1, 34, 4], 1),
//   _Array.drop([1, 34, 4], 2),
//   _Array.drop([1, 34, 4], 20)
// )

// const array = [1, 2, 3]

// logGroup(
//   'fill',
//   _.fill(array, 'a'),
//   // => ['a', 'a', 'a']
//   _.fill(Array(3), 2),
//   // => [2, 2, 2]
//   _.fill([4, 6, 8, 10], '*', 1, 3)
// )

// const users = [
//   { user: 'barney', active: false },
//   { user: 'fred', active: false },
//   { user: 'pebbles', active: true }
// ]

// logGroup(
//   'findIndex',
//   _.findIndex(users, function (o: any): boolean {
//     return o.user && o.user == 'barney'
//   }),
//   // => 0

//   // The `_.matches` iteratee shorthand.
//   _.findIndex(users, { user: 'fred', active: false }),
//   // => 1

//   // The `_.matchesProperty` iteratee shorthand.
//   _.findIndex(users, ['active', false]),
//   // => 0

//   // The `_.property` iteratee shorthand.
//   _.findIndex(users, 'active')
//   // => 2
// )

// // logGroup(
// //   'findLastIndex',
// //   _.findLastIndex(users, function (o) {
// //     return o.user == 'pebbles'
// //   }),
// //   // => 2

// //   // The `_.matches` iteratee shorthand.
// //   _.findLastIndex(users, { user: 'barney', active: true }),
// //   // => 0

// //   // The `_.matchesProperty` iteratee shorthand.
// //   _.findLastIndex(users, ['active', false]),
// //   // => 2

// //   // The `_.property` iteratee shorthand.
// //   _.findLastIndex(users, 'active')
// //   // => 0
// // )
