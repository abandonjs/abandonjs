import { randomNumByRange } from '../number'
import { isObject } from '../Object'

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
	let regObj: { [key: string]: RegExp<any> } = {};
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
