import { test } from 'unit-testing-js'
import * as _ from '../index'

const time = '2022/06/5 07:03:50'

test('toDate', _.toDate,
	{ param: new Date(time).getTime(), tobe: new Date(time) },
	{ param: new Date('2022-06-15 17:31:06').getTime(), tobe: new Date('2022-06-15 17:31:06') },
)


test('deadline', _.deadline,
	{ params: [new Date('2022/06/17 07:03:50'), 'day', new Date('2022/06/15 07:03:50')], tobe: 2 },
)

test('isDate', _.isDate,
	{ params: ['123'], tobe: false },
	{ params: [new Date()], tobe: true },
	{ params: [new Date().getTime()], tobe: true },
)

test('isSameDate', _.isSameDate,
	{ params: [new Date(), new Date()], tobe: true },
	{ params: [new Date().getTime(), new Date()], tobe: true },
	{ params: [new Date(), 123], tobe: false },
	{ params: [123, new Date()], tobe: false },
	{ params: [123, 123], tobe: false },
)



test('format', _.format,
	{ params: [new Date(time)], tobe: '2022-06-05' },
	{ params: [new Date(time), 'yy'], tobe: '22' },
	{ params: [new Date(time), 'yyyy'], tobe: '2022' },
	{ params: [new Date(time), 'yyyy-M'], tobe: '2022-6' },
	{ params: [new Date(time), 'yyyy-MM'], tobe: '2022-06' },
	{ params: [new Date(time), 'yyyy-MM-D'], tobe: '2022-06-5' },
	{ params: [new Date(time), 'yyyy-MM-DD'], tobe: '2022-06-05' },
	{ params: [new Date(time), 'yyyy-MM-DD H'], tobe: '2022-06-05 7' },
	{ params: [new Date(time), 'yyyy-MM-DD HH'], tobe: '2022-06-05 07' },
	{ params: [new Date(time), 'yyyy-MM-DD h'], tobe: '2022-06-05 7' },
	{ params: [new Date(time), 'yyyy-MM-DD hh'], tobe: '2022-06-05 07' },
	{ params: [new Date(time), 'yyyy-MM-DD hh:mm:ss'], tobe: '2022-06-05 07:03:50' },
	{ params: [new Date(time), 'yyyy-MM-DD hh:m:s'], tobe: '2022-06-05 07:3:50' },
)