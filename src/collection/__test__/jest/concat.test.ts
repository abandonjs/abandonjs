import { concat } from '../..'

describe('concat', () => {
  it('simple', () => {
    expect(concat([2, 1], 1)).toEqual([2, 1, 1])
    expect(concat([2, 1], [1])).toEqual([2, 1, 1])
    expect(concat([2, 1], new Set([1]))).toEqual([2, 1, 1])
  })
  it('effect', () => {
    expect(concat()).toEqual([])
  })
})