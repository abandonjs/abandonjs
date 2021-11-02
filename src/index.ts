import { Methods } from './utils'

let RH: any = {}
for (let key in Methods) {
	RH[key] = (Methods as any)[key];
}

export {
	Methods,
	RH,
}
