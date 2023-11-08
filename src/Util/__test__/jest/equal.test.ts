import { equal } from '../..'

test('equal:false', () => {
  expect(equal('a', 'b')).toBe(false)
  expect(equal('1', 1)).toBe(false)
  expect(equal('{}', {})).toBe(false)
  expect(equal(Symbol('1'), Symbol('2'))).toBe(false)
  const set_1 = new Set()
  set_1.add(1)
  const set_2 = new Set()
  expect(equal(set_1, set_2)).toBe(false)

})
test('equal:true', () => {
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