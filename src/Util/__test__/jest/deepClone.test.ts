import * as _ from '../..'

describe('deepClone', () => {
  it('base', () => {
    expect(_.deepClone(/123/)).toEqual(/123/)
    expect(_.deepClone(new Date(2023, 1, 1, 1))).toEqual(new Date(2023, 1, 1, 1))
    const fn = a => a + 1
    expect(_.deepClone(fn)).toEqual(fn)

    const fn2 = async a => a + 1
    expect(_.deepClone(fn2)).toEqual(fn2)

  })
})