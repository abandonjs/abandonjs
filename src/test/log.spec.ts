// import { mocked } from 'ts-jest/utils'
import { log } from '../utils'

// test('测试jest.fn()调用', () => {
//   let mockFn = jest.fn();
//   let result = mockFn(1, 2, 3);

//   // 断言mockFn的执行后返回undefined
//   expect(result).toBeUndefined();
//   // 断言mockFn被调用
//   expect(mockFn).toBeCalled();
//   // 断言mockFn被调用了一次
//   expect(mockFn).toBeCalledTimes(1);
//   // 断言mockFn传入的参数为1, 2, 3
//   expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
// })

test('log test', () => {
	expect(log)
})

// test('sum fn test', () => {
// 	let mockFn = jest.fn(sum);
// 	expect(mockFn(10,10)).toBe(20)
// })

// test('mockFn', () => {
// 	let mockFn = jest.fn((num1, num2) => {
// 		return num1 * num2;
// 	})
// 	expect(mockFn(10, 10)).toBe(100);
// })