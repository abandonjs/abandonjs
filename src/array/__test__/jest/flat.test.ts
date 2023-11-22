import { flat } from '../..'

const getList = () => {
  return [1, [11], 2, 3, 4, 5,]
}

test('flat', () => {
  expect(flat(getList())).toEqual([1, 11, 2, 3, 4, 5]);
  expect(flat('' as any)).toEqual(['']);
  expect(flat(undefined as any)).toEqual([]);
  expect(flat([])).toEqual([]);
  expect(flat([[]],2)).toEqual([]);
  expect(flat([[2]],2)).toEqual([2]);
  expect(flat([])).toEqual([]);
})