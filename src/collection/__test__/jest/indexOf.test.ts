import { indexOf } from '../..'

describe('indexOf', () => {

  it('simple', ()=>{
    expect(indexOf([1,2,3], 'a')).toBe(-1)
    expect(indexOf('123', 'a')).toBe(-1)
    expect(indexOf(new Function() as any, 'a')).toBe(undefined)

    expect(indexOf({'123': 'a'}, 'a')).toBe('123')
    expect(indexOf({'123': 'a'}, 'aa')).toBe(undefined)
    expect(indexOf({}, 'a')).toBe(undefined)

    expect(indexOf(new Map([['123','a']]), 'a')).toBe('123')
    expect(indexOf(new Map([['123','a']]), 'ab')).toBe(undefined)
    expect(indexOf(new Map(), 'a')).toBe(undefined)

    expect(indexOf(new Set('a'), 'a')).toBe(0)
    expect(indexOf(new Set('123'), 'a')).toBe(-1)
    expect(indexOf(new Set(), 'a')).toBe(-1)
  })
})