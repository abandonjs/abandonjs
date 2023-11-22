import * as _ from '../..'

describe('copyWithin', () => {
  it('base', () => {
    expect(_.entries([])).toEqual([].entries())
    expect(_.entries('abcde')).toEqual('abcde'.split('').entries())
    expect(_.entries(['a', 'b', 'c', 'd', 'e'])).toEqual(['a', 'b', 'c', 'd', 'e'].entries())
  })
})