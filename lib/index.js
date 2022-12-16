'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function type(param) {
    const result = Object.prototype.toString
        .call(param)
        .match(/\[object (\w+)\]/)[1];
    if (result === 'Number' && isNaN(param))
        return 'NaN';
    return result;
}
/**
 * @title types
 * @description 获取类型数组
 * @param params any[] 待判断的参数列表
 * @param hasRepeat=false 保留重复类型
 * @return string[] 类型名称
 */
function types(params, hasRepeat = false) {
    const result = params.map(i => type(i)) || [];
    if (hasRepeat) {
        return result;
    }
    return [...new Set(result)];
}

/**
 * @title logGroup
 * @description 分组打印(简化console.groupCollapsed)
 * @param { string } name 分组名称
 * @param { unknown[] } ...args 需要分组打印的结果
 * @example logGroup(name[, ...args])
 * @return boolean
 */
function logGroup(name = '', ...args) {
    try {
        console.groupCollapsed(`--- ${name} ---`);
        args.forEach((item) => {
            console.log(item);
        });
        console.groupEnd();
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
/**
 * @title logAsync
 * @description 可直接打印 Promise 值
 * @param ...args
 * @returns boolean
 * @version 2.2.0
 */
async function logAsync(...args) {
    try {
        const result = [];
        for (let i = 0; i < args.length; i++) {
            result.push(await args[i]);
        }
        console.log(...result);
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}

/**
 * @title toString
 * @description 任意类型均可转换为string
 * @param value {any}
 * @returns {string}
 * @lastUpdate: 2.2.1
 */
function toString$2(value) {
    if (type(value) === 'String')
        return value;
    if ([
        'Function', 'AsyncFunction', 'GeneratorFunction',
        'Symbol', 'RegExp', 'Promise', 'Date', 'NaN',
        'Map', 'Set', 'WeakMap', 'WeakSet', 'BigInt'
    ].includes(type(value)))
        return value.toString();
    if (value === Infinity)
        return 'Infinity';
    if (value === -Infinity)
        return '-Infinity';
    if (value === undefined)
        return 'undefined';
    if (value === null)
        return 'null';
    return JSON.stringify(value);
}
/**
 * @title toStrings
 * @description 转换为字符串数组, 即数组的的项转换为数组
 * @param value {any[]}
 * @returns {string[]}
 */
function toStrings(values) {
    return values.map(i => toString$2(i));
}

function stringify(value, replacer, space) {
    if (['Object', 'Array'].includes(type(value))) {
        return JSON.stringify(value, replacer, space);
    }
    return JSON.stringify(toString$2(value), replacer, space)
        .replace(/^(")+|(")+$/g, '');
}

function matchNumberValue(val, valer) {
    const valType = type(val);
    const valerType = type(valer);
    if (valerType === 'RegExp') {
        return valer.test(String(val));
    }
    if (valType !== 'Number') {
        return false;
    }
    if (valerType === 'String') {
        const [matNum, Sym = '='] = /(?<=([<>=!]+))[0-9]+/gi.exec(valer) || [];
        switch (Sym) {
            case '=': return val === Number(matNum);
            case '>': return val > Number(matNum);
            case '>=': return val >= Number(matNum);
            case '<': return val < Number(matNum);
            case '<=': return val <= Number(matNum);
            case '<>':
            case '!=': return val != Number(matNum);
        }
    }
    return false;
}

/**
 * @title toPathValue
 * @description 通过path 来获取值
 * @param val 待取值
 * @param path string 路径 (若路径有`.` 可用`\\.`代替)
 * @returns 通过路径获取对应值
 */
function toPathValue(val, path) {
    const paths = path.split('.') || [];
    let beforeKey = '';
    paths.forEach((item) => {
        if (beforeKey !== '' && val[beforeKey + item] !== undefined) {
            val = val[beforeKey + item] || undefined;
            return;
        }
        if (val[item]) {
            val = val[item] || undefined;
        }
        else if (/\\$/.test(item)) {
            beforeKey += item.replace(/\\$/, '.');
        }
    });
    return val;
}

/**
 * @title matchValue
 * @param val 被比较值
 * @param valer 比较值 / 可为正则
 * @param path 值的路径 用逗号隔开
 * @returns boolean
 */
function matchValue(val, valer, path) {
    if (path) {
        val = toPathValue(val, path);
    }
    if (equal(val, valer)) {
        return true;
    }
    if (type(valer) === 'RegExp') {
        return valer.test(String(val));
    }
    if (type(val) === 'Number') {
        return matchNumberValue(val, valer);
    }
    return true;
}
/**
 * @title equal
 * @description 比较是否值和类型是否相等
 * @param value any
 * @param lastValue any
 * @returns
 */
function equal(value, lastValue) {
    if (value === lastValue)
        return true;
    if (type(value) !== type(value))
        return false;
    if (type(value) === 'Symbol')
        return false;
    if (stringify(value) === stringify(lastValue))
        return true;
    return false;
}

function deepClonePredicate(value) {
    switch (type(value)) {
        case 'RegExp':
        case 'Function':
        case 'AsyncFunction':
        case 'GeneratorFunction':
        case 'Array':
        case 'Object': {
            const cloneObj = new value.constructor();
            for (const key in value) {
                if (value.hasOwnProperty(key)) {
                    cloneObj[key] = deepClonePredicate(value[key]); // 递归拷贝  
                }
            }
            return cloneObj;
        }
        case 'Date': {
            return new Date(value);
        }
    }
    return value;
}
// 深拷贝
function deepClone(value) {
    return deepClonePredicate(value);
}

/**
 * @title throwError<<Params extends any[], R = any>
 * @param func: (...args: Params) => R 待捕获错误的函数
 * @param isErrorResult : R
 * @returns (...args:Params)=>R
 */
function throwError(func, isErrorResult) {
    return function (...args) {
        try {
            return func(...args);
        }
        catch (error) {
            return isErrorResult;
        }
    };
}
/**
 * @title asyncThrowError<<Params extends any[], R = any>
 * @description 异步处理
 * @param func: (...args: Params) => R 待捕获错误的函数
 * @param isErrorResult : R
 * @returns (...args:Params)=>R
 */
function asyncThrowError(func, isErrorResult) {
    return async function (...args) {
        try {
            return await func(...args);
        }
        catch (error) {
            return isErrorResult;
        }
    };
}

/**
 * @title ban<Params extends [], Return>
 * @description 限制 方法的超时和执行次数
 * @param func Func<Params, Return>
 * @param config BanConfig
 * @returns function (...args: Params): Return
 */
function ban(func, config) {
    let { timeout = 3000, count = 1000000 } = config;
    if (timeout < 1)
        timeout = 3000;
    if (count < 1)
        count = 1000000;
    let runCount = 1;
    return function (...args) {
        if (runCount > count)
            throw new Error('Possible infinite loop');
        const startTime = Date.now();
        const result = func(...args);
        if (Date.now() - startTime > timeout) {
            throw new Error('Time out');
        }
        runCount++;
        return result;
    };
}
/**
 * @title asyncBan<Params extends [], Return>
 * @param func AsyncFunc<Params, Return>
 * @param config BanConfig
 * @returns function (...args: Params): Return
 */
function asyncBan(func, config) {
    let { timeout = 3000, count = 1000000 } = config;
    if (timeout < 1)
        timeout = 3000;
    if (count < 1)
        count = 1000000;
    let runCount = 1;
    return async function (...args) {
        if (runCount > count)
            throw new Error('Possible infinite loop');
        const startTime = Date.now();
        const result = await func(...args);
        if (Date.now() - startTime > timeout) {
            throw new Error('Time out');
        }
        runCount++;
        return result;
    };
}
/**
 * @title catchError<Params extends [], Return>
 * @param func Func<Params, Return>
 * @param errorReturnValue Return
 * @returns function (...args: Params): Return
 */
function catchError(func, errorReturnValue) {
    return function (...args) {
        try {
            return func(...args);
        }
        catch (error) {
            return errorReturnValue;
        }
    };
}

/**
 * @title changeCase
 * @description  字符转换
 * --- type: FirstUpper:首字母大写 FirstLower：首字母小写  Upper：全部大写 Lower：全部小写
 * @param str string
 * @param type number
 * @returns string
 */
function changeCase(str, type = 'Upper') {
    switch (type) {
        case 'FirstUpper':
            return str.replace(/\b.*/g, (word) => word.substring(0, 1).toUpperCase() + word.substring(1));
        case 'FirstLower':
            return str.replace(/\b.*/g, (word) => word.substring(0, 1).toLowerCase() + word.substring(1));
        case 'Upper':
            return str.toUpperCase();
        case 'Lower':
            return str.toLowerCase();
        default:
            return str;
    }
}

/**
 * @title replaces
 * @description 同时定义多个replace的规则使用
 * @param target {string}
 * @param regs {reg:RegExp|string,value:string}[]
 * @returns {string}
 */
function replaces(target = '', regs = []) {
    for (let i = 0; i < regs.length; i++) {
        const { reg, value } = regs[i];
        target = target.replace(reg, value);
    }
    return target;
}
/**
 * @title reverseString
 * @description 反转字符串
 * @param target string
 * @return string
 */
function reverseString(target) {
    return target.split('').reverse().join('');
}

/**
 * @title hide
 * @description 隐藏指定位置的字符
 * @param target {string} 待替换子串
 * @param start {?number=0}  开始位置
 * @param end {?number=target.length} 结束位置
 * @returns {string}
 * @lastUpdate 2.2.1
 */
function hide(target, start = 0, end) {
    if (type(target) !== 'String') {
        target = toString$2(target);
    }
    if (start <= 0)
        start = 0;
    if (!end || (end > target.length)) {
        end = target.length;
        if (start === 0)
            return target.replace(/./gi, '*');
    }
    const center_len = end - start;
    const end_len = (target.length - end) || 0;
    const reg = new RegExp(`(.{${start}})(.{${center_len}})(.{${end_len}})`, 'g');
    const result = reg.exec(target);
    if (result?.length === 4) {
        result[2] = result[2].replace(/./gi, '*');
        delete result[0];
        return result.join('');
    }
    return target.replace(/./gi, '*');
}

function isEqual(compareValue, beCompareValue) {
    if (compareValue === beCompareValue)
        return true;
    return stringify(compareValue) === stringify(beCompareValue);
}

const MAX_VALUES_NUMBER = 1.7976931348623157e+308;
const MIN_VALUES_NUMBER = -1.7976931348623157e+308;
const INFINITY = Infinity; // 无限

/**
 * @title toNumber
 * @description 将值转换为Number, 不可以正确装换的值, 均返回0
 * @param value any 待转换的数值
 * @returns number
 */
function toNumber(value) {
    if (type(value) === 'Number') {
        if (value === INFINITY)
            return MAX_VALUES_NUMBER;
        if (value === -INFINITY)
            return MIN_VALUES_NUMBER;
        return value;
    }
    const result = +value;
    if (type(result) === 'Number') {
        return result;
    }
    return 0;
}
/**
 * @title toFloat
 * @description 转换为指定位数的浮点数
 * @param num { number } 数字
 * @param fixed { number } 小数点位数
 * @returns { number }
 */
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
function toFloat(num, fixed = 1) {
    return Number(num.toFixed(fixed));
}

/**
 * @title isEffectNumber
 * @description 是否为js的有效区间的数, 非number类型都为false
 * @param num any
 * @returns boolean
 */
function isEffectNumber(num) {
    if (type(num) === 'Number') {
        if (num === INFINITY || num === -INFINITY)
            return false;
        return true;
    }
    return false;
}
/**
 * @title isFloat
 * @description 判断数是否为浮点型
 * @param num 待检测的数据类型
 * @returns boolean
 */
function isFloat(num) {
    return (num % 1) !== 0;
}
/**
 * @title isNumber
 * @description 是否为数字
 * @param num 待检测的数据类型
 * @returns {boolean}
 */
const isNumber = (val) => type(val) === 'Number';
const isBigInt = (value) => type(value) === 'BigInt';
/**
 * @title likeNumber
 * @description 是否为数字
 * @support: Number, NumberString
 * @unsupported: Infinity, Function
 * @param value any
 * @returns boolean
 * @version: 2.2.3
 */
function likeNumber(value) {
    if (type(value) === 'String') {
        value = value.replaceAll(' ', '');
    }
    if ([Infinity, null, undefined, '', NaN].includes(value))
        return false;
    if (Array.isArray(value))
        return false;
    const result = type(value) === "Number" && typeof value === 'number';
    if (result)
        return result;
    if (Number.isNaN(Number(value)) === false) {
        return true;
    }
    return false;
}

/**
 * @title spLength
 * @description 指定长度
 * @param value any
 * @param min = 0
 * @param max number
 * @returns string
 */
function spLength(value, min = 0, max) {
    if (!/^[0-9]*$/.test(String(value))) {
        return new Array(min).fill('0').join('');
    }
    const tmpValue = value.toString();
    const len = tmpValue.length;
    if (len > max) {
        return tmpValue.slice(len - max);
    }
    if (len < min) {
        return new Array(min - len).fill('0').join('') + tmpValue;
    }
    return tmpValue;
}
/**
 * @title getDecimal
 * @description 获取小数点位数
 * @param num { number }
 * @returns { number=0 }
 */
function getDecimal(num) {
    if (!isFloat(num))
        return 0;
    return num.toString().split('.')[1].length;
}
/**
 * @title clamp
 * @description 限制在lower和upper之间
 * @param num 待限制的值
 * @param lower 下限
 * @param upper 上限
 * @returns 返回被限制的值
 */
function clamp(num, lower = -INFINITY, upper = INFINITY) {
    if (num < lower)
        return lower;
    if (num > upper)
        return upper;
    return num;
}
/**
 * @title inRange
 * @description 判断是否在该范围
 * @param num 要检查的值
 * @param start=0 开始范围
 * @param end 结束范围(包含该值)
 * @returns boolean
 */
function inRange(num, start = 0, end = MAX_VALUES_NUMBER) {
    if (end < start)
        return false;
    if (num > end)
        return false;
    if (num < start)
        return false;
    return true;
}
/**
 * @title between
 * @description 判断值是否在两值之间
 * @param num number 待判断值
 * @param start=0 起始值
 * @param end number 结束值(不包含该值)
 * @returns boolean
 */
function between(num, start = 0, end = MAX_VALUES_NUMBER) {
    if (end < start)
        return false;
    if (num >= end)
        return false;
    if (num < start)
        return false;
    return true;
}
/**
  * @title round
  * @description数字四舍五入，保留n位小数
  * @param number number 待处理数值
  * @param n number = 0 四舍五入的位数
  * @returns
*/
function round(number, n = 0) {
    if (n <= 0)
        return Math.round(number);
    return Math.round(number * Math.pow(10, n)) / Math.pow(10, n);
}
/**
 * @title toThousands
 * @description 数字每千位加逗号
 * @param num string|number
 * @returns string
 */
function toThousands(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

/**
 * @title random
 * @description 随机数
 * @param lower { number } 下限
 * @param upper { number } 上限
 * @param floating { number = 0 } 是否返回浮点数(位数), 0: 整数
 */
function random(lower = 0, upper = 1, floating = 0) {
    if (lower === 0 && upper === 1) {
        return Math.random();
    }
    if (isFloat(upper) || isFloat(lower)) {
        const len = getDecimal(upper) > getDecimal(lower) ? getDecimal(upper) : getDecimal(lower);
        if (floating === 0) {
            floating = len;
        }
    }
    const result = lower + Math.random() * (upper - lower);
    if (floating)
        return toFloat(result, floating);
    return Math.ceil(result);
}

/**
 * @title toDate
 * @description 字符串装换成Date对象
 * @param value string 可以转换成时间的字符串
 * @returns {Date}
 */
function toDate(value) {
    // ios 不支持 YYYY-MM-DD hh:mm:ss
    if (/\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}/.test(value)) {
        value.replaceAll('-', '/');
    }
    return new Date(value);
}

/**
 * @title deadline
 * @description 倒计时
 * @param target {Date} 目标时间
 * @param timeKey {?'year' | 'mouth' | 'day' | 'hour' | 'minute' | 'second' | 'timeStamp'}  指定倒计时单位
 * @param now {?Date = new Date()} 起始时间
 * @returns {number}
 */
function deadline(target, timeKey = 'day', now = new Date()) {
    const surplusTimeStamp = target.getTime() - now.getTime();
    const surplusDay = Math.ceil(surplusTimeStamp / 86400000);
    switch (timeKey) {
        case 'year': return target.getFullYear() - now.getFullYear();
        case 'mouth': return (target.getFullYear() - now.getFullYear()) * 12 + (target.getDate() - now.getDate());
        case 'day': return surplusDay;
        case 'hour': return surplusDay * 24;
        case 'minute': return surplusDay * 1440;
        case 'second': return surplusDay * 8640086400;
        case 'timeStamp': return surplusDay;
        default: return surplusTimeStamp;
    }
}

/**
 * @title format
 * @description 时间格式化
 * @param time:number|string|Date  时间
 * @param pattern?:string 格式
 * @returns string 格式化后的数据

 * @note
| 符号 | 结果| 描述 |
|:----|:----|:----|
| YYYY	| 2022	| 4位数字的年份(忽略大小写) |
| YY	|  1-14	| 2 位数字的年份(忽略大小写) |
| M  MM |	1-12 |	月份数字 |
| D  DD |	1-31 |	日数(忽略大小写) |
| H  HH	| 0-23 |  24 小时制 |
| h  hh	| 1-12 |	12 小时制 |
| m  mm | 0-59 |	分钟|
| s  ss	| 0-59 |	秒钟|

 */
function format(time = new Date(), pattern = 'YYYY-MM-DD') {
    if (type(time) === 'Number') {
        if (time.toString().length === 10)
            time += '000';
    }
    const date = new Date(time);
    const year = date.getFullYear();
    // eslint-disable-next-line
    if (isNaN(year)) {
        return 'Invalid Date';
    }
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return replaces(pattern, [
        { reg: /[Y|y]{4}/, value: spLength(year, 4, 4) },
        { reg: /[Y|y]{2}/, value: spLength(year, 2, 2) },
        { reg: /[M]{2}/, value: spLength(month, 2, 2) },
        { reg: /[M]{1}/, value: spLength(month, 1, 2) },
        { reg: /[D|d]{2}/, value: spLength(day, 2, 2) },
        { reg: /[D|d]{1}/, value: spLength(day, 1, 2) },
        { reg: /[H]{2}/, value: spLength(hour, 2, 2) },
        { reg: /[H]{1}/, value: spLength(hour, 1, 2) },
        { reg: /[h]{2}/, value: spLength(hour % 12, 2, 2) },
        { reg: /[h]{1}/, value: spLength(hour % 12, 1, 2) },
        { reg: /[m]{2}/, value: spLength(minutes, 2, 2) },
        { reg: /[m]{1}/, value: spLength(minutes, 1, 2) },
        { reg: /[s]{2}/, value: spLength(seconds, 2, 2) },
        { reg: /[s]{1}/, value: spLength(seconds, 1, 2) }
    ]);
}

/**
 * @title isArray
 * @description 是否为数组
 * @param value any
 * @returns boolean
 */
const isArray = Array.isArray;

/**
 * @title isFunction
 * @description 是否为普通函数
 * @param value {any}
 * @returns {boolean}
 */
function isFunction(value) {
    return type(value) === 'Function';
}
/**
 * @title isAsyncFunction
 * @description 是否为异步函数
 * @param value {any}
 * @returns {boolean}
 */
function isAsyncFunction(value) {
    return type(value) === 'AsyncFunction';
}
/**
 * @title likeFunction
 * @description 是否为函数
 * @param value {any}
 * @returns {boolean}
 */
function likeFunction(value) {
    return type(value) === 'Function' || type(value) === 'AsyncFunction';
}

/**
 * @title isObject
 * @description 判断是否为Object
 * @param value
 * @returns boolean
 */
function isObject(value) {
    return type(value) === 'Object';
}
const isSymbol = (val) => typeof val === 'symbol';
const isPromise = (value) => {
    return type(value) === 'Promise';
};
const toString$1 = Object.prototype.toString;
const isMap = (val) => toString$1.call(val) === '[object Map]';
const isSet = (val) => toString$1.call(val) === '[object Set]';

/**
 * @title isString
 * @description 是否为字符串
 * @param value {any}
 * @returns {boolean}
 */
function isString(value) {
    return typeof value === 'string';
}
/**
 * @title isJsonString<T>
 * @description 判断是否为json字符串, 若是并返回处理后的对象
 * @param val 待判断字符串
 * @returns T | false
 */
function isJsonString(val) {
    if (typeof val !== 'string')
        return false;
    try {
        const obj = JSON.parse(val);
        return isObject(obj) && obj;
    }
    catch (e) {
        return false;
    }
}

/**
 * @title isDate
 * @description 检查日期是否有效
 * @param date {any} 待判断日期
 * @returns {boolean}
 * @version 2.2.3
 */
function isDate(date) {
    return type(date) === 'Date';
}
/**
 * @title likeDate
 * @description 检查日期是否有效, 时间戳也为有效时间(13位/10位)
 * @param date {any}
 * @returns {boolean}
 */
function likeDate(date) {
    if (isDate(date))
        return true;
    if ((isString(date) && isNumber(Number(date)))
        || isNumber(date)) {
        if (date.toString().length === 13)
            return true;
        if (date.toString().length === 10)
            return true;
    }
    return false;
}
/**
 * @title isTime
 * @description 检查日期是否有效, 时间戳也为有效时间(13位/10位)
 * @param time:any 待判断日期
 * @returns boolean
 * @version 2.2.3
 */
function isTime(time) {
    if (type(time) === 'Number') {
        if (time.toString().length === 13)
            return true;
        if (time.toString().length === 10)
            return true;
    }
    return time instanceof Date && !isNaN(time.getTime());
}
/**
 * @title isSameDate
 * @description 时间是否相同, 时间类型支持isDate的类型
 * @param timeA 比较时间
 * @param timeB 被比较时间
 * @returns {boolean}
 * @version 2.2.3
 */
function isSameDate(timeA, timeB) {
    if (!isTime(timeA) || !isTime(timeB))
        return false;
    if (timeA.toString() === timeB.toString())
        return true;
    if (new Date(timeA).getTime() === new Date(timeB).getTime())
        return true;
    return false;
}

// RegExp
/**
 * @title isEmpty
 * @description 判断是否为无效值 undefined , null, NaN
 * @param value any 待判断值
 * @returns boolean
 */
function isEmpty(value) {
    if (value === undefined || value === null || isNaN(value))
        return true;
    return false;
}
/**
 * @title FileTypeMap
 * @description 文件类型映射
 * @version 2.2.0
 */
const FileTypeMap = new Map([
    ['Image', ['png', 'jpeg', 'jpg', 'png', 'bmp']],
    ['Video', ['mp4', 'webm', 'ogg']],
    ['PDF', ['pdf']],
    ['Word', ['doc', 'docx']],
    ['Excel', ['.xlsx', '.xls', '.csv']],
]);
/**
 * @title isFileExtension
 * @description 是否为指定字符串结尾
 * @param fileName string 文件名
 * @param list string[] 文件拓展名数组
 * @returns boolean
 * @version 2.2.0
 */
function isFileExtension(fileName, list = []) {
    if (typeof fileName !== 'string')
        return false;
    if (/\.[a-zA-Z0-9]{1,}/.exec(fileName) === null)
        return false;
    if (list.length === 0)
        return true;
    const name = fileName.toLowerCase();
    return list.some(i => name.endsWith(i) === true);
}
/**
 * @title isFile
 * @param fileName string
 * @param type {FileType}
 * @returns boolean
 * @version 2.2.0
 */
function isFile(fileName, type) {
    return isFileExtension(fileName, FileTypeMap.get(type));
}
/**
 * @title isImageFile
 * @param fileName string
 * @returns boolean
 * @version 2.2.0
 */
function isImageFile(fileName) {
    return isFileExtension(fileName, FileTypeMap.get('Image'));
}
/**
 * @title isVideoFile
 * @param fileName string
 * @returns boolean
 * @version 2.2.0
 */
function isVideoFile(fileName) {
    return isFileExtension(fileName, FileTypeMap.get('Video'));
}
/**
 * @title isPdfFile
 * @param fileName string
 * @returns boolean
 * @version 2.2.0
 */
function isPdfFile(fileName) {
    return isFileExtension(fileName, FileTypeMap.get('PDF'));
}
/**
 * @title isWordFile
 * @param fileName string
 * @returns boolean
 * @version 2.2.0
 */
function isWordFile(fileName) {
    return isFileExtension(fileName, FileTypeMap.get('Word'));
}
/**
 * @title isExcelFile
 * @param fileName string
 * @returns boolean
 * @version 2.2.0
 */
function isExcelFile(fileName) {
    return isFileExtension(fileName, FileTypeMap.get('Excel'));
}
const isClient = typeof window !== 'undefined';
const isBoolean = (val) => typeof val === 'boolean';
const isWindow = (val) => typeof window !== 'undefined' && toString.call(val) === '[object Window]';
const isIOS =  isClient && window?.navigator?.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
const hasOwn = (val, key) => Object.prototype.hasOwnProperty.call(val, key);

/**
 * @title timezone
 * @description 指定时区时间偏移量, 转换为目标时间
 * @param originOffset {LikeNumber} 当前时间的时区(number:时间偏移量|string:时区)
 * @param targetOffset {LikeNumber} 目标时间的时区(number:时间偏移量|string:时区)
 * @returns {(data:Date)=>Date}
 * @note
 ```js
 const oDate = new Date('2022-12-11T07:58:07.945Z')
 const tDate = new Date('2022-12-11T15:58:07.945Z')
 timezone('1', 9 * 3600000)(oDate) ==> tDate
 ```
 */
function timezone(originOffset, targetOffset) {
    originOffset = isString(originOffset) ? toNumber(originOffset) * 3600000 : originOffset;
    targetOffset = isString(targetOffset) ? toNumber(targetOffset) * 3600000 : targetOffset;
    const offset = targetOffset - originOffset;
    return (date) => new Date(date.getTime() + offset);
}

/**
 * @title toArray<T>
 * @description 将非数组转换为数组
 * @param value T | T[]
 * @returns T[]
 */
function toArray(value) {
    if (Array.isArray(value))
        return value;
    if ([undefined, null, NaN].includes(value))
        return [];
    return [value];
}

/**
 * @title existKeys
 * @description 判断对象是否拥有指定keys
 * @param obj object
 * @param keys string[] | string
 * @returns boolean
 */
function existKeys(obj, keys) {
    const objKeys = Object.keys(obj);
    keys = toArray(keys);
    for (let i = 0; i < keys.length; i++) {
        if (objKeys.includes(keys[i]))
            return true;
    }
    return false;
}

/**
 * @title omitRecord<T extends Record<string, any> = Record<string, any>>
 * @description 忽略object属性
 * @param record T
 * @param propertys string[]
 * @returns T
 */
function omitRecord(record, propertys = []) {
    propertys.forEach(property => {
        record[property] && delete record[property];
    });
    return record;
}

/**
 * @title serialize
 * @description 序列化对象
 * @param query object
 * @param encode boolean = false
 * @returns string
 */
function serialize(query, encode = false) {
    return Object.keys(query)
        .map((key) => `${key}=${encode ? encodeURIComponent(query[key]) : query[key]}`)
        .join('&');
}

function includes(list, item) {
    if (isObject(item)) {
        for (let i = 0; i < list.length; i++)
            if (isEqual(list[i], item))
                return true;
    }
    if (list.includes(item))
        return true;
    return false;
}
class MapEntity {
    map;
    weakMap;
    keyList = [];
    size = 0;
    constructor() {
        this.map = new Map();
        this.weakMap = new WeakMap();
        this.size = 0;
    }
    clear() {
        this.map.clear();
        this.weakMap = new WeakMap();
        this.keyList = [];
        this.size = 0;
    }
    delete(key) {
        if (!includes(this.keyList, key))
            return false;
        --this.size;
        const newKeyList = [...this.keyList];
        this.keyList = this.keyList.filter(item => !isEqual(item, key));
        if (!isObject(key))
            return this.map.delete(key);
        for (let i = 0; i < newKeyList.length; i++)
            if (isEqual(newKeyList[i], key))
                return this.weakMap.delete(newKeyList[i]);
        return false;
    }
    forEach(callback, thisArg = {}) {
        const newCallback = callback.bind(thisArg);
        for (let i = 0; i < this.keyList.length; i++) {
            const key = this.keyList[i];
            let val;
            if (isObject(key)) {
                val = this.weakMap.get(key);
            }
            else {
                val = this.map.get(key);
            }
            newCallback(val, key, this);
        }
    }
    get(key) {
        if (!isObject(key))
            return this.map.get(key);
        for (let i = 0; i < this.keyList.length; i++)
            if (isEqual(this.keyList[i], key))
                return this.weakMap.get(this.keyList[i]);
        return undefined;
    }
    has(key) {
        if (isObject(key))
            return this.weakMap.has(key);
        return this.map.has(key);
    }
    set(key, value) {
        if (includes(this.keyList, key)) {
            if (!isObject(key)) {
                this.map.set(key, value);
                return this;
            }
            for (let i = 0; i < this.keyList.length; i++)
                if (isEqual(this.keyList[i], key))
                    this.weakMap.set(this.keyList[i], value);
            return this;
        }
        this.keyList.push(key);
        ++this.size;
        if (!isObject(key)) {
            this.map.set(key, value);
            return this;
        }
        for (let i = 0; i < this.keyList.length; i++)
            if (isEqual(this.keyList[i], key))
                this.weakMap.set(this.keyList[i], value);
        this.weakMap.set(key, value);
        return this;
    }
}

/**
 * @title filter<T extends object>
 * @description 单层过滤
 * @param list {T[]} 待过滤数组
 * @param filterCondition {FilterCondition<T>} 过滤条件
 * @param retainNotObject {boolean=false} 是否保留非对象项
 * @returns {T[]}
 * @version 2.3.1
 */
function filter(list, filterCondition, retainNotObject = false) {
    if (type(list) !== 'Array')
        return [];
    if (!filterCondition || !list || list.length === 0)
        return list;
    if (type(filterCondition) === 'Function') {
        return list.filter(filterCondition);
    }
    return list.filter((item) => {
        if (!isObject(item))
            return retainNotObject;
        let flag = true;
        if (type(filterCondition) === 'Object') {
            for (const key in filterCondition) {
                const unit = filterCondition[key];
                const val = item[key];
                if (val !== unit && type(unit) !== 'RegExp') {
                    flag = false;
                    break;
                }
                if (type(unit) === 'RegExp' && !unit.test(val)) {
                    flag = false;
                    break;
                }
            }
        }
        return flag;
    });
}

/**
 * @title selects<T>
 * @description 指定范围 来随机选择数组元素
 * @param list: T[]
 * @param min: number
 * @param max: number (包括)
 * @returns T[]
 */
function selects(list, min, max) {
    if (max > list.length) {
        max = list.length - 1;
    }
    let len = random(min, max) || 0;
    const result = [];
    let index = 0;
    while (len--) {
        index = ~~(Math.random() * list.length);
        result.push(list[index]);
        list.splice(index, 1);
    }
    return result;
}
/**
 * @title select<T>
 * @description 选择数组其中一项, 不指定就随机选一
 * @param list T[] 待选择数组
 * @param index ?number 指定选择索引(可为负数)
 * @returns T|null 选择项
 */
function select(list = [], index) {
    const len = list.length;
    if (len === 0)
        return null;
    if (!index && index !== 0)
        return list[~~(Math.random() * list.length)];
    if (index > len)
        return list[index % len];
    if (index > -1)
        return list[index];
    if (index < 0)
        return list[list.length + (index % len)];
    return null;
}

/**
 * @title pick
 * @description 从数组中取任意 一个 元素
 * @param any[] list
 * @returns 数组中任意一个
 */
function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
}
/**
 * @title unique<T>
 * @description 去除数组重复项
 * @param T[] list 待过滤数组
 * @returns T[]
 */
function unique(list) {
    return [...new Set(list)];
}
/**
 * @title chunk<T>
 * @description 通过 size 切割数组
 * @param list T[]
 * @param size number 切割点索引
 * @returns T[][] [ [切割点前数据], [切割点后数据] ]
 */
function chunk(list, size) {
    return [list.slice(0, size), list.slice(size)];
}
/**
 * @title concat<T>
 * @description 连接多个数组
 * @params ...list any[][] 多个数组
 * @returns any[]
 */
function concat(...list) {
    let result = [];
    if (list && list.length > 0) {
        const len = list.length;
        let i = 0;
        while (i < len) {
            if (Array.isArray(list[i])) {
                result = result.concat(list[i]);
            }
            else {
                result.push(list[i]);
            }
            i++;
        }
    }
    return result;
}
/**
 * @title drop<T>
 * @description 去除前n个元素
 * @param T[] list 数组
 * @param number n=0 要去除元素个数
 * @returns T[] list 剩余切片
 */
function drop(list = [], n = 0) {
    while (n--) {
        if (list.length < 1)
            return [];
        list.shift();
    }
    return list;
}
/**
 * @title dropRight<T>
 * @description 从右往左删除的指定个数
 * @param list T[] 要处理的数组
 * @param n=1 需要删除的元素数量
 * @returns T[]
 */
function dropRight(list, n = 1) {
    const len = list.length || 0;
    return list.splice(0, len - n);
}
/**
 * @title fill<T>
 * @description 在原有数组上改变, 修改指定位置的值
 * @param array T[] 待填充改变的数组
 * @param value T 填充值
 * @param num 填充个数
 * @returns
 */
function fill(array, value, num = 0) {
    while (num--)
        array.push(value);
    return array;
}
/**
 * @title difference<T>
 * @description 过滤数组
 * @param list T[] 待过滤的数组
 * @param ...filterConditions:T[] 过滤使用的条件
 * @returns T[] 过滤后的数组(new)
 */
function difference(list, ...filterConditions) {
    if (!list)
        return [];
    const result = list || [];
    // 整合过滤条件
    if (!filterConditions)
        return list;
    return result.filter((item) => {
        return !filterConditions.includes(item);
    });
}

/**
 * @title loop<T>
 * @description: 指定次数遍历
 * @param num  {number}
 * @param  callback  {?(indexes: number[]) => T}
 * @returns {T[]}
 * @version: 2.3.2
 */
function loop(num, callback = ((indexes) => indexes), indexes = []) {
    const result = [];
    for (let i = 0; i < num; i++) {
        result.push(callback(indexes.concat(i)));
    }
    return result;
}
/**
 * @title loops<T>
 * @description: 指定次数遍历
 * @param length  {number[]}
 * @param callback  {((indexes: number[]) => T) = ((indexes: number[]) => indexes as T)}
 * @returns {Array}
 * @version: 2.3.2
 */
function loops(num, callback = ((indexes) => indexes), indexes = []) {
    const len = num.length;
    if (len === 0) {
        return [];
    }
    if (len === 1) {
        return loop(num[0], callback, indexes);
    }
    const [_len, ..._length] = num;
    const result = [];
    for (let i = 0; i < _len; i++) {
        result.push(loops(_length, callback, indexes.concat(i)));
    }
    return result;
}
function loopGroup(num, callback = ((indexes) => indexes), indexes = []) {
    const result = [];
    loops(num, (_indexes) => {
        result.push(callback(_indexes));
        return _indexes;
    }, indexes);
    return result;
}
/**
 * @title loopArray<T>
 * @description: 数组遍历
 * @param arrays {T[]}
 * @param callback {(unit:T,index?:number)=>true|void}
 * @returns {T|undefined}
 * @version: 2.3.2
 */
function loopArray(array, callback) {
    for (let i = 0; i < length; i++) {
        if (callback(array[i], i)) {
            return array[i];
        }
    }
    return;
}
/**
 * @title loopArray<T>
 * @description: 数组遍历
 * @version: 2.1.11
 * @param arrays {T[]}
 * @param callback {(unit:T,index?:number)=>true|void}
 * @returns number
 * @version: 2.3.2
 */
function loopArrays(arrays, callback) {
    const result = [];
    loops(arrays.map(item => item.length), (indexes) => {
        result.push(callback(indexes.map((i, j) => arrays[j][i]), indexes));
        return indexes;
    });
    return result;
}

/**
 * @title zip
 * @description: 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推
 * @param arrays  {...any[]}
 * @returns {any[]}
 * @version: 2.1.11
 */
function zip(...arrays) {
    const len = arrays.length;
    const maxLen = arrays[0].length;
    const result = loops([maxLen, len], (indexes) => {
        if (indexes.length !== maxLen)
            return;
        const [depth0, depth1] = indexes;
        return arrays[depth1][depth0];
    });
    return result;
}
function zipObject(props, values) {
    const record = {};
    for (let i = 0; i < props.length; i++) {
        record[toString$2(props[i])] = values[i];
    }
    return record;
}
// const _path = (path: string, value: any) => {
// 	const _record = {}
// 	// return _path(path, value)
// }
// export function zipObjectDeep<T>(props: string[], values: any[]): T {
// 	const record: T = {} as T
// 	const _props = [...props]
// 	for (let i = 0; i < props.length; i++) {
// 		// const keys = props[i].split('.')
// 		const key = /(\w)\./.exec(props[i])
// 		// if (key?.length === 2) {
// 		// 	record[key] =
// 		// }
// 		// record[keys[0]] = _path(,values[i])
// 		// for (let j = 1; i < keys.length; j++) {
// 		// }
// 		// record[props[i]] = values[i]
// 	}
// 	return record
// }

/**
 * @title flat
 * @description 数组扁平化
 * @param list <Array>
 * @param depth <?number=1> 深度
 * @returns <Array>
 * @version: 2.2.0
 */
function flat(list, depth = 1) {
    if (!Array.isArray(list))
        return toArray(list);
    if (list.length === 0 || depth < 1)
        return [];
    if (depth === 1)
        return list.flatMap(i => i);
    return list.flat(depth);
}

/**
 * @title runFunc
 * @description 运行函数, 支持普通函数和async函数, 否则返回func
 * @param func
 * @param ...args
 * @returns
 */
function runFunc(func, ...args) {
    if (type(func) === 'Function') {
        return func(...args);
    }
    if (type(func) === 'AsyncFunction') {
        return (async () => await func(...args))();
    }
    return func;
}

/**
 * @title toPromise<T>
 * @description 将方法或值转换为Promise对象, 若传输values切target为function, 就会返回执行结果
 * @param target any
 * @param ...values ?any[]
 * @returns Promise<T>
 */
function toPromise(target, ...values) {
    return new Promise((resolve, reject) => {
        try {
            if (type(target) === 'Function' && values) {
                resolve(target(...values));
            }
            else {
                resolve(target);
            }
        }
        catch (err) {
            reject(err);
        }
    });
}
/**
 * @title once
 * @description  fn 方法只会执行一次
 * @param fn 指定值运行一次的方法
 * @returns 返回封装后的方法
 */
function once(fn) {
    let returnValue;
    let canRun = true;
    return function () {
        if (canRun) {
            returnValue = fn.apply(this, arguments);
            canRun = false;
        }
        return returnValue;
    };
}
/**
 * @title throttle
 * @description 节流: 用于限制函数触发频率, 每个delay时间间隔，最多只能执行函数一次
 * @param fn function 待处理函数
 * @param interval number 间隔
 * @returns func
 */
function throttle(fn, interval) {
    let lastTime = 0;
    return function throttled(...args) {
        const timeSinceLastExecution = Date.now() - lastTime;
        if (!lastTime || timeSinceLastExecution >= interval) {
            fn.apply(this, ...args);
            lastTime = Date.now();
        }
    };
}
/**
 * @title debounce
 * @description
 * -- 防抖:  时间内只会执行一次 可以减少函数触发的频率
 * -- 当函数触发时，使用一个定时器延迟执行操作。
 * -- 当函数被再次触发时，清除已设置的定时器，重新设置定时器。
 * -- 如果上一次的延迟操作还未执行，则会被清除。
 * @param fn function
 * @param interval number
 * @returns
 */
function debounce(fn, interval) {
    const timer = 0;
    const debounced = () => {
        clearTimeout(timer);
        const args = arguments;
        setTimeout(() => {
            fn.apply(this, args);
        }, interval);
    };
    return debounced;
}
/**
 * @title after
 * @description 调用n次后才触发func
 * @param n 调用后多少次才执行
 * @param func 限定的函数
 * @returns 新的限定函数
 */
function after(n = 0, func) {
    return function (...args) {
        if (--n < 0)
            return func(...args);
        return;
    };
}
/**
 * @title ary
 * @description 调用func最多接受n个参数
 * @param func 限定函数
 * @param n 限制参数数量
 * @returns 新的覆盖函数
 */
function ary(func, n) {
    return function (...args) {
        return func(...args.splice(0, n));
    };
}
/**
 * @title before
 * @description 调用n次后，再调用就会返回最后一次调用的结果
 * @param n 超过n次不再调用
 * @param func 限定函数
 * @returns 新的限定函数
 */
function before(n, func) {
    let lastResult = undefined;
    return function (...args) {
        if (n-- > 0) {
            lastResult = func(...args);
        }
        return lastResult;
    };
}
/**
 * @title bind
 * @description thisArg绑定func的this，并且func会接收partials附加参数
 * @param func 绑定的函数
 * @param thisArg 绑定的对象
 * @param partials 附加的部分参数
 * @returns 新的绑定函数
 */
function bind(func, thisArg = {}, ...partials) {
    return function (...args) {
        if (func)
            return func.call(thisArg, ...[...partials, ...args]);
        return;
    };
}
/**
 * @title curry
 * @description 柯里化
 * @param func 待柯里化函数
 * @param len 待柯里化参数个数
 * @returns 柯里化函数
 */
function curry(func, len) {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    let _args = [];
    const _resFn = function (...args) {
        _args = _args.concat(args);
        if (_args.length < len) {
            return _resFn;
        }
        return func(..._args);
    };
    return _resFn;
}
/**
 * @title delay
 * @param func 指定函数
 * @param delayTime 延迟时间
 * @param args 传输参数
 * @returns func执行结果(Promise)
 */
function delay(func, delayTime = 0, ...args) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(func(...args));
        }, delayTime);
    });
}
/**
 * @title flip
 * @param func 要翻转参数的函数
 * @param args 反转参数
 * @returns
 */
function flip(func) {
    return function (...args) {
        return func(...args.reverse());
    };
}

function useValue(itteratee) {
    const __type = type(itteratee);
    return function (val) {
        if (__type === 'String')
            return val[itteratee];
        if (__type === 'Function')
            return itteratee(val);
        return val;
    };
}

/**
 * @ 无限大（小）当做 js Number 的最大（小）值[主要处理计算异常的问题, 二期再加入大位数处理]
 * @ 二期再加入大位数计算
 */
const __binary = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'B'];
/**
 * @title HEX
 * @description 将数字装换成需要装换的数据格式(k, m, g, t, p, e, z, y, b)
 * @param num (number|string) 待转换的数子 (<binary^ 9)
 * @param binary (number) 进制 (default:1024)
 * @returns (number)
 */
function toHEX(num, binary = 1024) {
    let result = '';
    let tempNum = Number(num);
    if (num > binary ** 9)
        return '1024B';
    const index = 0;
    function translate(index) {
        const _index_num = tempNum % binary;
        tempNum = (tempNum - _index_num) / binary;
        if (_index_num > 0)
            result = _index_num + __binary[index] + result;
        if (tempNum < 1)
            return;
        translate(++index);
    }
    translate(index);
    return result;
}
/**
 * @title add
 * @description 两数求和
 * @param augend number 加数
 * @param addend number 被加数
 * @returns number ( 不会超过数字的边界值 1.7976931348623157e+308 )
 */
function add(augend, addend) {
    return toNumber(toNumber(augend) + toNumber(addend));
}
/**
 * @title ceil
 * @description 向上取整的值(没有对number边界值[Infinity值处理])
 * @param num 要向上舍入的值
 * @param precision number = 0 精度(负数就是想整数部分取整)
 * @returns number
 */
function ceil(num, precision = 0) {
    return Math.ceil(num * toNumber(10 ** precision)) * toNumber(10 ** -precision);
}
/**
 * @title divide
 * @description 相除
 * @param dividend number 除数
 * @param divisor number 被除数
 * @returns number 商
 */
function divide(dividend, divisor) {
    if (divisor >= MAX_VALUES_NUMBER || divisor <= MIN_VALUES_NUMBER)
        return 0;
    return toNumber(dividend) / toNumber(divisor);
}
/**
 * @title floor
 * @description 向下取整(没有对number边界值[Infinity值处理])
 * @param num 待向下舍入的值
 * @param precision 精度 (负数就是处理整数部分)
 * @returns 向下取整
 */
function floor(num, precision = 0) {
    return (Math.floor(num * toNumber(10 ** precision)) * toNumber(10 ** -precision));
}
/**
 * @title max
 * @description 求最大值(只会判断有效值), 只会统计number | string类型的数值
 * @param list 数组
 * @returns 最大值
 */
function max(list) {
    let maxValue = undefined;
    list.forEach((val) => {
        const item = Number(val);
        if (isEffectNumber(item)) {
            if (maxValue === undefined) {
                maxValue = item;
            }
            else
                maxValue = item < maxValue ? maxValue : item;
        }
    });
    return maxValue;
}
/**
 * @title maxBy
 * @description 求最大值
 * @param list 要迭代数组
 * @param itteratee 迭代函数 / key
 * @returns 最大值
 */
function maxBy(list, itteratee) {
    const _type = type(itteratee);
    if (_type === 'Undefined') {
        return max(list);
    }
    let maxValue = undefined;
    let result = undefined;
    const handleValue = useValue(itteratee);
    list.forEach((val) => {
        const item = Number(handleValue(val));
        if (isEffectNumber(item)) {
            if (maxValue === undefined) {
                maxValue = item;
                result = val;
            }
            if (item > maxValue) {
                maxValue = item;
                result = val;
            }
        }
    });
    return result;
}
/**
 * @title mean
 * @description 求平均值
 * @param list 要迭代的数组
 * @returns 平均值
 */
function mean(list) {
    return sum(list) / list.length;
}
/**
 * @title meanBy
 * @description 求平均数
 * @param list 要迭代的数组
 * @param itteratee 迭代函数 / key
 * @returns 平均数
 */
function meanBy(list, itteratee) {
    return list.reduce((total = 0, item) => {
        const itemNum = Number(useValue(itteratee)(item));
        if (isNumber(itemNum)) {
            return total + itemNum;
        }
        if (isNumber(total)) {
            return total;
        }
        return 0;
    }) / list.length;
}
/**
 * @title min
 * @description 求最小值
 * @param list 要迭代的数组
 * @returns 最小值
 */
function min(list) {
    return minBy(list);
}
/**
 * @title minBy
 * @description 求最小值
 * @param list 要迭代的数组
 * @param itteratee 迭代函数 / key
 * @returns 最小值
 */
function minBy(list, itteratee) {
    if (list.length === 0)
        return undefined;
    let result = undefined;
    let len = list.length;
    while (len--) {
        const val = Number(useValue(itteratee)(list[len]));
        if (isEffectNumber(val)) {
            result = list[len];
        }
    }
    return result;
}
/**
 * @title sum
 * @description 求和
 * @param list 要迭代的数组
 * @returns 总和
 * @version 2.2.3
 */
function sum(list = []) {
    return list.reduce((total = 0, item) => {
        const itemNum = Number(item);
        if (isNumber(itemNum)) {
            return total + itemNum;
        }
        if (isNumber(total)) {
            return total;
        }
        return 0;
    });
}
/**
 * @title sumBy
 * @description 求和
 * @param list 要迭代的数组
 * @param itteratee 迭代函数 / key
 * @returns 总和
 */
function sumBy(list, itteratee) {
    if (list.length === 0)
        return undefined;
    let total = 0;
    let len = list.length;
    while (len--) {
        const val = Number(useValue(itteratee)(list[len]));
        if (isEffectNumber(val)) {
            if (total === undefined)
                total = 0;
            total += val;
        }
    }
    return total;
}
/**
 * @title multiply
 * @description 相乘
 * @param augend number 乘数
 * @param addend number 被乘数
 * @returns 积
 */
function multiply(augend, addend) {
    return toNumber(toNumber(augend) * toNumber(addend));
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
 // 1
 ev.$emit('fn2')
 // 2
 ```
 */
class EventEmitter {
    $cache = {};
    $on(name, fn) {
        if (this.$cache[name]) {
            if (Array.isArray(this.$cache[name])) {
                this.$cache[name].push(fn);
            }
            else {
                this.$cache[name] = [fn];
            }
            return;
        }
        this.$cache[name] = [fn];
    }
    $off(name) {
        if (!this.$cache[name])
            return false;
        delete this.$cache[name];
        return true;
    }
    $once(name, ...args) {
        if (this.$cache && this.$cache[name]) {
            const result = this.$cache[name].map((i) => runFunc(i, ...args));
            delete this.$cache[name];
            return result;
        }
        return [];
    }
    // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
    $emit(name, ...args) {
        if (!this.$cache[name])
            return [];
        return this.$cache[name].map((i) => runFunc(i, ...args));
    }
}

exports.EventEmitter = EventEmitter;
exports.FileTypeMap = FileTypeMap;
exports.MapEntity = MapEntity;
exports.add = add;
exports.after = after;
exports.ary = ary;
exports.asyncBan = asyncBan;
exports.asyncThrowError = asyncThrowError;
exports.ban = ban;
exports.before = before;
exports.between = between;
exports.bind = bind;
exports.catchError = catchError;
exports.ceil = ceil;
exports.changeCase = changeCase;
exports.chunk = chunk;
exports.clamp = clamp;
exports.concat = concat;
exports.curry = curry;
exports.deadline = deadline;
exports.debounce = debounce;
exports.deepClone = deepClone;
exports.delay = delay;
exports.difference = difference;
exports.divide = divide;
exports.drop = drop;
exports.dropRight = dropRight;
exports.equal = equal;
exports.existKeys = existKeys;
exports.fill = fill;
exports.filter = filter;
exports.flat = flat;
exports.flip = flip;
exports.floor = floor;
exports.format = format;
exports.getDecimal = getDecimal;
exports.hasOwn = hasOwn;
exports.hide = hide;
exports.inRange = inRange;
exports.isArray = isArray;
exports.isAsyncFunction = isAsyncFunction;
exports.isBigInt = isBigInt;
exports.isBoolean = isBoolean;
exports.isClient = isClient;
exports.isDate = isDate;
exports.isEffectNumber = isEffectNumber;
exports.isEmpty = isEmpty;
exports.isEqual = isEqual;
exports.isExcelFile = isExcelFile;
exports.isFile = isFile;
exports.isFileExtension = isFileExtension;
exports.isFloat = isFloat;
exports.isFunction = isFunction;
exports.isIOS = isIOS;
exports.isImageFile = isImageFile;
exports.isJsonString = isJsonString;
exports.isMap = isMap;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isPdfFile = isPdfFile;
exports.isPromise = isPromise;
exports.isSameDate = isSameDate;
exports.isSet = isSet;
exports.isString = isString;
exports.isSymbol = isSymbol;
exports.isTime = isTime;
exports.isVideoFile = isVideoFile;
exports.isWindow = isWindow;
exports.isWordFile = isWordFile;
exports.likeDate = likeDate;
exports.likeFunction = likeFunction;
exports.likeNumber = likeNumber;
exports.logAsync = logAsync;
exports.logGroup = logGroup;
exports.loop = loop;
exports.loopArray = loopArray;
exports.loopArrays = loopArrays;
exports.loopGroup = loopGroup;
exports.loops = loops;
exports.matchValue = matchValue;
exports.max = max;
exports.maxBy = maxBy;
exports.mean = mean;
exports.meanBy = meanBy;
exports.min = min;
exports.minBy = minBy;
exports.multiply = multiply;
exports.omitRecord = omitRecord;
exports.once = once;
exports.pick = pick;
exports.random = random;
exports.replaces = replaces;
exports.reverseString = reverseString;
exports.round = round;
exports.runFunc = runFunc;
exports.select = select;
exports.selects = selects;
exports.serialize = serialize;
exports.spLength = spLength;
exports.stringify = stringify;
exports.sum = sum;
exports.sumBy = sumBy;
exports.throttle = throttle;
exports.throwError = throwError;
exports.timezone = timezone;
exports.toArray = toArray;
exports.toDate = toDate;
exports.toFloat = toFloat;
exports.toHEX = toHEX;
exports.toNumber = toNumber;
exports.toPathValue = toPathValue;
exports.toPromise = toPromise;
exports.toString = toString$2;
exports.toStrings = toStrings;
exports.toThousands = toThousands;
exports.type = type;
exports.types = types;
exports.unique = unique;
exports.zip = zip;
exports.zipObject = zipObject;
//# sourceMappingURL=index.js.map
