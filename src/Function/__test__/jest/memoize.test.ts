import * as _ from '../..'
import { add } from 'unit-testing-js'

describe('memoize', () => {
  it('base', () => {
    const fn = _.memoize<[number,number],number>(add)
    const res = fn(1, 1)
    expect(res).toBe(2)
    const res2 = fn(1, 1)
    expect(res2).toBe(2)
  })
  it('error', () => {
    const fn = _.memoize('' as any)(0)
    expect(fn).toBeUndefined()
  })
})