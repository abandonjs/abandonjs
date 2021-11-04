import { isNumber } from '../../number'

module.exports = {
	// 返回一个随机布尔值
	boolean: function (min: any, max: any, cur: any): any {
		if (cur) {
			min = isNumber(min) ? parseInt(min, 10) : 1;
			max = isNumber(max) ? parseInt(max, 10) : 1;
			return Math.random() > 1.0 / (min + max) * min ? !cur : cur;
		}
		return Math.random() >= 0.5;
	},
	// 
}