import * as _ from '../..'
import { add } from 'unit-testing-js'

describe('delay', () => {
  it('base', async () => {
    const res = await _.delay(add, 0, 1, 2)
    expect(res).toBe(3)
  })
  it('error', async () => {
    const fn = await _.delay('' as any, 0)
    expect(fn).toBeUndefined()
  })
})