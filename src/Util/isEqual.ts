import { stringify } from '../string'

export function isEqual(compareValue: unknown, beCompareValue: unknown): boolean {
	if (compareValue === beCompareValue) return true
	return stringify(compareValue) === stringify(beCompareValue)
}