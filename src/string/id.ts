/**
 * @title vid
 * @description 获取虚拟id (时间戳)
 * @returns {string}
 */
export const vid = () => {
  return new Date().getTime().toString()
}