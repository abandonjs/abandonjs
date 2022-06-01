import { Val } from './type';

export function toPathValue(val: Val, path: string): Val {

	const paths: string[] = path.split('.') || []

	paths.forEach((item: string) => {
		val = val[item] ?? undefined
	})

	return val

}