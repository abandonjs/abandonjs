// import * as  RH2 from '../index'
// import RH3 from '../utils/Methods'
import { RH, _methods, _number } from '../index'

const { log } = RH;

log(new RH.BaseToDateString('yyyy-mm-dd').format('123'))
log(new RH.BaseToDateString().tz(9).format('yyyy-mm-dd'))

// RH.log(RH.BaseToString([1, 4, 5]))
// RH.log(RH.BaseToString(`1, 4, 5`))
// RH.log(RH.BaseToNumber('1111fhjsdhf'))
// RH.log(RH.BaseToString('1'))


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

