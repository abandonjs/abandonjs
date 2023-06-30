import { RGB2HEX, HEX2RGB } from '..'
import { UnitTest } from 'unit-testing-js'

UnitTest(RGB2HEX)
	.addCases(
		{ param: { red: 255, green: 255, blue: 255 }, tobe: '#ffffff' },
		{ param: { red: 0, green: 0, blue: 0 }, tobe: '#000000' },
	)
	.run()

UnitTest(HEX2RGB)
	.addCases(
		{
			param: '#ffffff',
			tobe: [
				'rgb(255,255,255)',
				{ red: 255, green: 255, blue: 255 }
			]
		},
		{
			param: '#000000',
			tobe: [
				'rgb(0,0,0)',
				{ red: 0, green: 0, blue: 0 }
			]
		},
	)
	.run()