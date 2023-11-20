import * as _ from '../..'
import { add } from 'unit-testing-js'

describe('once', () => {
  it('base', () => {
    const fn = _.once(add)
    expect(add(1, 1)).toBe(2)
    expect(fn(1, 1)).toBe(2)
    expect(fn(1, 100)).toBe(2)
  })
})