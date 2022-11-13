import { test } from 'rh-test'
import { logGroup } from '..'

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