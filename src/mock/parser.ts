/*
	## Parser

	解析数据模板（属性名部分）。

	* Parser.parse( name )
		
		```json
		{
			parameters: [ name, inc, range, decimal ],
			rnage: [ min , max ],

			min: min,
			max: max,
			count : count,

			decimal: decimal,
			dmin: dmin,
			dmax: dmax,
			dcount: dcount
		}
		```
 */

import Constant from './constant'
import Random from './random'

/* jshint -W041 */
module.exports = {
	parse: function (name) {
		name = name == undefined ? '' : (name + '')

		let parameters = (name || '').match(Constant.RE_KEY)

		let range = parameters && parameters[3] && parameters[3].match(Constant.RE_RANGE)
		let min = range && range[1] && parseInt(range[1], 10) // || 1
		let max = range && range[2] && parseInt(range[2], 10) // || 1
		let count = range ? !range[2] ? parseInt(range[1], 10) : Random.integer(min, max) : undefined

		let decimal = parameters && parameters[4] && parameters[4].match(Constant.RE_RANGE)
		let dmin = decimal && decimal[1] && parseInt(decimal[1], 10) // || 0,
		let dmax = decimal && decimal[2] && parseInt(decimal[2], 10) // || 0,
		// int || dmin-dmax || 0
		let dcount = decimal ? !decimal[2] && parseInt(decimal[1], 10) || Random.integer(dmin, dmax) : undefined

		let result = {
			// 1 name, 2 inc, 3 range, 4 decimal
			parameters: parameters,
			// 1 min, 2 max
			range: range,
			min: min,
			max: max,
			// min-max
			count: count,
			// 是否有 decimal
			decimal: decimal,
			dmin: dmin,
			dmax: dmax,
			// dmin-dimax
			dcount: dcount
		}

		for (let r in result) {
			if (result[r] != undefined) return result
		}

		return {}
	}
}