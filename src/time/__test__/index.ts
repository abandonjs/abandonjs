import { test } from 'unit-testing-js'
import './timezone'
import './intervalDate'
import './dayOfYear'
import * as _ from '..'

const time = '2022/06/5 07:03:50'

test('toDate', _.toDate,
	{ param: new Date(time).getTime(), tobe: new Date(time) },
	{ param: new Date('2022-06-15 17:31:06').getTime(), tobe: new Date('2022-06-15 17:31:06') },
)


test('deadline', _.deadline,
	{ params: [new Date('2022/06/17 07:03:50'), 'day', new Date('2022/06/15 07:03:50')], tobe: 2 },
)

test('isSameDate', _.isSameDate,
	{ params: [new Date('2022/06/17 07:03:50'), new Date('2022/06/15 07:03:50')], tobe: false },
	{ params: [new Date('2022/06/17 07:03:50'), new Date('2022/06/17 07:03:50')], tobe: true },
)
test('format', _.format,
	{ params: [new Date(time)], tobe: '2022-06-05' },
	{ params: [new Date(time), 'YY'], tobe: '22' },
	{ params: [new Date(time), 'YY:A'], tobe: '22:AM' },
	{ params: [new Date(time), 'YY:a'], tobe: '22:am' },
	{ params: [new Date(time), 'YYYY'], tobe: '2022' },
	{ params: [new Date(time), 'YYYY-M'], tobe: '2022-6' },
	{ params: [new Date(time), 'YYYY-MM'], tobe: '2022-06' },
	{ params: [new Date(time), 'YYYY-MM-D'], tobe: '2022-06-5' },
	{ params: [new Date(time), 'YYYY-MM-DD'], tobe: '2022-06-05' },
	{ params: [new Date(time), 'YYYY-MM-DD H'], tobe: '2022-06-05 7' },
	{ params: [new Date(time), 'YYYY-MM-DD HH'], tobe: '2022-06-05 07' },
	{ params: [new Date(time), 'YYYY-MM-DD h'], tobe: '2022-06-05 7' },
	{ params: [new Date(time), 'YYYY-MM-DD hh'], tobe: '2022-06-05 07' },
	{ params: [new Date(time), 'YYYY-MM-DD hh:mm:ss'], tobe: '2022-06-05 07:03:50' },
	{ params: [new Date(time), 'YYYY-MM-DD hh:m:s'], tobe: '2022-06-05 07:3:50' },
	{ params: [new Date(time), 'YYYY-MM-DD hh:mm:sseeee'], tobe: '2022-06-05 07:03:50eeee' },
	{ params: [new Date(time), 'YYYY123-MM-DD中文 hh:mm:sseeee'], tobe: '2022123-06-05中文 07:03:50eeee' },
)