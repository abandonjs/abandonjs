/**
 * @title logGroup
 * @description 分组打印(简化console.groupCollapsed)
 * @param {string} name 分组名称
 * @param {unknown[]} ...args 需要分组打印的结果
 * @example logGroup(name[, ...args])
 */
export function logGroup(name: string = '', ...args: unknown[]) {
	console.groupCollapsed(`--- ${name} ---`)
	args.forEach((item) => {
		console.log(item)
	})
	console.groupEnd()
}