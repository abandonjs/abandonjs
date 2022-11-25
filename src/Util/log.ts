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

/**
 * @title logAsync
 * @description 可直接打印 Promise 值
 * @param ...args 
 * @returns boolean
 * @version 2.2.0
 */
export async function logAsync(...args: unknown[]): Promise<boolean> {
	try {
		const result: unknown[] = []
		for (let i = 0; i < args.length; i++) {
			result.push(await args[i])
		}
		console.log(...result)
		return true
	} catch (error) {
		console.error(error)
		return false
	}
}