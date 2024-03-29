import { fill } from '../..'

const getList = () => [1, 2, 3, 4, 5]

test('fill', () => {
  expect(fill(getList(), 0)).toEqual([1, 2, 3, 4, 5]);
  expect(fill(getList(), 0, 1)).toEqual([1, 2, 3, 4, 5, 0]);
  expect(fill(getList(), 0, 1)).toEqual([1, 2, 3, 4, 5, 0]);
  expect(fill([], v=>v, 3)).toEqual([0, 1, 2]);
})