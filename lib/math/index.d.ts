import { Itteratee } from '../type';
export declare function toHEX(num: number | string, binary?: number): string;
export declare function add(augend: number, addend: number): number;
export declare function ceil(num: number, precision?: number): number;
export declare function divide(dividend: number, divisor: number): number;
export declare function floor(num: number, precision?: number): number;
export declare function max(list: any[]): number | undefined;
export declare function maxBy(list: any[], itteratee?: Itteratee): number | undefined | {
    [key: string]: any;
};
export declare function mean(list: any[]): number | undefined;
export declare function meanBy(list: any[], itteratee?: Itteratee): any;
export declare function min(list: any[]): number | undefined;
export declare function minBy(list: any[], itteratee?: Itteratee): any;
export declare function sum(list?: any[]): number;
export declare function sumBy(list: any[], itteratee?: Itteratee): undefined | number;
export declare function multiply(augend: number, addend: number): number;
