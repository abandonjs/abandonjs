import { test } from 'unit-testing-js'
import { MAX_VALUES_NUMBER } from '../../constants'
import { likeNumber, isFloat, isEffectNumber } from '..'

test('isEffectNumber', isEffectNumber,
	{ param: 1, tobe: true },
	{ param: '1', tobe: false },
	{ param: null, tobe: false },
	{ param: NaN, tobe: false },
	{ param: undefined, tobe: false },
	{ param: -1, tobe: true },
	{ param: 10000, tobe: true },
	{ param: MAX_VALUES_NUMBER * 9999, tobe: false },
	{ param: Infinity, tobe: false },
	{ param: MAX_VALUES_NUMBER, tobe: true },
	{ param: -MAX_VALUES_NUMBER * 9999, tobe: false },
	{ param: -Infinity, tobe: false },
)

test('isFloat', isFloat,
	{ param: 1, tobe: false },
	{ param: 1.1, tobe: true },
	{ param: 1.0, tobe: false },
	{ param: 0.0, tobe: false },
)

test('likeNumber', likeNumber,
	{ name: 'likeNumber 1', param: MAX_VALUES_NUMBER, tobe: true },
	{ name: 'likeNumber 2', param: '1', tobe: true },
	{ name: 'likeNumber 3', param: null, tobe: false },
	{ name: 'likeNumber 4', param: NaN, tobe: false },
	{ name: 'likeNumber 5', param: undefined, tobe: false },
	{ name: 'likeNumber 5-1', param: Infinity, tobe: false },
	{ name: 'likeNumber 6', param: -1, tobe: true },
	{ name: 'likeNumber 7', param: 10000, tobe: true },
	{ name: 'likeNumber 8', param: (5e3), tobe: true },
	{ name: 'likeNumber 9', param: (0xff), tobe: true },
	{ name: 'likeNumber 10', param: (-1.1), tobe: true },
	{ name: 'likeNumber 11', param: (0), tobe: true },
	{ name: 'likeNumber 12', param: (1), tobe: true },
	{ name: 'likeNumber 13', param: (1.1), tobe: true },
	{ name: 'likeNumber 14', param: (10), tobe: true },
	{ name: 'likeNumber 15', param: (10.10), tobe: true },
	{ name: 'likeNumber 16', param: (100), tobe: true },

	{ name: 'likeNumber 17', param: ('-1.1'), tobe: true },
	{ name: 'likeNumber 18', param: ('0'), tobe: true },
	{ name: 'likeNumber 19', param: ('012'), tobe: true },
	{ name: 'likeNumber 20', param: ('0xff'), tobe: true },
	{ name: 'likeNumber 21', param: ('1'), tobe: true },
	{ name: 'likeNumber 22', param: ('1.1'), tobe: true },
	{ name: 'likeNumber 23', param: ('10'), tobe: true },
	{ name: 'likeNumber 24', param: ('10.10'), tobe: true },
	{ name: 'likeNumber 25', param: ('100'), tobe: true },
	{ name: 'likeNumber 26', param: ('5e3'), tobe: true },

	{ name: 'likeNumber 27', param: (parseInt('012')), tobe: true },
	{ name: 'likeNumber 28', param: (parseFloat('01')), tobe: true },
	{ name: 'likeNumber 29', param: (Infinity), tobe: false },

	{ name: 'likeNumber 30', param: (NaN), tobe: false },
	{ name: 'likeNumber 31', param: (null), tobe: false },
	{ name: 'likeNumber 32', param: (undefined), tobe: false },
	{ name: 'likeNumber 33', param: (''), tobe: false },

	{ name: 'likeNumber 34', param: ('   '), tobe: false },

	{ name: 'likeNumber 35', param: ('foo'), tobe: false },

	{ name: 'likeNumber 36', param: ([1]), tobe: false },
	{ name: 'likeNumber 37', param: ([]), tobe: false },

	{ name: 'likeNumber 38', param: (function () { }), tobe: false },
	{ name: 'likeNumber 39', param: ({}), tobe: false },
)