import { type } from "../type"
import { Valer } from './type'

export function matchNumberValue(val: number, valer: Valer) {

	const valType: string = type(val)
	const valerType: string = type(valer)

	if (valerType === 'RegExp') {
		return (valer as RegExp).test(String(val))
	}

	if (valType !== 'Number') {
		return false
	}

	if (valerType === 'String') {

		const [matNum, Sym = '=']: string[] = /(?<=([<>=!]+))[0-9]+/gi.exec(valer as string) || []
		
		switch (Sym) {
			case '=': return val === Number(matNum)
			case '>': return val > Number(matNum)
			case '>=': return val >= Number(matNum)
			case '<': return val < Number(matNum)
			case '<=': return val <= Number(matNum)
			case '<>':
			case '!=': return val != Number(matNum)
		}
	}

	return false

}