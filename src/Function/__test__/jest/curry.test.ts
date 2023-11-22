import * as _ from '../..'
import { add } from 'unit-testing-js'

describe('curry', () => {
  it('base', () => {
    const fn = _.curry(add, 2)(1)
    expect(fn(1, 1)).toBe(3)
  })
  it('error', () => {
    const fn = _.curry('' as any, 1)
    expect(fn).toBeUndefined()
  })
})