/**
 * @title logGroup
 * @description 分组打印(简化console.groupCollapsed)
 * @param { string } name 分组名称
 * @param { unknown[] } ...args 需要分组打印的结果
 * @example logGroup(name[, ...args])
 * @return boolean
 */
export function logGroup(name = '', ...args: unknown[]): boolean {
	try {
		console.groupCollapsed(`--- ${name} ---`)
		args.forEach((item) => {
			console.log(item)
		})
		console.groupEnd()
		return true
	} catch (error) {
		console.error(error)
		return false
	}
}

export async function logAsync(name = '', ...args: unknown[]): Promise<boolean> {
	try {
		for (let i = 0; i < args.length; i++) {
			console.log(`${name}-${i}:`, await args[i])
		}
		return true
	} catch (error) {
		console.error(error)
		return false
	}
}