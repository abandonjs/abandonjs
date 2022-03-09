import { _Decorator } from 'rh-ts-methods'

const { enumerable } = _Decorator
type tBaseType = any;

type iRow = any;
interface iParam {
	[key: string]: tBaseType;
}
type tTable<T> = T[];

function format(param?: iParam) {
	if (!param) return this;
	const keys: string[] = Object.keys(param);
	const keyLen: number = keys.length;
	return this.map((item: iRow): iRow => {
		let tmpItem: iRow = {};
		let tmpLen: number = keyLen;
		let i: number = 0;
		while (i < tmpLen) {
			let tmpKey: string = keys[i++]
			if (typeof param[tmpKey] === 'string') {
				tmpItem[param[tmpKey]] = item[tmpKey]
			} else {
				tmpItem[tmpKey] = item[tmpKey]
			}
		}
		return tmpItem;
	});
}

function matchItem(item: iRow, param: tBaseType): boolean {
	const keys: string[] = Object.keys(param);
	let keyLen: number = keys.length;
	while (keyLen--) {
		let tempkey: string = keys[keyLen]
		if (item[tempkey] !== param[tempkey]) {
			return false;
		}
	}
	return true;
}

function select(whereParam?: iParam): any {
	if (!whereParam) return this;
	let list = this.filter((item: iRow): iRow => {
		if (matchItem(item, whereParam)) return item;
	})
	Object.defineProperty(list, 'format', {
		value: format,
	})
	return list;
}

function selectPage(pageSize: number | string, pageNo: number | string, whereParam?: iParam): any {
	let list: any[] = []
	if (!pageSize) pageSize = 10;
	if (!pageNo || !(Number(pageNo) > 1)) pageNo = 1;
	let min: number = Number(pageSize) * (Number(pageNo) - 1);
	let max: number = Number(pageSize) * Number(pageNo);
	if (!whereParam) list = this;
	else {
		list = this.filter((item: iRow): iRow => {
			if (matchItem(item, whereParam)) return item;
		})
		Object.defineProperty(list, 'format', {
			value: format,
		})
	}
	return list.filter((item: iRow, index: number): iRow => {
		if (index >= min && index < max) return item;
	});
}

function update(whereParams: iParam | iParam[], updateParam: iParam): any {
	if (!Array.isArray(whereParams)) whereParams = [whereParams];
	this.filter((item: iRow, index: number): iRow => {
		const tmpLen: number = whereParams.length;
		let i: number = 0;
		while (i < tmpLen) {
			if (matchItem(item, whereParams[i++])) {
				this[index] = Object.assign(this[index], updateParam);
				break;
			}
		}
	});
	return this;
}

function del(whereParams: iParam | iParam[]): any {
	if (!Array.isArray(whereParams)) whereParams = [whereParams];
	this.filter((item: iRow, index: number): iRow => {
		const tmpLen: number = whereParams.length;
		let i: number = 0;
		while (i < tmpLen) {
			if (matchItem(item, whereParams[i++])) {
				this.splice(index, 1);
				break;
			}
		}
	});
	return this;
}

function add(row: iRow | iRow[]): any {
	if (Array.isArray(row)) {
		const len: number = row.length;
		let i: number = 0;
		while (i < len) this.push(row[i++])
	} else this.push(row);
	return this;
}

function initCRUD(tableData: any[]): void {
	Object.defineProperties(tableData, {
		select: { value: select },
		selectPage: { value: selectPage },
		add: { value: add },
		update: { value: update },
		del: { value: del },
		format: { value: format }
	})
}

// 简易数据临时存储实现实现
// 生成数据库的同时生成 对应的接口 配置 , 再通过app去注册
class VirtualDao<T extends iParam[]> {
	@enumerable(false)
	init(tableName: string, tableData?: tTable<T>): any {
		if (!tableData) tableData = [];
		initCRUD(tableData)
		this[tableName] = tableData ?? []
		return this;
	}
	@enumerable(false)
	insert(tableName: string, tableData: tTable<T>): any {
		if (!this[tableName]) this.init(tableName);
		if (Array.isArray(tableData)) {
			const len: number = tableData.length;
			let i: number = 0
			while (i < len) this[tableName].push(tableData[i++]);
		} else {
			this[tableName].push(tableData);
		}
		return this;
	}
}

export default VirtualDao