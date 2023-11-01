import { filter } from '../..'

const getList = () => {
  return [1, 2, 3, 4, 5, 11].map(item => {
    return {
      val: item
    }
  })
}

test('filter', () => {
  expect(filter(getList())).toEqual(getList());
  expect(filter('' as unknown as any[])).toEqual([]);

  expect(
    filter(
      getList(),
      (value: any) => {
        return value && value.val > 5
      }
    )
  ).toEqual([{ val: 11 }]);
})