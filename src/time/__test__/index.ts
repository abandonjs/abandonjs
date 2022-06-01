import * as _ from '../index'
import { logGroup } from '../../util'


logGroup('deadline',
	_.deadline(new Date('2023/7/14'), 'year', new Date()),
	24*60*60
)

logGroup('isDate',
	_.isDate('123'),
	_.isDate(new Date()),
	_.isDate(new Date().getTime()),
)

logGroup('format',
	_.format(new Date()),
	_.format(new Date(), 'yy'),
	_.format(new Date(), 'yyyy'),
	_.format(new Date(), 'yyyy-M'),
	_.format(new Date(), 'yyyy-MM'),
	_.format(new Date(), 'yyyy-MM-D'),
	_.format(new Date(), 'yyyy-MM-DD'),
	_.format(new Date(), 'yyyy-MM-DD H'),
	_.format(new Date(), 'yyyy-MM-DD HH'),
	_.format(new Date(), 'yyyy-MM-DD h'),
	_.format(new Date(), 'yyyy-MM-DD hh'),
	_.format(new Date(), 'yyyy-MM-DD hh:mm:ss'),
	_.format(new Date(), 'yyyy-MM-DD hh:m:s'),
	_.format('fjsdkfj')
)


0 && logGroup('clamp',
	// _.calendar,
	// _.calendar.isLeapYear(),

)

// const a:any = { c: 123 }
const a: any = { c: 123 }
Object.defineProperties(a, {
	format: {
		writable: true,
		enumerable: false,
		configurable: true,
		value: function () {
			console.log(123456)
			return 456
		}
	}
})

console.log(a)
console.log(a.format())