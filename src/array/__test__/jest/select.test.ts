import { select, selects } from '../..'

const getList = () => {
  return [1, 2, 3, 4, 5]
}

test('select', () => {
  const val = select<number>(getList())
  if (val !== null)
    expect(val < 7).toBe(true);
})

test('select:max', () => {
  const val = select<number>(getList(), 6)
  if (val !== null)
    expect(val).toBe(2);
})
test('select:0', () => {
  const val = select<number>(getList(), 0)
  if (val !== null)
    expect(val).toBe(1);
})

test('select:null', () => {
  const val = select<number>('' as any)
    expect(val).toBe(null);
})
test('select:-1', () => {
  const val = select<number>(getList(), -1)
  if (val !== null)
    expect(val).toBe(5);
})

test('select:0-2', () => {
  const val = select<number>([])
  expect(val).toBe(null);
})
test('selects', () => {
  const vals = selects<number>(getList())
  expect(vals.length <= 5).toBe(true);
})

test('selects: len', () => {
  const vals = selects<number>(getList(), 0, 100)
  expect(vals.length <= 5).toBe(true);
})