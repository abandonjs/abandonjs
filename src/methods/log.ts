export function log(...arg: any[]): void {
		if (Array.isArray(arg)) {
			arg.forEach((item: any): void => {
				console.log(item);
			})
		} else {
			console.log(arg)
		}
}