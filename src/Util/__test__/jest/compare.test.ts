import * as _ from '../..'

describe('compareNumber', () => {
  it('simple:true', () => {
    const fn = _.compareNumber
    expect(fn(1, 1)).toBe(true)
    expect(fn(1, /1/)).toBe(true)
    expect(fn(2, [1, 3])).toBe(true)
    expect(fn(2, '=2')).toBe(true)
    expect(fn(2, '<3')).toBe(true)
    expect(fn(2, '>1')).toBe(true)
    expect(fn(2, '>=2')).toBe(true)
    expect(fn(2, '<=2')).toBe(true)
    expect(fn(2, '<>3')).toBe(true)
    expect(fn(2, '!=3')).toBe(true)
  })

  it('simple:false', () => {
    const fn = _.compareNumber
    expect(fn(1, '1')).toBe(false)
    expect(fn('1' as any, 2)).toBe(false)
  })
})


describe('compareValue', () => {

  it('simple:true', () => {
    const fn = _.compareValue
    expect(fn({ a: 1 }, 1, 'a')).toBe(true)
    expect(fn({ a: 1 }, /1/, 'a')).toBe(true)
    expect(fn({ a: '1' }, /1/, 'a')).toBe(true)
  })

  it('simple', () => {
    const fn = _.compareValue
    expect(fn({ a: 1 }, 2, 'a')).toBe(false)
    expect(fn({ a: '1' }, 2, 'a')).toBe(false)
    expect(fn({ a: 1 }, /2/, 'a')).toBe(false)
    expect(fn({ a: 'aaa' }, 2, 'a')).toBe(false)
  })
})
