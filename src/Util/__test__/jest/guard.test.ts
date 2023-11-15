import * as _ from '../..'

describe('guard', () => {
  it('simple:true', () => {
    const fn = _.guard(JSON.parse, -1)
    expect(fn('{123}')).toBe(-1)
  })

  it('simple:false', () => {
    // const fn = _.compareNumber
    // expect(fn(1, '1')).toBe(false)
    // expect(fn('1' as any, 2)).toBe(false)
  })
})

describe('asyncGuard', () => {
  it('simple:true', async () => {
    const fn = _.asyncGuard(async (value: string)=> JSON.parse(value), -1)
    expect(await fn('{123}')).toBe(-1)
  })

  it('simple:false', () => {
    // const fn = _.compareNumber
    // expect(fn(1, '1')).toBe(false)
    // expect(fn('1' as any, 2)).toBe(false)
  })
})