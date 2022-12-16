# EventEmitter<T, U>

> - `description` 简易观察者模式
> - `property` `$cache` `Record<string,T[]>` 事件缓存
> - `property` `$on` `(name:string,fn:T)=>void` 绑定事件
> - `property` `$off` `(name: string)=>boolean` 移除事件的名称
> - `property` `$once` `<Params extends any[] = any[]>(name: string, ...args: Params)=>U[]` 触发后就移除当前事件
> - `property` `$emit` `<Params extends any[] = any[]>(name: string, ...args: Params)=> U[]` 触发事件

 ```js
 const ev = new EventEmitter()
 ev.$on('fn1', ()=>console.log(1))
 ev.$on('fn2', ()=>console.log(2))
 ev.$emit('fn1')
 // 1
 ev.$emit('fn2')
 // 2
 ```
 