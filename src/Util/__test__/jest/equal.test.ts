import { equal, equalObject } from '../..'

describe('equal', () => {
  it('object', () => {
    expect(equal({ a: 1 }, { a: 1 })).toBe(true)
    expect(equal({ a: 1 }, { a: 2 })).toBe(false)
    expect(equal({ a: 1, b: 2 }, { a: 2 })).toBe(false)
    expect(equalObject({ a: 1, b: 2 }, 'a' as any)).toBe(false)
  })
  it('size', () => {
    expect(equal(new Map(), new Map([[1, 1]]))).toBe(false)
  })
})

test('equal:false', () => {
  expect(equal('a', 'b')).toBe(false)
  expect(equal('1', 1)).toBe(false)
  expect(equal('{}', {})).toBe(false)
  expect(equal(Symbol('1'), Symbol('2'))).toBe(false)
  const set_1 = new Set()
  set_1.add(1)
  const set_2 = new Set()
  set_2.add(2)
  expect(equal(set_1, set_2)).toBe(false)
  const set_3 = new Set()
  set_3.add(1)
  const set_4 = new Set()
  expect(equal(set_3, set_4)).toBe(false)

  expect(equal(new Map([['a', '2']]), new Map([['a', '1']]))).toBe(false)
})
test('equal:true', () => {

  expect(equal(new Map([['a', '1']]), new Map([['a', '1']]))).toBe(true)

  expect(equal('a', 'a')).toBe(true)
  expect(equal(1, 1)).toBe(true)
  expect(equal({}, {})).toBe(true)
  const a = Symbol('a')
  expect(equal(a, a)).toBe(true)
  const set_1 = new Set()
  set_1.add(1)
  const set_2 = new Set()
  set_2.add(1)
  expect(equal(set_1, set_2)).toBe(true)
})