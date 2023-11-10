import { getIndex } from '../..'

describe('getIndex', () => {

  it('simple', ()=>{
    expect(getIndex([1,2,3], 'a')).toBe(undefined)
    expect(getIndex([1,2,3], 100)).toBe(2)
    expect(getIndex([1,2,3], -1)).toBe(2)
  })
})