import { test, expect } from 'rh-test'
import * as _ from '../index'

const time = '2022/06/5 07:03:50'

test('toDate',
	expect(_.toDate(time).getTime()).tobe(new Date(time).getTime()),
	expect(_.toDate('2022-06-15 17:31:06').getTime()).tobe(new Date('2022-06-15 17:31:06').getTime()),
)


test('deadline',
	expect(_.deadline).setParams(new Date('2022/06/17 07:03:50')).tobe(2)
)

test('isSameDate',
	expect(_.isSameDate).setParams(new Date(), new Date()).tobe(true),
	expect(_.isSameDate).setParams(new Date().getTime(), new Date()).tobe(true),
	expect(_.isSameDate).setParams(new Date(), 123).tobe(false),
	expect(_.isSameDate).setParams(123, new Date()).tobe(false),
	expect(_.isSameDate).setParams(123, 123).tobe(false),
)

test('isDate',
	expect(_.isDate('123')).tobeFalse(),
	expect(_.isDate(new Date())).tobeTruthy(),
	expect(_.isDate(new Date().getTime())).tobeTruthy(),
)

test('format',

	expect(_.format(new Date(time))).tobe('2022-06-05'),
	expect(_.format(new Date(time), 'yy')).tobe('22'),
	expect(_.format(new Date(time), 'yyyy')).tobe('2022'),
	expect(_.format(new Date(time), 'yyyy-M')).tobe('2022-6'),
	expect(_.format(new Date(time), 'yyyy-MM')).tobe('2022-06'),
	expect(_.format(new Date(time), 'yyyy-MM-D')).tobe('2022-06-5'),
	expect(_.format(new Date(time), 'yyyy-MM-DD')).tobe('2022-06-05'),
	expect(_.format(new Date(time), 'yyyy-MM-DD H')).tobe('2022-06-05 7'),
	expect(_.format(new Date(time), 'yyyy-MM-DD HH')).tobe('2022-06-05 07'),
	expect(_.format(new Date(time), 'yyyy-MM-DD h')).tobe('2022-06-05 7'),
	expect(_.format(new Date(time), 'yyyy-MM-DD hh')).tobe('2022-06-05 07'),
	expect(_.format(new Date(time), 'yyyy-MM-DD hh:mm:ss')).tobe('2022-06-05 07:03:50'),
	expect(_.format(new Date(time), 'yyyy-MM-DD hh:m:s')).tobe('2022-06-05 07:3:50'),
)