import * as _ from '../..'

describe('compare', () => {
  it('base', () => {
    expect(_.compareString('a', 'b')).toBe(false)
    expect(_.compareString('aa', 'b')).toBe(true)
  })
})