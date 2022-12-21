export type Itteratee = string | ((val: any) => any)

export type Predicate = any[] | ((val: any) => any) | ObjectType<any> | string | undefined

export type AnyFunction = (...arg: any[]) => any
export type Func<T extends [],U> = (...arg: T) => U
export type AnyAsyncFunction = (...args: any[]) => Promise<any>
export type AsyncFunc<T extends [],U> = (...arg: T) => Promise<U>

export type NoParamFn<Result> = () => Result
export type OneParamFn<Param, Result> = (value: Param) => Result

export type ObjectType<V = unknown> = Record<string, V>
