import { toString, toStrings } from '../..'

describe('toString', () => {

  it('simple', () => {

    expect(toString(new Set([1]))).toBe('[object Set]')
    expect(toString('')).toBe('')
    expect(toString(NaN)).toBe('')
    expect(toString(null)).toBe('')
    expect(toString(undefined)).toBe('')
    expect(toString(Infinity)).toBe('Infinity')
    expect(toString(-Infinity)).toBe('-Infinity')
    expect(toString(1)).toBe('1')
    
  })
})


describe('toStrings', () => {

  it('simple', () => {
    expect(toStrings([new Set([1])])).toEqual(['[object Set]'])
    expect(toStrings([''])).toEqual([''])
    expect(toStrings([NaN])).toEqual([''])
    expect(toStrings([null])).toEqual([''])
    expect(toStrings([undefined])).toEqual([''])
    expect(toStrings([Infinity])).toEqual(['Infinity'])
    expect(toStrings([-Infinity])).toEqual(['-Infinity'])
    expect(toStrings([1])).toEqual(['1'])
    
  })
})