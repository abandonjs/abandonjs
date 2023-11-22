import * as _ from '../..'

describe('stringify', () => {
  it('base', () => {
    expect(_.stringify('')).toBe('')
    expect(_.stringify([])).toBe('[]')
    expect(_.stringify(null)).toBe('null')
  })
})