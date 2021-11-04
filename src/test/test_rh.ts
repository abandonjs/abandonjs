// import * as  RH2 from '../index'
// import RH3 from '../utils/Methods'
import { RH, _methods, _number, _mock } from '../index'

const { log } = RH;

// log(new RH.BaseToDateString('yyyy-mm-dd').format('123'))
// log('--六一--', new RH.BaseToDateString('2021/06/01').FormTz(9).toTz(9).format('yyyy-mm-dd'))
// log('--今天--', new RH.BaseToDateString('').FormTz(9).toTz(9).format('yyyy-mm-dd hh:mm:ss'))
log(
	// _mock.mock({ 'name': '@name' })
	// _mock.Random.name()
	// _mock.Random.name(),
	_mock.mock('@name'),
	_mock.mock({ 'name': '@name' }),
	_mock.mock({ 'name|2': '@name' }),
	_mock.mock({
		'name|2': {
			'cn': '@name',
		}
	}),
	// RH.uuid(),
	// RH.name(),
	// RH.name.name(),
)
// RH.log(RH.BaseToString([1, 4, 5]))
// RH.log(RH.BaseToString(`1, 4, 5`))
// RH.log(RH.BaseToNumber('1111fhjsdhf'))
// RH.log(RH.BaseToString('1'))
// function getLocalTime(ns) {
	// return new Date().toUTCString()
	// return new Date(parseInt(ns)).toUTCString().replace(/:\d{1,2}$/, ' ')
	// return new Date(parseInt(ns)).toLocaleDateString().replace(/:\d{1,2}$/, ' ')
// }
// let time = new Date().getTime();
// log(time)
// log(getLocalTime(time))

// RH.log('Methods', Methods.log);
// RH.log(RH.uuid('xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxx'));
// RH.log(RH.uuid('xxxxxxxxxxxxx123123x'));
// RH.log(RH.uuid());

// RH.log('Methods', 'Methods.log', RH.BaseToNumber(123));
// RH.log('Methods', 'Methods.log', _number.BaseToNumber(123));

// console.log(11234);
// console.log( 'rh', RH2)
// console.log( 'rh3', RH3)
// import { log } , * as RH  from '../utils/Methods/log'
// import * as RH  from '../utils/Methods/log'
// console.log( RH)
// log(123)fasdfa

