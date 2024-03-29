import { deepClone } from '../util/deepClone'
import { ObjectType } from '../type'

/**
 * @title arrayToTree
 * @description 数组转树
 * @param {object[]} array 
 * @param {string} id
 * @param {string} pid
 * @returns {object[]}
 * @version 2.4.1
 */
export function arrayToTree<T = unknown>(
	array: ObjectType<T>[],
	id = 'id',
	pid = 'pid',
	child = 'children'
) {
	const list: ObjectType<T>[] = deepClone(array)
	const result: ObjectType<T>[] = []
	const temp: ObjectType<any> = {}

	// 先把全部id对应项 用temp 存起来
	for (let i = 0; i < list.length; i++) temp[list[i][id] as string] = list[i]

	for (let k = 0; k < list.length; k++) {

		if (temp[list[k][pid] as string] && list[k][id] !== list[k][pid]) {
			if (!temp[list[k][pid] as string][child]) {
				temp[list[k][pid] as string][child] = []
			}
			temp[list[k][pid] as string][child].push(list[k])
		}
		else result.push(list[k])

	}
	return result
}
