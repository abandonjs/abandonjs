import { includes } from '../..'

describe('includes', () => {
  it('object', () => {
    expect(includes({ 1: 1 }, 1, 1)).toBe(true)
    expect(includes({ 1: 1 }, 1)).toBe(true)
  })
  it('array', () => {
    expect(includes([2, 1], 1, 1)).toBe(true)
    expect(includes([2, 1], 1, 2)).toBe(false)
    expect(includes([2, 1], 1, '2')).toBe(false)
  })
  it('string', () => {
    expect(includes('abc', 'a')).toBe(true)
    expect(includes('abc', 'a2')).toBe(false)
    expect(includes('abc', 'a2', 4)).toBe(false)
    expect(includes('abc', 'a2', '4')).toBe(false)

  })
  it('true', () => {
    expect(includes([2, 1], 1)).toBe(true)
    // expect(includes([2, 1], '1')).toBe(true)
    expect(includes({ a: 1 }, 1)).toBe(true)
    expect(includes('123', 1)).toBe(true)
  })
  it('false', () => {
    expect(includes([], 1)).toBe(false)
    expect(includes((() => { }) as any, 1)).toBe(false)
  })
})