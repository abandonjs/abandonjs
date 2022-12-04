import { type } from "../util"

/**
 * @title isObject
 * @description 判断是否为Object
 * @param value 
 * @returns boolean
 */
export function isObject(value: unknown): value is Record<any, any> {
	return type(value) === 'Object'
}

export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'

export const isPromise = (value: unknown): value is Promise<any> => {
  return type(value) === 'Promise'
}

const toString = Object.prototype.toString;

export const isMap = (val: unknown): val is Map<any, any> => toString.call(val) === '[object Map'
export const isSet = (val: unknown): val is Set<any> => toString.call(val) === '[object Set]'