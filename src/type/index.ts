export type Itteratee = string | ((val: any) => any)

export type Predicate = any[] | ((val: any) => any) | AnyObject | string | undefined

export type AnyFunction = (...arg: any[]) => any
export type Func<T extends [],U> = (...arg: T) => U
export type AnyAsyncFunction = (...args: any[]) => Promise<any>
export type AsyncFunc<T extends [],U> = (...arg: T) => Promise<U>

export type AnyObject = {
  [key: string]: any
}

export type NoParamFn<Result> = () => Result
export type OneParamFn<Param, Result> = (value: Param) => Result