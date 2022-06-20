import { Time } from './type';
export declare function toDate(value: string): Date;
declare type TimeKey = 'year' | 'mouth' | 'day' | 'hour' | 'minute' | 'second' | 'timeStamp';
export declare function deadline(target: Date, timeKey?: TimeKey, now?: Date): number;
export declare function isDate(date: any): boolean;
export declare function format(time?: Time, pattern?: string): string;
export declare function isSameDate(timeA: Time, timeB: Time): boolean;
export {};
