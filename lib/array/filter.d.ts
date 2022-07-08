export declare function filter<T extends {
    [key: string]: any;
}>(list: T[], filterConditions: {
    [key: string]: any;
}, retainNotObject?: boolean): T[];
