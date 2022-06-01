export function extendLength(value: string | number, min?: number, max?: number): string {
	const result: string = value.toString()

	if (min === undefined && max === undefined) return result

	if (max !== undefined && result.length > max) {
		return result.slice(result.length - max, result.length)
	}

	if (min !== undefined && result.length < min) {
		return new Array(min - result.length).fill(0).join('') + result
	}

	return result
}