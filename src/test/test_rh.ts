import { RH, _methods, _number, _array, _function } from '../index'

const { log, eventBus } = RH;










const task1 = () => { console.log('task111'); }
const task2 = () => { console.log('task222'); }

eventBus.on('task', task1)
eventBus.on('task', task2)
eventBus.off('task', task1)
setTimeout(() => {
	eventBus.emit('task') // task2
}, 1000)

// 测试
// const obj = { name: 'Jack', address: { x: 100, y: 200 } }
// obj.a = obj // 循环引用
// const newObj = RH.deepClone(obj)
// console.log(newObj.address === obj.address) // false



// function process(): void {
// 	console.log("DevPoint");
// }
// const throttledProcess: any = RH.throttle(process, 1000);
// const delayProcess: any = RH.debounce(process, 400);
// // const throttledProcess: any = process
// // const delayProcess: any = process

// for (let i: number = 0, len: number = 50; i < len; i++) {
// 	setTimeout(() => {
// 		delayProcess();
// 		throttledProcess();
// 	}, 300)
// }



// function end() {
// 	console.log("异步操作结束了！");
// }
// const endAfter3Calls: any = RH.after(3, end); // 定义在执行3次异步操作后执行函数logResult

// setTimeout(() => {
// 	console.log("=>完成第一次异步操作");
// 	endAfter3Calls();
// }, 3000);
// setTimeout(() => {
// 	console.log("=>完成第二次异步操作");
// 	endAfter3Calls();
// }, 2000);
// setTimeout(() => {
// 	console.log("=>完成第三次异步操作");
// 	endAfter3Calls();
// }, 6000);



let af: boolean = false;
let bf: boolean = false;
let cf: boolean = false;

// af = true;
// bf = true;
cf = true;

// function process(title) {
// 	console.log({ title });
// }

// const processonce = RH.once(process);
// const title: string = "DevPoint";
// processonce(title);
// processonce(title);
// processonce(title);

// cf && log(
// 	RH.initMultArray('it', '2&4')
// )


bf && log(
	RH.strReverse('hello world'),   // 'dlrow olleh'
	RH.dayOfYear(new Date()),
	RH.isDateValid("2012-12-13 12:12:12"),
	RH.dateInterval(new Date("2021-11-3"), new Date("2022-2-1")),
)

af && log(
	RH.arrayFilterByObject([1, true, NaN, { a: 123 }, { a: '123 6' }, { a: '12' }], { a: '6' }, true),
	RH.arrayFilterByObject([1, true, NaN, { a: 123 }, { a: '123 6' }, { a: '12' }], { a: '1' }),
	RH.objectInclude({ 'a': 'a', 'cc': 'cc' }, ['a', 'b']),
	RH.objectInclude({ 'a': 'a', 'cc': 'cc' }, 'b'),
	RH.objectInclude({ 'a': 'a', 'cc': 'cc' }),
)


// log(new RH.BaseToDateString('yyyy-mm-dd').format('123'))
// log('--六一--', new RH.BaseToDateString('2021/06/01').FormTz(9).toTz(9).format('yyyy-mm-dd'))
// log('--今天--', new RH.BaseToDateString('').FormTz(9).toTz(9).format('yyyy-mm-dd hh:mm:ss'))
log(
	// RH.
	// RH.arrayUniqueItem([1, 2, 3, 1, 4]),
	// RH.type(1),
	// RH.generateArrayByNum(10, '123'),
	// RH.arraySelectOne([1, 4, 5, 6, 7]),
	// RH.arraySelectItemsByRange([1, 4, 5, 6, 7], 2, 4),
	// _array.arraySelectItemsByRange([1, 4, 5, 6, 7], 2, 4),
)
// RH.log(RH.BaseToString([1, 4, 5]))
// RH.log(RH.BaseToString(`1, 4, 5`))
// RH.log(RH.BaseToNumber('1111fhjsdhf'))
// RH.log(RH.BaseToString('1'))
// function getLocalTime(ns) {
	// return new Date().toUTCString()
	// return new Date(parseInt(ns)).toUTCString().replace(/:\d{1,2}$/, ' ')
	// return new Date(parseInt(ns)).toLocaleDateString().replace(/:\d{1,2}$/, ' ')
// }
// let time = new Date().getTime();
// log(time)
// log(getLocalTime(time))

// RH.log('Methods', Methods.log);
// RH.log(RH.uuid('xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxx'));
// RH.log(RH.uuid('xxxxxxxxxxxxx123123x'));
// RH.log(RH.uuid());

// RH.log('Methods', 'Methods.log', RH.BaseToNumber(123));
// RH.log('Methods', 'Methods.log', _number.BaseToNumber(123));

// console.log(11234);
// console.log( 'rh', RH2)
// console.log( 'rh3', RH3)
// import { log } , * as RH  from '../utils/Methods/log'
// import * as RH  from '../utils/Methods/log'
// console.log( RH)
// log(123)fasdfa

