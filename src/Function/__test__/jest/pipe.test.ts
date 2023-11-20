import * as _ from '../..'
// import { add } from 'unit-testing-js'

describe('pipe', () => {
  it('base', () => {
    const fn = _.pipe(
      	(a, b) => [a + b, a - b],
				(a, b) => a ** b
    )
    expect(fn(5, 2)).toBe(7**3)
    // expect(fn(1, 100)).toBe(2)
  })
  // it('error', () => {
  //   const fn = _.pipe('' as any, 1)
  //   expect(fn(1)).toBeUndefined()
  // })
})