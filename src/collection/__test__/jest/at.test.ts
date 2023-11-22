import { at } from '../..'

describe('at', () => {
  it('set', () => {
    expect(at(new Set(['a', 1]), 1)).toBe(1)
    expect(at(new Set(['a', 1]), 'cc')).toBe(undefined)
  })
  it('other', () => {
    expect(at((()=>{}) as any, 'a')).toBe(undefined)
    expect(at((()=>{}) as any, null as any)).toBe(undefined)
  })
  it('map', () => {
    expect(at(new Map([['a', 1]]), 'a')).toBe(1)
  })
  it('object', () => {
    expect(at({ a: 1 }, 'a')).toBe(1)
  })
  it('index', () => {
    expect(at([2, 1], 1)).toBe(1)
    expect(at([2, 1], '1')).toBe(1)
    expect(at([2, 1], 'aa')).toBe(undefined)
    expect(at([1], 1)).toBe(undefined)
    expect(at([], 1)).toBe(undefined)
    expect(at([], null as any)).toBe(undefined)
    expect(at(null as any, null as any)).toBe(undefined)
  })
})