import { flat } from '../..'

const getList = () => {
  return [1, [11], 2, 3, 4, 5,]
}

test('flat', () => {
  expect(flat(getList())).toEqual([1, 11, 2, 3, 4, 5]);
})