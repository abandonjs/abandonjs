import { toBe, UnitTest } from 'unit-testing-js'
import { ProxyFactory, ProxyFactoryProps } from '..'
import { ObjectType } from '../../type'

const props: ProxyFactoryProps = [
	{ name: 'a', type: 'number' },
	{ name: 'b', canEmpty: false }
]
const pf = new ProxyFactory(props)

const ap = pf.getProxy<ObjectType>({})
ap.a = 1
ap.b = '2'

try {
	ap.a = '1'
	ap.b = undefined
} catch (error) {
	// console.log(error)
}
// console.log(ap)


// UnitTest(toBe, 'ProxyFactory')
// 	.addCases(
// )
// 	.run()

// const obj: Record<string, any> = { name: "张三", age: 18 }
// const proxy = new Proxy(obj, {
// 	get(target, prop) {
// 		if (prop in target) {
// 			return Reflect.get(target, prop);
// 		} else {
// 			console.error("字段不存在")
// 			return undefined;
// 		}
// 	},
// 	set(target, key, newValue, receiver) {
// 		// console.log({ target, key, newValue, receiver })
// 		if (key === "age") {
// 			if (typeof newValue === "number") {
// 				return Reflect.set(target, key, newValue, receiver);
// 			} else {
// 				console.error("年龄只能输入正整数");
// 				return false;
// 			}
// 		} else {
// 			return false;
// 		}
// 	}
// });
// proxy.age = 20;
// console.log(proxy.age);  // 20
// proxy.age = "22";
// console.log(proxy.age);  // 20
// console.log(proxy.test); // undefined