import * as _ from '..'
import { test } from 'unit-testing-js'

test('toHex', _.rgbToHex,
	{ params: [255,255,255], tobe: '#ffffff' },
)