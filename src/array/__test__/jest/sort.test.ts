import { descSort, ascSort } from '../..'

const getList = () => {
  return [1, 2, 3]
}

describe('descSort', () => {
  it('1',()=>{
    expect(descSort(getList())).toEqual([3,2,1]);
  })
})

describe('ascSort', () => {
  it('1',()=>{
    expect(ascSort(getList())).toEqual([1,2,3]);
  })
})