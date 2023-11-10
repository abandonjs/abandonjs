import { hide } from '../..'

describe('omit', () => {

  it('simple', () => {

    expect(hide(null as any)).toBe('')
    expect(hide('1234')).toBe('****')
    expect(hide({} as any)).toBe('**')
    expect(hide('1234', 1, 3)).toBe('1**4')
    expect(hide('1234', 2, -1)).toBe('****')
    expect(hide('1234', 1)).toBe('1***')
    
  })
})