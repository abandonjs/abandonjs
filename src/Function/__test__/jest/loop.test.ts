import { loop } from '../..'

describe('loop', () => {
  it('empty', () => {
    expect(loop([], undefined as any)).toBe(undefined)
  })
  it('base', () => {
    const result: any[] = []

    loop([
      [2, 3, 2],
      [1, 3, 4],
      1,
    ], (values: any, indexes: any) => {
      result.push({ values, indexes })
    })

    const value = [
      { values: [2, 1, 1], indexes: [0, 0, 0] },
      { values: [2, 3, 1], indexes: [0, 1, 0] },
      { values: [2, 4, 1], indexes: [0, 2, 0] },
      { values: [3, 1, 1], indexes: [1, 0, 0] },
      { values: [3, 3, 1], indexes: [1, 1, 0] },
      { values: [3, 4, 1], indexes: [1, 2, 0] },
      { values: [2, 1, 1], indexes: [2, 0, 0] },
      { values: [2, 3, 1], indexes: [2, 1, 0] },
      { values: [2, 4, 1], indexes: [2, 2, 0] },
    ]
    expect(result).toEqual(value)
  })
})