import * as _ from '../..'

describe('reverseString', () => {
  it('base', () => {
    expect(_.reverseString('abc')).toBe('cba')
  })
})