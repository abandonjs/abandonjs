import { stringToString } from '../type'
import Handler from './handler'
import Random from './random'

/**
 * @param {string} value uuid 的格式 default:'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx' 
 * @returns {string} uuid
 * @description 生成随机uid
 */

const uuid: stringToString = (value: string): string => {
	let val: string = value || 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx';
	let d: number = new Date().getTime();   // 随机种子
	return val.replace(/[xy]/g, function (c: string): string {
		let r: number = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
	});
}

const _mock = Object.assign(
	{
		Handler,
	},
	{
		uuid,
		Random,
	},
)

_mock.mock = function (rurl, rtype, template): any {
	// _mock.mock(template)
	if (arguments.length === 1) return Handler.gen(rurl);
	_mock.mock(rurl, template)
	// 拦截 XHR ( 后续再制作 )
	return _mock;
}

export default _mock;