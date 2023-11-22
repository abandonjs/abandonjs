import { unique } from '../..'

describe('unique', () => {
  it('1', () => {
    expect(unique([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(unique([1, 2, 3, 4, 4, 4])).toEqual([1, 2, 3, 4]);
  })
})