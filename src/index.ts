import * as _methods from './methods'
import * as _number from './number'
import * as _string from './string'
import * as _date from './date'
import * as _util from './Util'
import * as _array from './array'

const RH: any = Object.assign(
	_methods,
	_number,
	_string,
	_date,
	_util,
	_array
);

export {
	_methods,
	_number,
	_string,
	_date,
	_array,
	_util,
	RH,
}
