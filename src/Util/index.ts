export function checkStr(str: string, type: stirng): boolean {
	switch (type) {
		case 'phone':
			//手机号码
			return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
		case 'tel':
			//座机
			return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
		case 'card':
			//身份证 
			return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
		case 'pwd':
			//密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线 
			return /^[a-zA-Z]\w{5,17}$/.test(str)
		case 'postal':
			//邮政编码
			return /[1-9]\d{5}(?!\d)/.test(str);
		case 'QQ':
			//QQ号
			return /^[1-9][0-9]{4,9}$/.test(str);
		case 'email':
			//邮箱 
			return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
		case 'money':
			//金额(小数点2位) 
			return /^\d*(?:\.\d{0,2})?$/.test(str);
		case 'URL':
			//网址
			return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
		case 'IP':
			//IP
			return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
		case 'date':
			//日期时间
			return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str) case 'number':
			//数字
			return /^[0-9]$/.test(str);
		case 'english':
			//英文
			return /^[a-zA-Z]+$/.test(str);
		case 'chinese':
			//中文
			return /^[\\u4E00-\\u9FA5]+$/.test(str);
		case 'lower':
			//小写 
			return /^[a-z]+$/.test(str);
		case 'upper':
			//大写
			return /^[A-Z]+$/.test(str);
		case 'HTML':
			//HTML标记
			return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
		default:
			return true;
	}
}



// 分组打印(简化console.groupCollapsed)
export function logGroup(name: string = '', ...list: any[]) {
	console.groupCollapsed(`--- ${name} ---`)
	Array.isArray(list)
		&& list.length > 0
		&& list.forEach((item: any) => {
			console.log(item)
		})
	console.groupEnd()
}

// 从数组中取任意 一个 元素
export function pick(list: any[]): string {
	return list[Math.floor(Math.random() * list.length)];
}

// 返回数据类型
export function type(param: any): string {
	const result: string = Object.prototype.toString.call(param).match(/\[object (\w+)\]/)[1];
	if (result === 'Number' && isNaN(param)) return 'NaN';
	return result;
}

// 当做空值 undefined, null, NaN
export function isEmpty(value: any): boolean {
	if (
		value === undefined
		|| value === null
		|| isNaN(value)
	) return true;
	return false;
}

// 深拷贝
export function deepClone(obj: any, cache = new WeakMap()) {
	if (typeof obj !== 'object') return obj // 普通类型，直接返回
	if (obj === null) return obj
	if (cache.get(obj)) return cache.get(obj) // 防止循环引用，程序进入死循环
	if (obj instanceof Date) return new Date(obj)
	if (obj instanceof RegExp) return new RegExp(obj)

	// 找到所属原型上的constructor，所属原型上的constructor指向当前对象的构造函数
	let cloneObj: any = new obj.constructor()
	cache.set(obj, cloneObj) // 缓存拷贝的对象，用于处理循环引用的情况
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			cloneObj[key] = deepClone(obj[key], cache) // 递归拷贝
		}
	}
	return cloneObj
}

// 时间总线, 观察订阅模式
class EventEmitter {
	cache: { [key: string]: any } = {}
	constructor() {
		this.cache = {}
	}

	on(name: any, fn: any): void {
		if (this.cache[name]) {
			this.cache[name].push(fn)
		} else {
			this.cache[name] = [fn]
		}
	}

	off(name: any, fn: any): void {
		const tasks = this.cache[name]
		if (tasks) {
			const index = tasks.findIndex((f) => f === fn || f.callback === fn)
			if (index >= 0) {
				tasks.splice(index, 1)
			}
		}
	}

	emit(name: any, once: boolean = false): void {
		if (this.cache && this.cache[name]) {
			// 创建副本，如果回调函数内继续注册相同事件，会造成死循环
			const tasks: any = this.cache[name].slice()
			for (let fn of tasks) {
				fn();
			}
			if (once) {
				delete this.cache[name]
			}
		}
	}
}

export const eventBus: EventEmitter = new EventEmitter()


