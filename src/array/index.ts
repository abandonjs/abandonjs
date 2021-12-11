import { randomNumByRange } from '../number'
import { isObject } from '../Object'

// 生成多位数组 
/**
 * 
 * @param unit 初始化单元
 * @param dimension 多维指定 用&符号隔开
 * @returns 
 */
export function initMultArray(unit: any, dimension?: string): any[] {
	if (!dimension) return [];
	if (!unit) unit = undefined;

	let dimArr: number[] = dimension
		.split('&')
		.map((item: string): number => Number(item) || 1);

	let depth: number = dimArr.length;
	let arrItem: any[] = Array(dimArr[--depth]).fill(unit)
	do {
		let tmp_arrItem: any[] = JSON.parse(JSON.stringify(arrItem)) || [];
		arrItem = Array(dimArr[--depth]).fill(tmp_arrItem);
	} while (depth)

	return arrItem;
}


// 去除数组重复项
export function arrayUniqueItem(list: any[]) {
	return [...new Set(list)]
}


export function generateArrayByNum(num: number, item?: any): any[] {
	return new Array(num).fill(item || '')
}

export function arraySelectOne(list: any[]): any {
	return list[~~(Math.random() * list.length)];
}


// 单层过滤
export function arrayFilterByObject(list: any[], filter: { [key: string]: any }, retainNotObject = false): any[] {
	if (!filter || list.length === 0) return list;
	let regObj: { [key: string]: RegExp } = {};
	// 生成相应的 RegExp
	for (let key in filter) regObj[key] = new RegExp(filter[key], 'i')
	// 开始过滤
	return list.filter((item: any): boolean => {
		if (!isObject(item)) return retainNotObject;
		for (let key in regObj) {
			if (isObject(item[key])) return false;
			if (!regObj[key].test(String(item[key]))) return false;
		}
		return true;
	})
}

// 多层过滤

export function arraySelectItemsByRange(list: any[], min: number, max: number): any[] {
	let len: number = randomNumByRange(min, max) || 0;
	let result: any[] = [];
	let index: number = 0;
	while (len--) {
		index = ~~(Math.random() * list.length)
		result.push(list[index]);
		list.splice(index, 1);
	}
	return result
}
