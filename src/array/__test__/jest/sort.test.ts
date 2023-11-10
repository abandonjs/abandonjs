import { descSort, ascSort } from '../..'

const getList = () => {
  return [1, 3, 2]
}

describe('descSort', () => {
  it('1', () => {
    expect(descSort([{}, {}])).toEqual([{},{}]);
    expect(
      descSort(['a', 'c', 'b', {a: 'e'}, {}], 'a')
    ).toEqual(
      [{a: 'e'},'c', 'b', 'a', {}]
    );
    expect(descSort(undefined as any)).toEqual([]);
    expect(descSort(getList())).toEqual([3, 2, 1]);
    expect(descSort(['1', '3', '2'])).toEqual(['3', '2', '1']);
    expect(descSort(['1', { a: '3' }, '2'], 'a')).toEqual([{ a: '3' }, '2', '1']);
    expect(
      descSort(['1', { a: '3' }, { a: '4' }, '2'], 'a')
    ).toEqual(
      [{ a: '4' }, { a: '3' }, '2', '1']
    );
    expect(
      descSort([100, { a: 50 }, '1', { a: '3' }, { a: '4' }, '2'], 'a')
    ).toEqual(
      [100, { a: 50 }, { a: '4' }, { a: '3' }, '2', '1']
    );
  })
})

describe('ascSort', () => {
  it('1', () => {
    expect(ascSort([{},{}])).toEqual([{},{}]);
    expect(
      ascSort(['a', 'c', 'b', {a: 'e'}, {}], 'a')
    ).toEqual(
      ['a', 'b', 'c', {a: 'e'}, {}]
    );
    expect(ascSort(undefined as any)).toEqual([]);
    expect(ascSort(getList())).toEqual([1, 2, 3]);
    expect(ascSort(['1', '3', '2'])).toEqual(['1', '2', '3']);
    expect(
      ascSort([100, '1', { a: 50 }, { a: '3' }, { a: '4' }, '2'], 'a')
    ).toEqual(
      ['1', '2', { a: '3' }, { a: '4' }, { a: 50 }, 100]
    );
  })
})