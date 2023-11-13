import { toString } from '../..'

describe('toString', () => {

  it('simple', () => {

    expect(toString('')).toBe('')
    expect(toString(NaN)).toBe('NaN')
    expect(toString(Infinity)).toBe('Infinity')
    expect(toString(-Infinity)).toBe('-Infinity')
    // expect(toString(-Infinity)).toBe('-Infinity')
    // expect(toString(-Infinity)).toBe('-Infinity')
    
  })
})