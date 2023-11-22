export * from '..'
import * as _ from '..'
import { test, add } from 'unit-testing-js'
import './loop'
import './memoize'
import './pipe'

test('once', _.once(add),
  { params: [1, 2], tobe: 3 },
  { params: [33, 2], tobe: 3 },
  { params: [332, 2], tobe: 3 },
  { params: [33, 22], tobe: 3 },
  { params: [33, 21], tobe: 3 },
)