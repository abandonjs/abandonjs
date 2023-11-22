import * as _ from '../..'

describe('replaces', () => {
  it('base', () => {
    expect(_.replaces('abc', [{
      reg: 'a',
      value: 'aa'
    }])).toBe('aabc')
  })
})