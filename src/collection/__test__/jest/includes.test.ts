import { includes } from '../..'

describe('includes', () => {
  it('true', () => {
    expect(includes([2, 1], 1)).toBe(true)
    // expect(includes([2, 1], '1')).toBe(true)
    expect(includes({a: 1}, 1)).toBe(true)
    expect(includes('123', 1)).toBe(true)
  })
  it('false', () => {
    expect(includes([], 1)).toBe(false)
  })
})