import * as _ from '../..'
import { add } from 'unit-testing-js'

describe('runFunc', () => {
  it('base', () => {
    expect(_.runFunc(add, 1, 2)).toBe(3)
  })
  it('async', async () => {
    expect(await _.runFunc(async (a, b) => add(a, b), 1, 2)).toBe(3)
  })
})