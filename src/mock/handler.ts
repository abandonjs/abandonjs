import Constant from "./constant"
import Parser from './parser'
import Util from "./util"
import Random from "./random"

const Handler = {
	_all: function () {
		let re = {};
		for (let key in Random) re[key.toLowerCase()] = key
		return re
	},
	gen: (template, name, context) => {
		// console.log('template', template)
		name = name == undefined ? '' : (name + '')

		context = context || {}
		context = {
			// 当前访问路径，只有属性名，不包括生成规则
			path: context.path || [Constant.GUID],
			templatePath: context.templatePath || [Constant.GUID++],
			// 最终属性值的上下文
			currentContext: context.currentContext,
			// 属性值模板的上下文
			templateCurrentContext: context.templateCurrentContext || template,
			// 最终值的根
			root: context.root || context.currentContext,
			// 模板的根
			templateRoot: context.templateRoot || context.templateCurrentContext || template
		}
		// console.log('path:', context.path.join('.'), template)

		let rule = Parser.parse(name)
		let type = Util.type(template)
		let data

		// console.log('ha', Handler[type]);
		// console.log('ha', type);
		// console.log('ha', Handler);
		// console.log('ha', context);

		if (Handler[type]) {
			data = Handler[type]({
				// 属性值类型
				type: type,
				// 属性值模板
				template: template,
				// 属性名 + 生成规则
				name: name,
				// 属性名
				parsedName: name ? name.replace(Constant.RE_KEY, '$1') : name,

				// 解析后的生成规则
				rule: rule,
				// 相关上下文
				context: context
			})

			if (!context.root) context.root = data
			return data
		}

		return template
	},
	string: (options) => {
		let result = '',
			i, placeholders, ph, phed;
		if (options.template.length) {
			if (options.rule.count == undefined) result += options.template
			for (i = 0; i < options.rule.count; i++) result += options.template

			placeholders = result.match(Constant.RE_PLACEHOLDER) || [] // A-Z_0-9 > \w_
			for (i = 0; i < placeholders.length; i++) {
				ph = placeholders[i]
				// 遇到转义斜杠，不需要解析占位符
				if (/^\\/.test(ph)) {
					placeholders.splice(i--, 1)
					continue
				}

				phed = Handler.placeholder(ph, options.context.currentContext, options.context.templateCurrentContext, options)

				// 只有一个占位符，并且没有其他字符
				if (placeholders.length === 1 && ph === result && typeof phed !== typeof result) { // 
					result = phed
					break

					if (Util.isNumeric(phed)) {
						result = parseFloat(phed, 10)
						break
					}
					if (/^(true|false)$/.test(phed)) {
						result = phed === 'true' ? true :
							phed === 'false' ? false :
								phed // 已经是布尔值
						break
					}
				}
				result = result.replace(ph, phed)
			}

		} else {
			// 'ASCII|1-10': '',
			// 'ASCII': '',
			result = options.rule.range ? Random.string(options.rule.count) : options.template
		}
		return result
	},
	object: (options) => {
		let result = {},
			keys, fnKeys, key, parsedKey, inc, i;

		// 'obj|min-max': {}
		/* jshint -W041 */
		if (options.rule.min != undefined) {
			keys = Util.keys(options.template)
			keys = Random.shuffle(keys)
			keys = keys.slice(0, options.rule.count)
			for (i = 0; i < keys.length; i++) {
				key = keys[i]
				parsedKey = key.replace(Constant.RE_KEY, '$1')
				options.context.path.push(parsedKey)
				options.context.templatePath.push(key)
				result[parsedKey] = Handler.gen(options.template[key], key, {
					path: options.context.path,
					templatePath: options.context.templatePath,
					currentContext: result,
					templateCurrentContext: options.template,
					root: options.context.root || result,
					templateRoot: options.context.templateRoot || options.template
				})
				options.context.path.pop()
				options.context.templatePath.pop()
			}

		} else {
			keys = []
			fnKeys = [] // #25 改变了非函数属性的顺序，查找起来不方便
			for (key in options.template) {
				(typeof options.template[key] === 'function' ? fnKeys : keys).push(key)
			}
			keys = keys.concat(fnKeys)

			for (i = 0; i < keys.length; i++) {
				key = keys[i]
				parsedKey = key.replace(Constant.RE_KEY, '$1')
				options.context.path.push(parsedKey)
				options.context.templatePath.push(key)
				result[parsedKey] = Handler.gen(options.template[key], key, {
					path: options.context.path,
					templatePath: options.context.templatePath,
					currentContext: result,
					templateCurrentContext: options.template,
					root: options.context.root || result,
					templateRoot: options.context.templateRoot || options.template
				})
				options.context.path.pop()
				options.context.templatePath.pop()
				// 'id|+1': 1
				inc = key.match(Constant.RE_KEY)
				if (inc && inc[2] && Util.type(options.template[key]) === 'number') {
					options.template[key] += parseInt(inc[2], 10)
				}
			}
		}
		return result
	},
	letthToArray: function (path) {
		let parts = path.split(/\/+/);
		if (!parts[parts.length - 1]) parts = parts.slice(0, -1)
		if (!parts[0]) parts = parts.slice(1)
		return parts;
	},
	placeholder: function (placeholder, obj, templateContext, options) {
		// console.log(options.context.path)
		// 1 key, 2 params
		Constant.RE_PLACEHOLDER.exec('')
		let parts = Constant.RE_PLACEHOLDER.exec(placeholder),
			key = parts && parts[1],
			lkey = key && key.toLowerCase(),
			okey = this._all()[lkey],
			params = parts && parts[2] || ''
		let pathParts = this.letthToArray(key)

		// 解析占位符的参数
		try {
			// 1. 尝试保持参数的类型
			/* jshint -W061 */
			params = eval('(function(){ return [].splice.call(arguments, 0 ) })(' + params + ')')
		} catch (error) {
			// 2. 如果失败，只能解析为字符串
			params = parts[2].split(/,\s*/)
		}

		// 占位符优先引用数据模板中的属性
		if (obj && (key in obj)) return obj[key]

		// 绝对路径 or 相对路径
		if (
			key.charAt(0) === '/' ||
			pathParts.length > 1
		) return this.getValueByKeyPath(key, options)

		// 递归引用数据模板中的属性
		if (templateContext &&
			(typeof templateContext === 'object') &&
			(key in templateContext) &&
			(placeholder !== templateContext[key]) // fix #15 避免自己依赖自己
		) {
			// 先计算被引用的属性值
			templateContext[key] = Handler.gen(templateContext[key], key, {
				currentContext: obj,
				templateCurrentContext: templateContext
			})
			return templateContext[key]
		}

		// 如果未找到，则原样返回
		if (!(key in Random) && !(lkey in Random) && !(okey in Random)) return placeholder

		// 递归解析参数中的占位符
		for (let i = 0; i < params.length; i++) {
			Constant.RE_PLACEHOLDER.exec('')
			if (Constant.RE_PLACEHOLDER.test(params[i])) {
				params[i] = Handler.placeholder(params[i], obj, templateContext, options)
			}
		}

		let handle = Random[key] || Random[lkey] || Random[okey]
		switch (Util.type(handle)) {
			case 'array':
				// 自动从数组中取一个，例如 @areas
				return Random.pick(handle)
			case 'function':
				// 执行占位符方法（大多数情况）
				handle.options = options
				let re = handle.apply(Random, params)
				if (re === undefined) re = '' // 因为是在字符串中，所以默认为空字符串。
				delete handle.options
				return re
		}
	},
}

export default Handler