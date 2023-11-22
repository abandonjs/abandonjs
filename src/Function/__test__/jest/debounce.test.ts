import { debounce } from '../..';

describe('debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('在指定的时间间隔内只执行一次', () => {
    const mockFn = jest.fn();

    const debouncedFn = debounce(mockFn, 1000);

    debouncedFn();
    jest.advanceTimersByTime(500);
    debouncedFn();
    jest.advanceTimersByTime(500);
    debouncedFn();
    jest.advanceTimersByTime(500);
    debouncedFn();
    jest.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});