import { runTime } from 'rh-test'
import { logAsync } from '../../../util'
import { cases } from './flat-runtime.cases'

export function flatten(arr: unknown) {
	if (!Array.isArray(arr)) return [];

	let result: unknown[] = []

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			result = result.concat(flatten(arr[i]))
			continue
		}
		result.push(arr[i])
	}

	return result;
}

export function flattenReduce(arr) {
	return arr.reduce(function (pre, cur) {
		return pre.concat(Array.isArray(cur) ? flattenReduce(cur) : cur)
	}, [])
}


export function flattenSome(arr: any[]) {
	while (arr.some(i => Array.isArray(i))) {
		arr = [].concat(...arr);
	}
	return arr;
}

export function flattenToString(arr: unknown[]) {
	return arr.toString().split(',').map(i => Number(i));
}

export function flattenArrayFlat(arr) {
	return arr.flat(Infinity);
}

function logCasesTime(name, fn) {
	logAsync(name, ...cases.map(async item => (await runTime(fn, item)).runTime))
}

// logCasesTime('flattenArrayFlat-run-time', flattenArrayFlat)
// logCasesTime('flattenArrayFlat-run-time', flattenArrayFlat)
// logCasesTime('flattenArrayFlat-run-time', flattenArrayFlat)
// logCasesTime('flattenArrayFlat-run-time', flattenArrayFlat)
// logCasesTime('flat-toString-run-time', flattenToString)
// logCasesTime('flat-toString-run-time', flattenToString)
// logCasesTime('flat-toString-run-time', flattenToString)
// logCasesTime('flat-toString-run-time', flattenToString)
// logCasesTime('flat-run-time', flatten)
// logCasesTime('flat-run-time', flatten)
// logCasesTime('flat-run-time', flatten)
// logCasesTime('flat-run-time', flatten)
// logCasesTime('flattenReduce-run-time', flattenReduce)
// logCasesTime('flattenReduce-run-time', flattenReduce)
// logCasesTime('flattenReduce-run-time', flattenReduce)
// logCasesTime('flattenReduce-run-time', flattenReduce)
// logCasesTime('flattenSome-run-time', flattenSome)
// logCasesTime('flattenSome-run-time', flattenSome)
// logCasesTime('flattenSome-run-time', flattenSome)
// logCasesTime('flattenSome-run-time', flattenSome)

// 测试结果 flattenSome 目前最快