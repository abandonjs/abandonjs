import Constant from "./constant"
import { isEmptyToEmptyString } from '../string'
import Parser from './parser'
import Util from "./util"
import Random from "./random"
import { tTemplate, iHandler2, tContext } from './type'
const { GUID, RE_KEY, RE_PLACEHOLDER, RE_RANGE } = Constant

const Handler: iHandler = {
	// mock 入口, 主要负责
	generate: function (template: tTemplate, context?: iContext): tTemplate {

		// context = context || {
		// 	type: 'string',
		// 	template,
		// 	name: '',
		// 	rule: {},
		// 	context: undefined,
		// }
		const type: string = Util.type(template);

		switch (type) {
			case 'string': return this.generateString(template);
			case 'object': return this.generateObject(template);
			default: return template;
		}
	},
	analysisKey: function (key: string, value: any): any {
		if (RE_KEY.test(key)) {
			const [_key, params]: [string, string] = key.split('|')
			const [min, max]: [number, number] = params.split('-').map((num: string): number => Number(num))
			const count: number = max ? max : min;
			// 待处理 数量的问题

			console.log('------------')
			console.log('------------')
			console.log('------------')
			console.log('------------')
			console.log('------------')
			console.log('------------')
			console.log('------------')
			console.log('------------')
			console.log('------------')
			console.log('------------')
			console.log('------------')


			return { [_key]: value };
		}
		return { [key]: value };
	},

	// generateChooseOne: function (template: string): tTemplate {

	// },

	generateString: function (template: string): tTemplate {
		if (RE_PLACEHOLDER.test(template)) {
			return Random[template.replace('@', '')]();
		}
		return template;
	},

	generateObject: function (template: { [key: string]: any }): tTemplate {
		const result: tTemplate = {}
		for (let key in template) {
			// 'type | [数字]' 特殊处理
			if (RE_KEY.test(key)) {
				// console.log(key)
				Object.assign(
					result,
					this.analysisKey(
						key,
						this.generate(template[key])
					))
				continue;
			}
			result[key] = this.generate(template[key]);

		}
		return result;
	}

}

export default Handler