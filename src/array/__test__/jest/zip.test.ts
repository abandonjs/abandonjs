import { zip, zipObject } from '../..'

describe('zip', () => {
  it('1', () => {
    expect(zip([1, 2], [3], [5,6])).toEqual([
      [1, 3, 5],
      [2, undefined, 6],
    ]);
    expect(zip([1, 2], [3, 4], [5,6])).toEqual([
      [1, 3, 5],
      [2, 4, 6],
    ]);
  })
})

describe('zipObject', () => {
  it('1', () => {
    expect(zipObject([1, 2], [3, 4])).toEqual({
      1: 3,
      2: 4
    });
  })
})