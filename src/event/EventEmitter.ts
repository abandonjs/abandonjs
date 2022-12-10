import { runFunc } from '../function'

export interface EventEmitter<T, U> {
  /**
   * @description 事件缓存
   */
  $cache: Record<string, T[]>
  /**
   * @description 绑定事件
   * @param name 事件name
   * @param fn 待触发事件
   */
  $on(name: string, fn: T): void
  /**
   * @param name 移除事件的名称
   */
  $off(name: string): boolean
  /**
   * @description 触发后就移除当前事件
   * @param name 待触发事件name
   * @param args 触发事件的参数
   */
  $once<Params extends any[] = any[]>(name: string, ...args: Params): U[]
  /**
   * @param name 待触发事件name
   * @param args 触发事件的参数
   */
  $emit<Params extends any[] = any[]>(name: string, ...args: Params): U[]
}

/**
 * @title EventEmitter<T, U>
 * @description 简易观察者模式
 * @property $cache {Record<string,T[]>} 事件缓存
 * @property $on {(name:string,fn:T)=>void} 绑定事件
 * @property $off {(name: string)=>boolean} 移除事件的名称
 * @property $once {<Params extends any[] = any[]>(name: string, ...args: Params)=>U[]} 触发后就移除当前事件
 * @property $emit {<Params extends any[] = any[]>(name: string, ...args: Params)=> U[]} 触发事件
 * @note
 ```js
 const ev = new EventEmitter()
 ev.$on('fn1', ()=>console.log(1))
 ev.$on('fn2', ()=>console.log(2))
 ev.$emit('fn1')
 //  1
 ev.$emit('fn2')
 // 2
 ```
 */
export class EventEmitter<T = any, U = any> {
  $cache: Record<string, T[]> = {}

  $on(name: string, fn: T): void {
    if (this.$cache[name]) {
      if (Array.isArray(this.$cache[name])) {
        this.$cache[name].push(fn)
      } else {
        this.$cache[name] = [fn]
      }
      return
    }

    this.$cache[name] = [fn]
  }

  $off(name: string): boolean {
    if (!this.$cache[name]) return false
    delete this.$cache[name]
    return true
  }

  $once<Params extends any[] = any[]>(name: string, ...args: Params): U[] {
    if (this.$cache && this.$cache[name]) {
      const result = this.$cache[name].map((i) => runFunc(i, ...args))
      delete this.$cache[name]
      return result
    }
    return []
  }

  // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
  $emit<Params extends any[] = any[]>(name: string, ...args: Params): U[] {
    if (!this.$cache[name]) return []
    return this.$cache[name].map((i) => runFunc(i, ...args))
  }
}