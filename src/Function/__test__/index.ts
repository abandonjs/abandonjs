import * as _ from '../index'
import { logGroup } from '../../Util'

function test(): any {
	return `func result`
}
function testArg(a: any = '', b: any = '', c: any = '', d: any = ''): any {
	return `func result ${a}${b}${c}${d}`
}

function testThis(a: any = '', b: any = ''): string {
	return `func result ${this.name} ${a} ${b}`
}

// console.log('function')

const done: any = _.after(3, test)

logGroup('after',
	done(),
	done(),
	done(),
	done(),
	done(),
)


const doneAry1 = _.ary(testArg, 1)
const doneAry2 = _.ary(testArg, 2)
const doneAry3 = _.ary(testArg, 3)
logGroup('ary',
	doneAry1('a', 'b', 'c'),
	doneAry2('a', 'b', 'c'),
	doneAry3('a', 'b', 'c'),
)


let beforeI: number = 9;
const beforeFn = _.before(3, testArg)
logGroup('before',
	beforeFn(--beforeI),
	beforeFn(--beforeI),
	beforeFn(--beforeI),
	beforeFn(--beforeI),
	beforeFn(--beforeI),
	beforeFn(--beforeI),
)


const bindFn = _.bind(testThis, { name: 'ruihuag' }, 'aaa')
const bindFn2 = _.bind(testThis, { name: 'ruihuag' },)
logGroup('bind',
	bindFn('bbb'),
	bindFn2('aa', 'bbb'),
)


const bindkeyObj = {
	a: 'aaaaaaaa',
	say: function (name: string): string {
		return `name: ${name}`
	},
	say2: function (name: string, age: number): string {
		return `name: ${name} ${age}`
	},
}

logGroup('bindkey',
	_.bindkey(bindkeyObj, 'a'),
	_.bindkey(bindkeyObj, 'say')('ruihuag'),
	_.bindkey(bindkeyObj, 'say2', 'ruihuag')(123),
)



function curryTestFn(a: any, b: any, c: any): string {
	return "fn:" + JSON.stringify([a, b, c]);
};

logGroup('curry',
	_.curry(curryTestFn, 3)(1)(2)(3),
	_.curry(curryTestFn, 3)(1, 2)(3),
	_.curry(curryTestFn, 3)(1, 2, 3),
	_.curry(curryTestFn, 3)(1)(3)(2),
	_.curry(curryTestFn, 3)(100)(3)(2),
)

// logGroup('delay',
// 	_.delay(curryTestFn, 2000, 'a', 'b', 'c').then(res => console.log('res', res))
// )
const flipTestFn = _.flip(function (a: string, b: string): any { return [a, b] })

logGroup('flip',
	flipTestFn('a', 'b')
)