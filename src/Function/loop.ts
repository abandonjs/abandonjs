import { isEffectArray, isEmpty } from "asura-eye"

function loopCore<T>(
	target: T[][] | T[],
	callback: (values?: T[], indexes?: number[]) => void,
	index: number = 0,
	values: T[] = [],
	indexes: number[] = []
) {
	if (index < target.length) {
		const nowTarget = target[index]
		if (isEffectArray(nowTarget)) {
			for (let i = 0; i < nowTarget.length; i++) {
				const newValues = values.concat(nowTarget[i])
				const newIndexes = indexes.concat(i)
				loopCore(target, callback, index + 1, newValues, newIndexes)
			}
		} else {
			const newValues = values.concat(nowTarget)
			const newIndexes = indexes.concat(0)
			return loopCore(target, callback, index + 1, newValues, newIndexes)
		}

	} else {
		callback(values, indexes)
	}
}

/**
 * @title loop<T>
 * @description: 指定数组遍历遍历
 * @param {T[][]} target
 * @param {(values?:T[],indexes?:number[])=>void} callback
 * @update 3.5.0
 */
export function loop<T = any>(
	target: T[][] | T[],
	callback: (values?: T[], indexes?: number[]) => void,
) {

	if (isEmpty(callback)) return;

	loopCore(target, callback)
	return;
}