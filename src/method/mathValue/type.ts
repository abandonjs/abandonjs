export type ValBase = number | string | boolean | ValBase[] | {
	[key: string]: ValBase
}
export type Val = ValBase

export type ValerBase = number | string | boolean | RegExp
export type Valer = ValerBase | ValBase[] | {
	[key: string]: Valer
}