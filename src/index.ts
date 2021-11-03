import * as _methods from './methods'
import * as _number from './number'
import * as _mock from './mock'
import * as _string from './string'
import * as _date from './date'

const RH: any = Object.assign(
	_methods,
	_number,
	_mock,
	_string,
	_date,
);

export {
	_methods,
	_number,
	_mock,
	_string,
	_date,
	RH,
}
