import * as _ from '..'
import { test } from 'unit-testing-js'

test('toRGB', _.toRGB,
	{ param: '#123123', tobe: /rgb\(18,49,35\)/, type:'RegExp' },
	{ param: '123123', tobe: /rgb\(18,49,35\)/, type:'RegExp' },
	{ params: ['#123123', 0.1], tobe: /rgba\(18,49,35,0.1\)/, type: 'RegExp' },
)