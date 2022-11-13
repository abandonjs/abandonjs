import { test } from 'rh-test'
import { flat } from '..'

test<any, any>('flat-case-1', flat,
	{ name: '002', param: [1, [2, [3, 4, 5]]], tobe: [1, 2, 3, 4, 5] },
	{ tobe: [] },
	{ param: undefined, tobe: [] },
	{ param: null, tobe: [] },
	{ param: false, tobe: [] },
	{ param: '', tobe: [] },
	{ param: {}, tobe: [] },
)