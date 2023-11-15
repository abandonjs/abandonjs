import * as _ from '../..'

describe('guard', () => {
  it('simple', () => {
    const fn = _.guard(JSON.parse, -1)
    expect(fn('{123}')).toBe(-1)
  })

  it('simple:error', () => {
    const fn = _.guard('aaa', -1)
    expect(fn(1)).toBe(-1)
  })
})

describe('asyncGuard', () => {
  it('simple', async () => {
    const fn = _.asyncGuard(async (value: string)=> JSON.parse(value), -1)
    expect(await fn('{123}')).toBe(-1)
    const fn2 = _.asyncGuard((value: string)=> JSON.parse(value), -1)
    expect(await fn2('{123}')).toBe(-1)
  })

  it('simple:error', async () => {
    const fn = _.asyncGuard('123',-1)
    expect(await fn(1, '1')).toBe(-1)
  })
})