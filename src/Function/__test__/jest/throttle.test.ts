import * as _ from '../..'

describe('throttle', () => {
  // 模拟时间的流逝
  beforeEach(() => {
    jest.useFakeTimers();
  });

  // 清除模拟的时间
  afterEach(() => {
    jest.clearAllTimers();
  });

  it('在指定的时间间隔内只执行一次', () => {
    // 创建一个模拟函数
    const mockFn = jest.fn();

    // 创建一个节流函数，设置时间间隔为1000ms
    const throttledFn = _.throttle(mockFn, 1000);

    // 第一次调用节流函数
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1); // 第一次调用会立即执行

    // 快进时间到900ms后，再次调用节流函数
    jest.advanceTimersByTime(900);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1); // 第二次调用在1000ms内，不会执行

    // 快进时间到1100ms后，再次调用节流函数
    jest.advanceTimersByTime(1100);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(2); // 第三次调用在1000ms后，会执行

  });
})