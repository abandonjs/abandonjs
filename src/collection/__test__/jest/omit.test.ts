import { omit } from '../..'

describe('omit', () => {

  it('simple', () => {
    expect(omit(null as any)).toEqual({})
    expect(omit({})).toEqual({})
    expect(omit({ a: 1 }, ['a'])).toEqual({})
    
    expect(
      omit(new Map([[1, 2]],), [1])
    ).toEqual(
      new Map([])
    )
  })
})