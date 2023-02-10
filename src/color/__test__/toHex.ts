import { rgbToHex } from '..'
import { UnitTest } from 'unit-testing-js'

UnitTest(rgbToHex)
	.addCases(
		{ params: [255, 255, 255], tobe: '#ffffff' },
		{ params: [0, 0, 0], tobe: '#000000' },
	)
	.run()