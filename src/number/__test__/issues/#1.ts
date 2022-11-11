import * as _ from '../../index'
import { test } from 'rh-test'

// const len = 10000000
const len = 999

const array = new Array(len)
	.fill(undefined).map(() => String(_.random(90000, 99999)))
	.filter(i => i.length !== 5)


test('issues:#1', () => array.length,
	{ tobe: 0 }
)