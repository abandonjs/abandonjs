import * as _ from '../index'
import { test } from 'rh-test'

const add = (a, b) => a + b
const asyncAdd = async (a, b) => a + b


// throttle
// debounce

test('isFunction', _.isFunction,
  { params: () => 123, tobe: true },
  { params: async () => 123, tobe: true },
  { params: function* () { }, tobe: true }
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