import * as _ from '../..'

describe('compareValue', () => {

  it('simple:true', () => {
    const fn = _.compareValue
    expect(fn({ a: 1 }, 1, 'a')).toBe(true)
  })
  
  it('simple', () => {
    const fn = _.compareValue
    expect(fn({ a: 1 }, 2, 'a')).toBe(false)
  })
})
