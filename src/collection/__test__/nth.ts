import { test } from 'unit-testing-js'
import * as _ from '..'

test(
  _.nth,
  { params: [[1, 2, 3, 4]], tobe: [1, 2, 3, 4] },
  { params: [[1, 2, 3, 4], 'n'], tobe: [1, 2, 3, 4] },
  { params: [[1, 2, 3, 4], '2n'], tobe: [2, 4] },
  { params: [[1, 2, 3, 4], '2n-1'], tobe: [1, 3] },
  { params: [[1, 2, 3, 4], 'n-1'], tobe: [1, 2, 3, 4] },
  //  {params: [[1,2,3,4]], tobe: [1,2,3,4]},
)
