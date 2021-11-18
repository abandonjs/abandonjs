
//深拷贝 (待实现)
// 圣杯模式的继承
// function inherit(Target, Origin) {
// 	function F() { };
// 	F.prototype = Origin.prototype;
// 	Target.prototype = new F();
// 	Target.prototype.constructor = Target;
// 	// 最终的原型指向
// 	Target.prop.uber = Origin.prototype;
// }

// 获取url的参数
export function getWindonHref() {
	let sHref = window.location.href;
	let args = sHref.split('?');
	if (args[0] === sHref) {
		return '';
	}
	let hrefarr = args[1].split('#')[0].split('&');
	let obj = {};
	for (let i = 0; i < hrefarr.length; i++) {
		hrefarr[i] = hrefarr[i].split('=');
		obj[hrefarr[i][0]] = hrefarr[i][1];
	}
	return obj;
}

export function pick(list: any[]): string {
	return list[Math.floor(Math.random() * list.length)];
}

// 返回数据类型
export function type(param) {
	return Object.prototype.toString.call(param).match(/\[object (\w+)\]/)[1];
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


