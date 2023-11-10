import { toArray } from '../..'

const getList = () => {
  return [1, 2, 3]
}

describe('descSort', () => {
  it('1',()=>{
    expect(toArray(getList())).toEqual([1,2,3])
    expect(toArray(undefined as any)).toEqual([])
    expect(toArray(new Map([[1,2], [3,4]]))).toEqual([[1,2], [3,4]])
    expect(toArray({'a':1})).toEqual([['a',1]])
    expect(toArray(new Set([1]))).toEqual([1])
  })
})