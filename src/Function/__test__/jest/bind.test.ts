import * as _ from '../..'
import { add } from 'unit-testing-js'

describe('bind', () => {
  it('base', () => {
    const fn = _.bind(add, 1)
    expect(fn(1, 1)).toBe(3)
    // expect(fn(1, 100)).toBe(2)
  })
  it('error', () => {
    const fn = _.bind('' as any, 1)
    expect(fn(1)).toBeUndefined()
  })
})