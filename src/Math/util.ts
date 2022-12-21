import { type } from 'check-it-type'
import { Itteratee } from '../type'

export function useValue(itteratee?: Itteratee): any {
	const __type: string = type(itteratee)

	return function (val: any): any {
		if (__type === 'String') return val[itteratee as string]
		if (__type === 'Function') return (itteratee as (val: any) => any)(val)
		return val
	}
}