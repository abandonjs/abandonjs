import * as _methods from './methods'
import * as _number from './number'
import * as _string from './string'
import * as _time from './time'
import * as _util from './Util'
import * as _array from './array'
import * as _object from './Object'
import * as _function from './Function'

const RH: any = Object.assign(
	_methods,
	_number,
	_string,
	_time,
	_util,
	_array,
	_object,
	_function
);

export {
	_function,
	_object,
	_methods,
	_number,
	_string,
	_time,
	_array,
	_util,
	RH,
}
