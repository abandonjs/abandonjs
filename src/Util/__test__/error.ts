import * as _ from '../index'
import { test, add } from 'rh-test'

test<any, number>('throwError', _.throwError,
	{ params: [add, 0, 1, 2, 3], tobe: 6 },
	{ params: [JSON.parse, 123, '{123}'], tobe: 123 }
)


