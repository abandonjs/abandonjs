import { drop, dropRight } from '../..'

const getList = () => [1, 2, 3, 4, 5]

test('drop', () => {
  expect(drop(null as unknown as [], 100)).toEqual([]);
  expect(drop([], 100)).toEqual([]);
  expect(drop(getList(), 0)).toEqual([1, 2, 3, 4, 5]);
  expect(drop(getList(), 1)).toEqual([2, 3, 4, 5]);
  expect(drop(getList(), 2)).toEqual([3, 4, 5]);
})

test('dropRight', () => {
  expect(dropRight(getList(), 0)).toEqual([1, 2, 3, 4, 5]);
  expect(dropRight(getList(), 1)).toEqual([1, 2, 3, 4]);
  expect(dropRight(getList(), 2)).toEqual([1, 2, 3]);
})