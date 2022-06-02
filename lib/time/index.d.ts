declare type TimeKey = 'year' | 'mouth' | 'day' | 'hour' | 'minute' | 'second' | 'timeStamp';
export declare function deadline(target: Date, timeKey?: TimeKey, now?: Date): number;
export declare function isDate(date: any): boolean;
export declare function format(time?: number | string | Date, pattern?: string): string;
export {};
