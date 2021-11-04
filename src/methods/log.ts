export const log:
	(...arg: any[]) => void
	= (...arg: any[]): void => {
		if (Array.isArray(arg)) {
			arg.forEach((item: any): void => {
				console.log(item);
			})
		} else {
			console.log(arg)
		}
}