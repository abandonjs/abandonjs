const Util = {};

Util.isArray = (value: any): boolean => Array.isArray(value)
Util.isObject = (value: any): boolean => value.contructor === Object;

Util.extend = function () {
	let target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		options, name, src, copy, clone

	if (length === 1) {
		target = this
		i = 0
	}

	for (; i < length; i++) {
		options = arguments[i]
		if (!options) continue

		for (name in options) {
			src = target[name]
			copy = options[name]

			if (target === copy) continue
			if (copy === undefined) continue

			if (Util.isArray(copy) || Util.isObject(copy)) {
				if (Util.isArray(copy)) clone = src && Util.isArray(src) ? src : []
				if (Util.isObject(copy)) clone = src && Util.isObject(src) ? src : {}

				target[name] = Util.extend(clone, copy)
			} else {
				target[name] = copy
			}
		}
	}

	return target
}

Util.type = function type(obj) {
	// console.log('obj', obj)
	return (obj === null || obj === undefined)
		? String(obj)
		: Object.prototype.toString.call(obj).match(/\[object (\w+)\]/)[1].toLowerCase()
}

export default Util;