
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

export function pick(list: any[]): string {
	return list[Math.floor(Math.random() * list.length)];
}

// 返回数据类型
export function type(param: any): string | any {
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


