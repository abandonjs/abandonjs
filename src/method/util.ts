// 生成长度为len的数字id
export function useNumberId(len: number): string {
  const temp_id: string = Math.random().toString().slice(2)
  len -= temp_id.length
  if (len < 0) {
    return temp_id.slice(-len)
  }
  return `${temp_id + useNumberId(len)}`
}
