export declare type Itteratee = string | ((val: any) => any);
export declare type Predicate = any[] | ((val: any) => any) | AnyObject | string | undefined;
export declare type AnyFunction = (...arg: any[]) => any;
export declare type AnyObject = {
    [key: string]: any;
};
export declare type NoParamFn<Result> = () => Result;
export declare type OneParamFn<Param, Result> = (value: Param) => Result;
//# sourceMappingURL=index.d.ts.map