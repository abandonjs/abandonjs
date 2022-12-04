import { stringify } from '../string'

export function isEqual(compareValue: unknown, beCompareValue: unknown): boolean {
	return stringify(compareValue) === stringify(beCompareValue) && compareValue === beCompareValue
}