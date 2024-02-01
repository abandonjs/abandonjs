import * as _ from '..'
import { test } from 'unit-testing-js'

test(
  _.padNumber,
  { params: [100], tobe: '100' },
  { params: [100, ''], tobe: '100' },

  { name: '+1', params: [100, 2, true], tobe: '99' },
  { name: '+1.1', params: [100, '2', true], tobe: '99' },
  { name: '+2', params: [100, 4], tobe: '0100' },
  { name: '+2.1', params: [100, '4'], tobe: '0100' },

  { name: '-1', params: [100, -2], tobe: '100.00' },
  { name: '-0', params: [100, -0], tobe: '100' },
  { name: 'string>1', params: [100, '.2'], tobe: '100.00' },
  { name: 'string>2', params: [100, '4.2'], tobe: '0100.00' },
  { name: 'string>3', params: [100, '2.2', true], tobe: '99.00' },
  { name: 'string>3.1', params: [100, '2.2'], tobe: '100.00' },
  { name: 'string>3.2', params: ['100.000', '2.2'], tobe: '100.000' },
)
