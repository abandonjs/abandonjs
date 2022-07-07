import * as _ from '../index'
import { once } from '../../function'
import { logGroup as log } from '../../Util'
import { INFINITY, MAX_VALUES_NUMBER, MIN_VALUES_NUMBER } from '../../constants'

const logGroup: any = once(log)

logGroup(
  'countingMethod',
  _.countingMethod(1024),
  _.countingMethod(1024 * 12),
  _.countingMethod(3 * 1024 ** 3 + 1024 * 12 + 12),
  _.countingMethod(1024 ** 9 ),
  _.countingMethod(1024 ** 12 ),
  _.countingMethod(1024 * 12)
)

logGroup(
  'add',
  _.add(1, 1),
  _.add(MAX_VALUES_NUMBER, MAX_VALUES_NUMBER),
  _.add(MAX_VALUES_NUMBER, INFINITY),
  _.add(MAX_VALUES_NUMBER, -INFINITY),
  _.add(INFINITY, -INFINITY)
)

logGroup(
  'ceil',
  _.ceil(3.1245),
  _.ceil(13.1245),
  _.ceil(0.1245),
  _.ceil(4.006),
  _.ceil(6.004, 2),
  _.ceil(6040, -2),
  _.ceil(6040111, -2)
)

logGroup(
  'divide',
  _.divide(3, 1),
  _.divide(3, 3),
  _.divide(3, 2),
  _.divide(3, 4),
  _.divide(3, 5),
  _.divide(3, 9),
  _.divide(6, 4),
  _.divide(MAX_VALUES_NUMBER, 4),
  _.divide(Infinity, 4),
  _.divide(1, -INFINITY)
)

logGroup(
  'floor',
  _.floor(3.1245),
  _.floor(13.1245),
  _.floor(0.1245),
  _.floor(4.006),
  _.floor(6.004, 2),
  _.floor(6040, -2),
  _.floor(6040111, -2)
)

logGroup(
  'max',
  _.max([1, 4, 5, 2, 99999999, 3, 1, 100, 5555555]),
  _.max([1, 4, 5, 2, 99999999, 3, 1, 100, 5555555, 'fjsdkfjksdjf']),
  _.max([1, 4, 5, 2, 99999999, 3, 1, 100, 5555555, '', '9999999912'])
)

logGroup(
  'maxBy',
  _.maxBy([1, 4, 5, 2, 99999999, 3, 1, 100, 5555555]),
  _.maxBy([1, 4, 5, 2, 99999999, 3, 1, 100, 5555555, 'fjsdkfjksdjf']),
  _.maxBy([1, 4, 5, 2, 99999999, 3, 1, 100, 5555555, '', '9999999912']),
  _.maxBy([{ a: 123 }, { a: 999 }, { a: 333 }]),
  _.maxBy([{ a: 123 }, { a: 999 }, { a: 111333 }], 'a'),
  _.maxBy([{ a: 123 }, { a: 99119 }, { a: 333 }], (val) => val.a)
)

logGroup(
  'mean',
  _.mean([1, 4, 5, 2, 3, 1, 100]),
  _.mean([1, 4, 5, 2, 3, 1, 100, 'fjsdkfjksdjf']),
  _.mean([1, 4, 5, 2, 3, 1, 100, '', '9999999912']),
  _.mean([{ a: 123 }, { a: 999 }, { a: 333 }]),
  _.mean([{ a: 123 }, { a: 999 }, { a: 111333 }], 'a'),
  _.mean([{ a: 123 }, { a: 99119 }, { a: 333 }], (val) => val.a)
)

logGroup(
  'meanBy',
  _.meanBy([1, 4, 5, 2, 3, 1, 100]),
  _.meanBy([1, 4, 5, 2, 3, 1, 100, 'fjsdkfjksdjf']),
  _.meanBy([1, 4, 5, 2, 3, 1, 100, '', '9999999912']),
  _.meanBy([{ a: 123 }, { a: 999 }, { a: 333 }]),
  _.meanBy([{ a: 123 }, { a: 999 }, { a: 333 }], 'a'),
  _.meanBy([{ a: 123 }, { a: 99119 }, { a: 333 }], (val) => val.a)
)

logGroup(
  'min',
  _.min([1, 4, 5, 2, 3, 1, 100]),
  _.min([1, 4, 5, 2, 3, 1, 100, 'fjsdkfjksdjf']),
  _.min([1, 4, 5, 2, 3, 1, 100, '', '9999999912']),
  _.min([{ a: 123 }, { a: 999 }, { a: 333 }]),
  _.min([{ a: 123 }, { a: 999 }, { a: 111333 }], 'a'),
  _.min([{ a: 123 }, { a: 99119 }, { a: 333 }], (val) => val.a)
)

logGroup(
  'minBy',
  _.minBy([1, 4, 5, 2, 3, 1, 100]),
  _.minBy([1, 4, 5, 2, 3, 1, 100, 'fjsdkfjksdjf']),
  _.minBy([1, 4, 5, 2, 3, 1, 100, '', '9999999912']),
  _.minBy([{ a: 123 }, { a: 999 }, { a: 333 }]),
  _.minBy([{ a: 123 }, { a: 999 }, { a: 111333 }], 'a'),
  _.minBy([{ a: 123 }, { a: 99119 }, { a: 333 }], (val) => val.a)
)

logGroup(
  'sum',
  _.sum([1, 4, 5, 2, 3, 1, 100]),
  _.sum([1, 4, 5, 2, 3, 1, 100, 'fjsdkfjksdjf']),
  _.sum([1, 4, 5, 2, 3, 1, 100, '', '9999999912']),
  _.sum([{ a: 123 }, { a: 999 }, { a: 333 }]),
  _.sum([{ a: 123 }, { a: 999 }, { a: 111333 }], 'a'),
  _.sum([{ a: 123 }, { a: 99119 }, { a: 333 }], (val) => val.a)
)

logGroup(
  'sumBy',
  _.sumBy([1, 4, 5, 2, 3, 1, 100]),
  _.sumBy([1, 4, 5, 2, 3, 1, 100, 'fjsdkfjksdjf']),
  _.sumBy([1, 4, 5, 2, 3, 1, 100, '', '9999999912']),
  _.sumBy([{ a: 123 }, { a: 999 }, { a: 333 }]),
  _.sumBy([{ a: 123 }, { a: 999 }, { a: 111333 }], 'a'),
  _.sumBy([{ a: 123 }, { a: 99119 }, { a: 333 }], (val) => val.a)
)

logGroup('multiply', _.multiply(1, 4), _.multiply(110, 4))

// logGroup(
//   'round',
//   _.round(4.006), // => 4
//   _.round(4.006, 2), // => 4.01
//   _.round(4060, -2) // => 4100
// )
