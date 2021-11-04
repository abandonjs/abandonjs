function pick(list: any[]): string {
	return list[Math.floor(Math.random() * list.length)];
}

// 当做空值 undefined, null, NaN
function isEmpty(value: any): boolean {
	if (
		value === undefined
		|| value === null
		|| value === NaN
	) return true;
	return false;
}


export {
	pick,
	isEmpty,
}