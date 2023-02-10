import { toRGB, toRGBRecord } from '..'
import { UnitTest } from 'unit-testing-js'

UnitTest(toRGB)
	.addCases(
		{ param: '#123123', tobe: /rgb\(18,49,35\)/, type: 'RegExp' },
		{ param: '123123', tobe: /rgb\(18,49,35\)/, type: 'RegExp' },
		{ params: ['#123123', 0.1], tobe: /rgba\(18,49,35,0.1\)/, type: 'RegExp' },
	)
	.run();

UnitTest(toRGBRecord)
	.addCases(
		{
			param: '#123123',
			tobe: { red: 18, green: 49, blue: 35, opacity: 1 }
		},
		{
			param: '#123123',
			tobe: { red: 18, green: 49, blue: 35, opacity: 1 }
		},
		{ 
			params: ['#123123', 0.1], 
			tobe: { red: 18, green: 49, blue: 35, opacity: 0.1 }
		},
	)
	.run()