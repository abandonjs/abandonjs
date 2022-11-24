import { test } from 'rh-test'
import { logGroup, logAsync } from '..'

test('logGroup',
	(param: unknown[]) => !param.includes(false),
	{
		param: [
			logGroup('log-case-1', 1),
			logGroup('log-case-2', 1, 0, null, undefined, NaN),
		],
		tobe: true
	}
)


test<any, any>('logAsync', logAsync,
	{
		params: [
			new Promise(r => r(123)),
			new Promise(r => r(123)),
		],
		tobe: true
	}
)