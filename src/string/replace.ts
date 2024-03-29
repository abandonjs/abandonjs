/**
 * @title replaces
 * @description 同时定义多个replace的规则使用
 * @param {string} target
 * @param {{reg:RegExp|string,value:string}[]} regs 
 * @returns {string}
 */
export function replaces(target: string = '', regs: {
  reg: RegExp | string,
  value: string
}[] = []): string {
  for (let i = 0; i < regs.length; i++) {
    const { reg, value } = regs[i]
    target = target.replace(reg, value)
  }
  return target
}