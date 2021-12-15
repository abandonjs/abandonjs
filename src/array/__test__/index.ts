import { initMultArray, arrayUniqueItem } from '../index'
import * as _Array from '../index'
import { logGroup } from '../../Util'

logGroup('arraySelectOne',
	_Array.arraySelectOne([1, 4, 5]),
	_Array.arraySelectOne([1, 4, 5], 0),
	_Array.arraySelectOne([1, 4, 5], -1),
)


logGroup('arrayUniqueItem',
	arrayUniqueItem([1, 3, 4, 5, 1, 3, 2, 1, 1]),
)

console.groupCollapsed('--- arrayUniqueItem ---')
console.log(arrayUniqueItem([1, 3, 4, 5, 1, 3, 2, 1, 1]));
console.groupEnd()

console.groupCollapsed('--- initMultArray ---')
console.log(initMultArray('unit'))
console.log(initMultArray('unit', '10'))
console.log(initMultArray('unit', '10&1'))
console.log(initMultArray('unit', '2&2'))
console.log(initMultArray('unit', '2&2'))
console.groupEnd()



logGroup('arrayFilterByObject',
	_Array.arrayFilterByObject([
		{ a: 123, b: '00' },
		{ a: 123, b: '00' },
		123, 'fjdsjf'], { a: 1 }),
	_Array.arrayFilterByObject([
		{ a: 123, b: '00' },
		{ a: 23, b: '00' },
		123, 'fjdsjf'], { a: 1, b: '0' }, true)
)

logGroup('arraySelectItems',
	_Array.arraySelectItems([1, 4, 5, 6, 223, 23, 32, 42134, 234, 123, 123], 3, 5),
	_Array.arraySelectItems([1, 4, 5, 6, 99, 223, 23, 32, 42134, 234, 12, 123, 123], 3, 10),
	_Array.arraySelectItems([1, 4, 5, 6, 99, 223, 23, 32, 42134, 234, 12, 123, 123], 3, 3),
)

logGroup('chunk',
	_Array.chunk([1, 3, 4, 5, 3, 2, 3, 12], 3)
)
logGroup('compact',
	_Array.compact([1, 3, 4, false, 0, 5, '', 3, 2, , 3, 12, null, undefined])
)

logGroup('concat',
	_Array.concat([1, 4, 6, 7], [33], [444], 3, 1, 2),
	_Array.concat(3, 1, 2),
	_Array.concat([3, 1, 2]),
)

logGroup('difference',
	_Array.difference(),
	_Array.difference([1, 34, 4]),
	_Array.difference([1, 34, 4], [4]),
	_Array.difference([1, 34, 4], [4], 34),
)

logGroup('drop',
	_Array.drop(),
	_Array.drop([1, 34, 4]),
	_Array.drop([1, 34, 4], 1),
	_Array.drop([1, 34, 4], 2),
	_Array.drop([1, 34, 4], 20),
)