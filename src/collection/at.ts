import { isArray, isString } from "check-it-type"

export function at<T = unknown>(value: string | T[], index: number) {
	if (isString(value)) return value[index]
	if (isArray(value)) return value.at(index)
	return undefined
}