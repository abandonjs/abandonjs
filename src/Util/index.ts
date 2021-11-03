function pick(list: any[]): string {
	return list[Math.floor(Math.random() * list.length)];
}

export {
	pick,
}