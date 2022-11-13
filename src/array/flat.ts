function flatten1(arr: unknown) {
	if (!Array.isArray(arr)) return [];

	let result: unknown[] = []

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			result = result.concat(flatten1(arr[i]))
			continue
		}
		result.push(arr[i])
	}
	
	return result;
}

function flatten2(arr) {
	return arr.reduce(function (pre, cur) {
		return pre.concat(Array.isArray(cur) ? flatten2(cur) : cur)
	}, [])
}


function flatten3(arr: any[]) {
	while (arr.some(i => Array.isArray(i))) {
		arr = [].concat(...arr);
	}
	return arr;
}

function flatten4(arr: unknown[]) {
	return arr.toString().split(',').map(i => Number(i));
}

function flatten5(arr) {
	return arr.flat(Infinity);
}

export function flat(list: unknown): unknown[] {
	if (!Array.isArray(list)) return []

	return flatten1(list)


	return []
}