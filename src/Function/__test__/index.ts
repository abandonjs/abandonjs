export * from '..'
import * as _ from '../index'
import { test, add, asyncAdd } from 'unit-testing-js'

import './is'
// throttle
// debounce

test('toPromise', _.toPromise,
  { param: 1, tobe: 1 },
  { params: [add, 1, 4], tobe: 5 },
  { func: (fs) => _.toPromise(fs, 1, 4), params: [add], tobe: 5 },
)

test('once', _.once(add),
  { params: [1, 2], tobe: 3 },
  { params: [33, 2], tobe: 3 },
  { params: [332, 2], tobe: 3 },
  { params: [33, 22], tobe: 3 },
  { params: [33, 21], tobe: 3 },
)

test('after', _.after(3, add),
  { params: [1, 2], tobe: undefined },
  { params: [1, 2], tobe: undefined },
  { params: [1, 2], tobe: undefined },
  { params: [1, 2], tobe: 3 },
  { params: [1, 2], tobe: 3 },
)

test('ary', _.ary(add, 2),
  { params: [1, 2, 4], tobe: 3 },
  { params: [33, 2, 8], tobe: 35 },
  { params: [332, 2], tobe: 334 },
  { params: [33, 22], tobe: 55 },
  { params: [33, 21], tobe: 54 },
)


test('before', _.before(2, add),
  { params: [1, 2], tobe: 3 },
  { params: [33, 2], tobe: 35 },
  { params: [332, 2], tobe: 35 },
  { params: [33, 22], tobe: 35 },
  { params: [33, 21], tobe: 35 },
)