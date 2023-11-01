import { filter } from '../..'

const getList = () => {
  return [1, 2, 3, 4, 5, 11].map(item => {
    return {
      val: item
    }
  })
}

test('filter:before', () => {
  expect(filter(getList())).toEqual(getList());
  expect(filter('' as unknown as any[])).toEqual([]);
  expect(filter([1, 2] as unknown as any[], {}, true)).toEqual([1, 2]);
})

test('filter', () => {
  expect(
    filter(
      getList(),
      (value: any) => {
        return value && value.val > 5
      }
    )
  ).toEqual([{ val: 11 }]);
})

test('filter-condition', () => {
  expect(
    filter(
      getList(),
      {
        val: /11/
      }
    )
  ).toEqual([{ val: 11 }]);
  expect(
    filter(
      getList(),
      {
        val: 11
      }
    )
  ).toEqual([{ val: 11 }]);
  expect(
    filter(
      getList(),
      {
        val: '11'
      }
    )
  ).toEqual([]);
  expect(
    filter(
      [...getList(), 11, {val: '11'}] as unknown as any[],
      {
        val: '11'
      }
    )
  ).toEqual([{val: '11'}]);
  expect(
    filter(
      [...getList(), 11, {val: '11'}] as unknown as any[],
      {
        val: /11/
      }
    )
  ).toEqual([{val: 11}, {val: '11'}]);
})