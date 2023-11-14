import * as _  from '../..'

describe('toFirstUpperCase', () => {

  it('simple', () => {
    const fn = _.toFirstUpperCase
    expect(fn('aaa')).toBe('Aaa')
  })
})

describe('toUpperCase', () => {

  it('simple', () => {
    const fn = _.toUpperCase
    expect(fn('aaa')).toBe('AAA')
  })
})


describe('toFirstLowerCase', () => {

  it('simple', () => {
    const fn = _.toFirstLowerCase
    expect(fn('AAA')).toBe('aAA')
  })
})

describe('toLowerCase', () => {

  it('simple', () => {
    const fn = _.toLowerCase
    expect(fn('AAA')).toBe('aaa')
  })
})