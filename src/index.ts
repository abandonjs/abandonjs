import * as _methods from './methods'
import * as _number from './number'
import * as _string from './string'
import * as _date from './date'
import * as _util from './Util'

const RH: any = Object.assign(
	_methods,
	_number,
	_string,
	_date,
	_util,
);

export {
	_methods,
	_number,
	_string,
	_date,
	_util,
	RH,
}
