import * as _ from '../..'

describe('copyWithin', () => {
  it('base', () => {
    expect(_.copyWithin([], 1)).toEqual([])
    expect(_.copyWithin('abcde', 1)).toBe('aabcd')
    expect(_.copyWithin(['a', 'b', 'c', 'd', 'e'], 1)).toEqual(['a', 'a', 'b', 'c', 'd'])
  })
})