import * as _ from '../index'
import { test } from 'rh-test'
import { INFINITY, MAX_VALUES_NUMBER, MIN_VALUES_NUMBER } from '../../constants'

test('HEX', _.toHEX,
  { params: [1024], tobe: '1K' },
  { params: [1024 * 12], tobe: '12K' },
  { params: [3 * 1024 ** 3 + 1024 * 12 + 12], tobe: '3G12K12' },
  { params: [1024 ** 9], tobe: '1B' },
  { params: [1024 ** 12], tobe: '1024B' },
  { params: [1024 * 12], tobe: '12K' },
)

test('add', _.add,
  { params: [1, 1], tobe: 2 },
  { params: [MAX_VALUES_NUMBER, MAX_VALUES_NUMBER], tobe: MAX_VALUES_NUMBER },
  { params: [MAX_VALUES_NUMBER, INFINITY], tobe: MAX_VALUES_NUMBER },
  { params: [MAX_VALUES_NUMBER, -INFINITY], tobe: 0 },
  { params: [INFINITY, -INFINITY], tobe: 0 },
)

test('ceil', _.ceil,
  { params: [3.1245], tobe: 4 },
  { params: [13.1245], tobe: 14 },
  { params: [0.1245], tobe: 1 },
  { params: [4.006], tobe: 5 },
  { params: [6.004, 2], tobe: 6.01 },
  { params: [6040, -2], tobe: 6100 },
  { params: [6040111, -2], tobe: 6040200 },
)

test('divide', _.divide,
  { params: [3, 1], tobe: 3 },
  { params: [3, 3], tobe: 1 },
  { params: [3, 2], tobe: 1.5 },
  { params: [3, 4], tobe: 0.75 },
  { params: [3, 5], tobe: 0.6 },
  { params: [3, 9], tobe: 1 / 3 },
  { params: [6, 4], tobe: 1.5 },
  { params: [MAX_VALUES_NUMBER, 4], tobe: MAX_VALUES_NUMBER / 4 },
  { params: [Infinity, 4], tobe: MAX_VALUES_NUMBER / 4 },
  { name: '0-1', params: [1, INFINITY], tobe: 0 },
  { name: '0-2', params: [1, -INFINITY], tobe: 0 },
)

test('floor', _.floor,
  { params: [3.1245], tobe: 3 },
  { params: [13.1245], tobe: 13 },
  { params: [0.1245], tobe: 0 },
  { params: [4.006], tobe: 4 },
  { params: [6.004, 2], tobe: 6.00 },
  { params: [6040, -2], tobe: 6000 },
  { params: [6040111, -2], tobe: 6040100 },
)

test('max', _.max,
  { params: [[1, 4, 5, 2, 99999999, 3, 1, 100, 5555555]], tobe: 99999999 },
  { params: [[1, 4, 5, 2, 99999999, 3, 1, 100, 5555555, 'fjsdkfjksdjf']], tobe: 99999999 },
  { params: [[1, 4, 5, 2, 99999999, 3, 1, 100, 5555555, '', '9999999912']], tobe: 9999999912 },
)

test<any, any>('maxBy', _.maxBy,
  { params: [[1, 4, 5, 2, 99999999, 3, 1, 100, 5555555]], tobe: 99999999 },
  { params: [[1, 4, 5, 2, 99999999, 3, 1, 100, 5555555, 'fjsdkfjksdjf']], tobe: 99999999 },
  { params: [[1, 4, 5, 2, 99999999, 3, 1, 100, 5555555, '', '9999999912']], tobe: 9999999912 },
  { params: [[{ a: 1 }, { b: 3 }], 'a'], tobe: { a: 1 } },
)

test('mean', _.mean,
  { params: [[1, 4, 5, 10, 100]], tobe: 24 },
  { params: [[1, 4, 10, 100, 'fjsdkfjksdjf']], tobe: 23 },
)

test('meanBy', _.meanBy,
  { params: [[1, 4, 5, 10, 100]], tobe: 24 },
  { params: [[1, 4, 10, 100, 'fjsdkfjksdjf']], tobe: 23 },
)



test<any, any>('min', _.min,
  { params: [[1, 4, 5, 2, 3, 1, 100]], tobe: 1 },
  { params: [[1, 4, 5, 2, 3, 1, 100, 'fjsdkfjksdjf']], tobe: 1 },
  { params: [[1, 4, 5, 2, 3, 1, 100, '', '9999999912']], tobe: 1 },
  { params: [[{ a: 123 }, { a: 999 }, { a: 333 }]], tobe: undefined },
  { params: [[{ a: 123 }, { a: 999 }, { a: 111333 }], 'a'], tobe: undefined },
)

test<any, any>('minBy', _.minBy,
  { params: [[1, 4, 5, 2, 3, 1, 100]], tobe: 1 },
  { params: [[1, 4, 5, 2, 3, 1, 100, 'fjsdkfjksdjf']], tobe: 1 },
  { params: [[1, 4, 5, 2, 3, 1, 100, '', '9999999912']], tobe: 1 },
  { params: [[{ a: 123 }, { a: 999 }, { a: 333 }]], tobe: undefined },
  { params: [[{ a: 123 }, { a: 999 }, { a: 111333 }], 'a'], tobe: { a: 123 } },
)

test('sum', _.sum,
  { params: [[1, 4, 5, 2, 3, 1, 100]], tobe: 116 },
  { params: [[1, 4, 5, 2, 3, 1, 100, 'fjsdkfjksdjf']], tobe: 116 },
  { params: [[1, 4, 5, 2, 3, 1, 100, '', '9999999912']], tobe: 10000000028 },
  { params: [[{ a: 123 }, { a: 999 }, { a: 333 }]], tobe: 0 },
  { params: [[{ a: 123 }, { a: 999 }, { a: 111333 }]], tobe: 0 },
)

test<any, any>('sumBy', _.sumBy,
  { params: [[1, 4, 5, 2, 3, 1, 100]], tobe: 116 },
  { params: [[1, 4, 5, 2, 3, 1, 100, 'fjsdkfjksdjf']], tobe: 116 },
  { params: [[1, 4, 5, 2, 3, 1, 100, '', '9999999912']], tobe: 10000000028 },
  { params: [[{ a: 123 }, { a: 999 }, { a: 333 }]], tobe: 0 },
  { params: [[{ a: 123 }, { a: 999 }, { a: 111333 }]], tobe: 0 },
  { params: [[{ a: 123 }, { a: 999 }, { a: 111333 }], 'a'], tobe: 112455 },
)


test('multiply', _.multiply,
  { params: [110, 4], tobe: 440 },
)