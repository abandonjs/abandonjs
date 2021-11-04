import { stringToString } from '../type'
import Handler from './handler'
import Random from './random'
import Util from './util'
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
		Random,
		Util,
		// XHR,
		// RE,
		// toJSONSchema,
		// valid, //valid(template, data) 验证真实数据 是否与数据模板匹配
		// heredoc: Util.heredoc,
		// setup: function (settings) {
		// 	return XHR.setup(settings)
		// },
		_mocked: {}
	},
	{
		uuid,
	},
)

/*
		* _mock.mock( template )
		* _mock.mock( function() )
		* _mock.mock( rurl, template )
		* _mock.mock( rurl, function(options) )
		* _mock.mock( rurl, rtype, template )
		* _mock.mock( rurl, rtype, function(options) )
	 
		数据模板 => 模拟数据
*/


_mock.mock = function (rurl, rtype, template): any {

	// _mock.mock(template)
	if (arguments.length === 1) return Handler.gen(rurl);

	// _mock.mock(rurl, template)
	if (arguments.length === 2) {
		template = rtype;
		rtype = undefined;
	}

	// 拦截 XHR ( 后续再制作 )
	// if (XHR) window.XMLHttpRequest = XHR
	// _mock._mocked[rurl + (rtype || '')] = {
	// 	rurl: rurl,
	// 	rtype: rtype,
	// 	template: template
	// }

	return _mock;
}

export default _mock;