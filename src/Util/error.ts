export function throwError<T extends [], R = any>(
	func: (...args: any) => any, 
	isErrorResult: any,
	...args: T
): R {
	try {
		return func(...args)
	} catch (error) {
		return isErrorResult
	}
}