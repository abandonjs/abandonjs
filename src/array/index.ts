import { randomNumByRange } from '../number'

export function GenerateArrayByNum(num: number, item?: any): any[] {
	return new Array(num).fill(item || '')
}

export function selectOne(list: any[]): any {
	return list[~~(Math.random() * list.length)];
}

export function selectItemsByRange(list: any[], min: number, max: number): any[] {
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
