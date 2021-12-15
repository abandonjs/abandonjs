import { randomNumByRange } from '../number'
import { isObject } from '../Object'

// 生成多维数组
/**
 * 
 * @param unit 初始化单元
 * @param dimension 多维指定 用&符号隔开
 * @returns 
 */
export function initMultArray(unit: any, dimension?: string): any[] {
	if (!dimension) return [unit];
	if (!unit) unit = undefined;

	let dimArr: number[] = dimension
		.split('&')
		.map((item: string): number => Number(item) || 1);

	if (dimArr.length < 2) {
		return Array(dimArr[0]).fill(unit);
	}

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

export function arraySelectOne(list: any[] = [], index?: number): any {
	if (index !== null || index !== undefined) {
		if (index > -1) return list[index]
		if (index < 0) {
			return list[list.length + index]
		}
	}
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

// 指定范围长度 来随机选择数组元素
export function arraySelectItems(list: any[], min: number, max: number): any[] {
	let len: number = randomNumByRange(min, max > list.length ? list.length : max) || 0;
	let result: any[] = [];
	let index: number = 0;
	while (len--) {
		index = ~~(Math.random() * list.length)
		result.push(list[index]);
		list.splice(index, 1);
	}
	return result
}

// 通过 size 切割数组
export function chunk(list: any[], size: number) {
	return [list.slice(0, size), list.slice(size)]
}


// 过滤掉假值 false, null, 0, "", undefined, NaN
export function compact(list: any[]) {
	return list.filter((item: any): boolean => !!item);
}

// 连接 多个数组
export function concat(...list?: any[]) {
	let result: any[] = [];
	if (list && list.length > 0) {
		let len: number = list.length;
		while (len--) {
			if (Array.isArray(list[len])) {
				result = result.concat(list[len])
			} else {
				result.push(list[len])
			}

		}
	}
	return result;
}


/**
 * 过滤数组
 * @param list 待过滤的数组
 * @param ...filterConditions 过滤使用的条件
 * @returns 过滤后的数组(new)
 */
export function difference(list: any[], ...filterConditions: any[]) {

	if (!list) return [];
	const result: any[] = list || [];

	// 整合过滤条件
	if (!filterConditions) return list;
	let [...allFilterConditions]: any[] = filterConditions || [];
	allFilterConditions = concat(...allFilterConditions);

	return result.filter((item: any): boolean => {
		return !allFilterConditions.includes(item);
	});
}

// differenceBy, differenceWith

/**
 * 去除前n个元素
 * @param any[] list 数组
 * @param number n 要去除元素个数
 * @returns any[] list 剩余切片
 */
export function drop(list: any[] = [], n: number = 0) {
	while (n--) {
		if (list.length < 1) return [];
		list.shift();
	}
	return list;
}