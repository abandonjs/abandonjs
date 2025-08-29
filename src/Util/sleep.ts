/**
 * @title  sleep
 * @description 睡眠 / 异步延迟
 * @param {number} [ms=500]
 * @returns {Promise<void>}
 */
export function sleep(ms: number = 500): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// // 使用示例
// async function doSomething() {
//   console.log('Start');
//   await sleep(2000);
//   console.log('End after 2 seconds');
// }
// doSomething();
