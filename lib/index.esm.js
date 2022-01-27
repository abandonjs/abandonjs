function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var colorToRGB = function colorToRGB(val, opa) {
  var pattern = /^(#?)[a-fA-F0-9]{6}$/;
  if (!pattern.test(val)) return '';
  var isOpa = typeof opa == 'number';
  var v = val.replace(/#/, '');
  var rgbArr = [];
  var rgbStr = '';

  for (var i = 0; i < 3; i++) {
    var item = v.substring(i * 2, i * 2 + 2);
    var num = parseInt(item, 16);
    rgbArr.push(num);
  }

  rgbStr = "rgb".concat(isOpa ? 'a' : '', "(").concat(rgbArr.join()).concat(isOpa ? ',' + opa : '', ")\n");
  return rgbStr;
};
var checkPwd = function checkPwd(pwd) {
  var Lv = 0;
  if (pwd.length < 6) return Lv;
  if (/[0-9]/.test(pwd)) Lv++;
  if (/[a-z]/.test(pwd)) Lv++;
  if (/[A-Z]/.test(pwd)) Lv++;
  if (/[.|-|_]/.test(pwd)) Lv++;
  return Lv;
};
var changeCase = function changeCase(str, type) {
  type = type || 4;

  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
      });

    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
      });

    case 3:
      return str.split('').map(function (word) {
        if (/[a-z]/.test(word)) {
          return word.toUpperCase();
        } else {
          return word.toLowerCase();
        }
      }).join('');

    case 4:
      return str.toUpperCase();

    case 5:
      return str.toLowerCase();

    default:
      return str;
  }
};
function defaultValue(key, value) {
  try {
    if (key === undefined) return value;
    return key;
  } catch (error) {
    return value;
  }
}
function useArrayPredicate(predicate) {
  var __type = type(predicate);

  switch (__type) {
    case 'Undefined':
      return function (item) {
        return !!item;
      };

    case 'Array':
      return function (item) {
        if (item === undefined || item === null) return false;
        var predicateStr = JSON.stringify(predicate);

        for (var _i = 0, _Object$entries = Object.entries(item); _i < _Object$entries.length; _i++) {
          var iitem = _Object$entries[_i];
          if (JSON.stringify(iitem) === predicateStr) return true;
        }

        return false;
      };

    case 'Object':
      return function (item) {
        for (var key in predicate) {
          if (item[key] !== predicate[key]) return false;
        }

        return true;
      };

    case 'String':
      return function (item) {
        if (predicate === undefined) return false;
        return !!item[predicate];
      };

    case 'Function':
      return function (item) {
        return predicate(item);
      };

    default:
      return function (item) {
        return !!item;
      };
  }
}
function logGroup() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  console.groupCollapsed("--- ".concat(name, " ---"));

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  Array.isArray(args) && args.length > 0 && args.forEach(function (item) {
    console.log(item);
  });
  console.groupEnd();
}
function type(param) {
  var result = Object.prototype.toString.call(param).match(/\[object (\w+)\]/)[1];
  if (result === 'Number' && isNaN(param)) return 'NaN';
  return result;
}
function isEmpty(value) {
  if (value === undefined || value === null || isNaN(value)) return true;
  return false;
}
function deepClone(obj) {
  var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new WeakMap();
  if (_typeof(obj) !== 'object') return obj;
  if (obj === null) return obj;
  if (cache.get(obj)) return cache.get(obj);
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  var cloneObj = new obj.constructor();
  cache.set(obj, cloneObj);

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], cache);
    }
  }

  return cloneObj;
}

var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    _defineProperty(this, "cache", {});

    this.cache = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(name, fn) {
      if (this.cache[name]) {
        this.cache[name].push(fn);
      } else {
        this.cache[name] = [fn];
      }
    }
  }, {
    key: "off",
    value: function off(name, fn) {
      var tasks = this.cache[name];

      if (tasks) {
        var index = tasks.findIndex(function (f) {
          return f === fn || f.callback === fn;
        });

        if (index >= 0) {
          tasks.splice(index, 1);
        }
      }
    }
  }, {
    key: "emit",
    value: function emit(name) {
      var once = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.cache && this.cache[name]) {
        var tasks = this.cache[name].slice();

        var _iterator = _createForOfIteratorHelper(tasks),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var fn = _step.value;
            fn();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (once) {
          delete this.cache[name];
        }
      }
    }
  }]);

  return EventEmitter;
}();

var eventBus = new EventEmitter();

var index$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  colorToRGB: colorToRGB,
  checkPwd: checkPwd,
  changeCase: changeCase,
  defaultValue: defaultValue,
  useArrayPredicate: useArrayPredicate,
  logGroup: logGroup,
  type: type,
  isEmpty: isEmpty,
  deepClone: deepClone,
  eventBus: eventBus
});

var MAX_VALUES_NUMBER = 1.7976931348623157e+308;
var MIN_VALUES_NUMBER = -1.7976931348623157e+308;
var INFINITY = Infinity;

function isEffectNumber(num) {
  if (type(num) === 'Number') {
    if (num <= MAX_VALUES_NUMBER || num <= INFINITY) return true;
    if (num >= -MIN_VALUES_NUMBER || num >= -INFINITY) return true;
    return false;
  }

  return false;
}
var toNumber = function toNumber(value) {
  if (type(value) === 'Number') {
    if (value === INFINITY) return MAX_VALUES_NUMBER;
    if (value === -INFINITY) return MIN_VALUES_NUMBER;
    return value;
  }

  return +value;
};
var isNumber = function isNumber(value) {
  return typeof value !== 'undefined' && !isNaN(Number(value));
};
function isFloat(num) {
  return num - num % 1 !== 0;
}
function randomNumByRange(min, max) {
  switch (arguments.length) {
    case 1:
      return parseInt(String(Math.random() * min + 1));

    case 2:
      return parseInt(String(Math.random() * (max - min + 1) + min));

    default:
      return 0;
  }
}
function clamp(num, lower, upper) {
  if (lower === undefined) lower = -INFINITY;
  if (upper === undefined) upper = INFINITY;
  if (num < lower) return lower;
  if (num > upper) return upper;
  return num;
}
function inRange(num, start, end) {
  if (start === undefined) start = 0;
  if (end === undefined) end = INFINITY;

  if (arguments.length === 2) {
    end = start;
    start = 0;
  }

  if (num > end) return false;
  if (num < start) return false;
  return true;
}
function random(lower, upper, floating) {
  lower === undefined && (lower = 0);
  upper === undefined && (upper = 1);
  floating === undefined && (floating = false);

  if (arguments.length === 1) {
    upper = arguments[0];
    lower = 0;
  }

  if (upper === undefined) return Math.random();

  if (type(arguments[arguments.length - 1]) === 'Boolean' || isFloat(upper) || isFloat(lower)) {
    floating = arguments[arguments.length - 1];
  }

  var result = lower + Math.random() * (upper - lower);
  if (floating) return result;
  return Math.ceil(result);
}
function between(value, start, end) {
  return value >= start && value < end;
}

var index$8 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  isEffectNumber: isEffectNumber,
  toNumber: toNumber,
  isNumber: isNumber,
  isFloat: isFloat,
  randomNumByRange: randomNumByRange,
  clamp: clamp,
  inRange: inRange,
  random: random,
  between: between
});

function useNumberId(len) {
  var temp_id = Math.random().toString().slice(2);
  len -= temp_id.length;

  if (len < 0) {
    return temp_id.slice(-len);
  }

  return "".concat(temp_id + useNumberId(len));
}

function id(length) {
  return useNumberId(clamp(defaultValue(length, 10), 1));
}
function uuid(template) {
  var val = template || 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx';
  var d = new Date().getTime();
  return val.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
}
function uniqueId(length, prefix) {
  prefix = defaultValue(prefix, '');
  length = defaultValue(length, 10);

  if (arguments.length > 0) {
    if (type(arguments[0]) === 'String') {
      prefix = arguments[0];
      length = 10;
    }

    console.log({
      arguments: arguments
    });
  }

  return "".concat(prefix + id(length));
}
function identity() {
  return arguments.length <= 0 ? undefined : arguments[0];
}

var index$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  id: id,
  uuid: uuid,
  uniqueId: uniqueId,
  identity: identity
});

function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}
function objectInclude(obj, keys) {
  var result = [];
  var objKeys = Object.keys(obj);
  if (!Array.isArray(keys)) keys = [keys];
  keys.forEach(function (item) {
    if (objKeys.includes(item)) {
      result.push(true);
    } else {
      result.push(false);
    }
  });
  if (result.length === 0) return false;
  if (result.length === 1) return result[0];
  return result;
}
function assign() {
  var result = {};

  for (var key in arguments) {
    result = Object.assign(result, _objectSpread2({}, arguments[key]));
  }

  return result;
}
function assignIn() {
  var result = {};

  for (var key in arguments) {
    result = Object.assign(result, _objectSpread2({}, arguments[key]));
  }

  return result;
}

var index$6 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  isObject: isObject,
  objectInclude: objectInclude,
  assign: assign,
  assignIn: assignIn
});

function strReverse(str) {
  return str.split('').reverse().join('');
}
function isString(val) {
  return Object.prototype.toString.call(val) === '[object String]';
}
function isJsonString(val) {
  if (typeof val === 'string') {
    try {
      var obj = JSON.parse(val);
      return isObject(obj) && obj;
    } catch (e) {
      return false;
    }
  }

  return false;
}
function BaseToString(value) {
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return "".concat(value.map(BaseToString));
  var result = "".concat(value);
  return (result === '0' && 1 / value === -Infinity ? '-0' : result) || '';
}
function allToString(value) {
  if (isEmpty(value)) return '';
  return String(value);
}
function isEmptyToEmptyString(value) {
  if (isEmpty(value)) return '';
  return value;
}

var index$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  strReverse: strReverse,
  isString: isString,
  isJsonString: isJsonString,
  BaseToString: BaseToString,
  allToString: allToString,
  isEmptyToEmptyString: isEmptyToEmptyString
});

var lunarInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0];
var zodiacs = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
var Gan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
var Zhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
var weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var sTermInfo = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758];
var solarTerm = ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'];
var leapYear = ['平年', '闰年'];

var now = new Date();
var GY = now.getFullYear();
var GM = now.getMonth();
var GD = now.getDate();
var year = now.getFullYear();

var _month = now.getMonth() + 1;

var _date = now.getDate();

var _hours = now.getHours();

var _minutes = now.getMinutes();

var _seconds = now.getSeconds();

var month = _month.toString().padStart(2, '0');

var date = _date.toString().padStart(2, '0');

var hours = _hours.toString().padStart(2, '0');

var minutes = _minutes.toString().padStart(2, '0');

var seconds = _seconds.toString().padStart(2, '0');

function isLeapYear() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getFullYear();
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

function cyclical(num) {
  return Gan[num % 10] + Zhi[num % 12];
}

function lYearDays(year) {
  var i,
      sum = 348;

  for (i = 0x8000; i > 0x8; i >>= 1) {
    sum += lunarInfo[year - 1900] & i ? 1 : 0;
  }

  return sum + leapDays(year);
}

function leapDays(year) {
  if (leapMonth(year)) {
    return lunarInfo[year - 1900] & 0x10000 ? 30 : 29;
  } else {
    return 0;
  }
}

function leapMonth(year) {
  if (year === undefined) year = new Date().getFullYear();
  return lunarInfo[year - 1900] & 0xf;
}

function monthDays(year, month) {
  if (year === undefined) year = new Date().getFullYear();
  if (month === undefined) month = new Date().getMonth() + 1;
  return lunarInfo[year - 1900] & 0x10000 >> month ? 30 : 29;
}

function Lunar(objDate) {
  var i,
      temp = 0;
  var baseDate = new Date(1900, 0, 31);
  var offset = Math.floor((objDate.getTime() - baseDate.getTime()) / 86400000);
  var dayCyl = offset + 40;
  var monCyl = 14;

  for (i = 1900; i < 2050 && offset > 0; i++) {
    temp = lYearDays(i);
    offset -= temp;
    monCyl += 12;
  }

  if (offset < 0) {
    offset += temp;
    i--;
    monCyl -= 12;
  }

  var year = i;
  var yearCyl = i - 1864;
  var leap = leapMonth(i);
  var isLeap = false;

  for (i = 1; i < 13 && offset > 0; i++) {
    if (leap > 0 && i === leap + 1 && isLeap === false) {
      --i;
      isLeap = true;
      temp = leapDays(year);
    } else {
      temp = monthDays(year, i);
    }

    isLeap === true && i === leap + 1 && (isLeap = false);
    offset -= temp;
    isLeap === false && monCyl++;
  }

  if (offset === 0 && leap > 0 && i === leap + 1) if (isLeap) {
    isLeap = false;
  } else {
    isLeap = true;
    --i;
    --monCyl;
  }

  if (offset < 0) {
    offset += temp;
    --i;
    --monCyl;
  }

  var month = i;
  var day = offset + 1;
  return {
    year: year,
    month: month,
    day: day,
    isLeap: isLeap,
    leap: leap,
    yearCyl: yearCyl,
    dayCyl: dayCyl,
    monCyl: monCyl
  };
}

function cDay(m, d) {
  var nStr1 = ['日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  var nStr2 = ['初', '十', '廿', '卅', ''];
  var lunarMonthCn;
  var lunarDayCn;

  if (m > 10) {
    lunarMonthCn = '十' + nStr1[m - 10];
  } else {
    lunarMonthCn = nStr1[m];
  }

  lunarMonthCn += '月';

  switch (d) {
    case 10:
      lunarDayCn = '初十';
      break;

    case 20:
      lunarDayCn = '二十';
      break;

    case 30:
      lunarDayCn = '三十';
      break;

    default:
      lunarDayCn = nStr2[Math.floor(d / 10)] + nStr1[d % 10];
  }

  return {
    lunarMonthCn: lunarMonthCn,
    lunarDayCn: lunarDayCn
  };
}

function getSolarTerm() {
  var solarTerms = '';
  var tmp1 = new Date(31556925974.7 * (GY - 1900) + sTermInfo[GM * 2 + 1] * 60000 + Date.UTC(1900, 0, 6, 2, 5));
  var tmp2 = tmp1.getUTCDate();
  if (tmp2 === GD) solarTerms = solarTerm[GM * 2 + 1];
  tmp1 = new Date(31556925974.7 * (GY - 1900) + sTermInfo[GM * 2] * 60000 + Date.UTC(1900, 0, 6, 2, 5));
  tmp2 = tmp1.getUTCDate();
  if (tmp2 === GD) solarTerms = solarTerm[GM * 2];
  return solarTerms;
}

var sDObj = new Date(GY, GM, GD);
var lDObj = Lunar(sDObj);
var calendar = {
  gregorianYear: year,
  gregorianMonth: month,
  gregorianDay: date,
  weekday: weekday[now.getDay()],
  hours: hours,
  minutes: minutes,
  seconds: seconds,
  lunarYear: lDObj.year,
  lunarMonth: lDObj.month,
  lunarDay: lDObj.day,
  zodiacYear: zodiacs[(GY - 4) % 12],
  lunarYearCn: cyclical(GY - 1900 + 36),
  lunarMonthCn: cDay(lDObj.month, lDObj.day).lunarMonthCn,
  lunarDayCn: cDay(lDObj.month, lDObj.day).lunarDayCn,
  solarTerm: getSolarTerm(),
  leapMonth: leapMonth(new Date().getFullYear()),
  getLeapMonth: leapMonth,
  leapYear: isLeapYear() ? leapYear[1] : leapYear[0],
  isLeapYear: isLeapYear
};

function dateInterval(date1, date2) {
  return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
}
function isDateValid(val) {
  return !Number.isNaN(new Date(val).valueOf());
}

var index$4 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  calendar: calendar,
  dateInterval: dateInterval,
  isDateValid: isDateValid
});

function initMultArray(unit, dimension) {
  if (!dimension) return [unit];
  if (!unit) unit = undefined;
  var dimArr = dimension.split('&').map(function (item) {
    return Number(item) || 1;
  });

  if (dimArr.length < 2) {
    return Array(dimArr[0]).fill(unit);
  }

  var depth = dimArr.length;
  var arrItem = Array(dimArr[--depth]).fill(unit);

  do {
    var tmp_arrItem = JSON.parse(JSON.stringify(arrItem)) || [];
    arrItem = Array(dimArr[--depth]).fill(tmp_arrItem);
  } while (depth);

  return arrItem;
}

function arrayFilterByObject(list, filter) {
  var retainNotObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!filter || list.length === 0) return list;
  var regObj = {};

  for (var key in filter) {
    regObj[key] = new RegExp(filter[key], 'i');
  }

  return list.filter(function (item) {
    if (!isObject(item)) return retainNotObject;

    for (var _key in regObj) {
      if (isObject(item[_key])) return false;
      if (!regObj[_key].test(String(item[_key]))) return false;
    }

    return true;
  });
}
function compact(list) {
  return list.filter(function (item) {
    return !!item;
  });
}

function arraySelectItems(list, min, max) {
  var len = randomNumByRange(min, max > list.length ? list.length : max) || 0;
  var result = [];
  var index = 0;

  while (len--) {
    index = ~~(Math.random() * list.length);
    result.push(list[index]);
    list.splice(index, 1);
  }

  return result;
}
function arraySelectOne() {
  var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var index = arguments.length > 1 ? arguments[1] : undefined;

  if (index !== null && index !== undefined) {
    if (index > -1) return list[index];

    if (index < 0) {
      return list[list.length + index];
    }
  }

  return list[~~(Math.random() * list.length)];
}
function difference(list) {
  for (var _len = arguments.length, filterConditions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    filterConditions[_key - 1] = arguments[_key];
  }

  if (!list) return [];
  var result = list || [];
  if (!filterConditions) return list;

  var _ref = filterConditions || [],
      _ref2 = _toArray(_ref),
      allFilterConditions = _ref2.slice(0);

  allFilterConditions = concat.apply(void 0, _toConsumableArray(allFilterConditions));
  return result.filter(function (item) {
    return !allFilterConditions.includes(item);
  });
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}
function arrayUniqueItem(list) {
  return _toConsumableArray(new Set(list));
}
function chunk(list, size) {
  return [list.slice(0, size), list.slice(size)];
}
function concat() {
  var result = [];

  for (var _len = arguments.length, list = new Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  if (list && list.length > 0) {
    var len = list.length;

    while (len--) {
      if (Array.isArray(list[len])) {
        result = result.concat(list[len]);
      } else {
        result.push(list[len]);
      }
    }
  }

  return result;
}
function drop() {
  var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  while (n--) {
    if (list.length < 1) return [];
    list.shift();
  }

  return list;
}
function dropRight(list) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var len = list.length || 0;
  return list.splice(0, len - n);
}
function fill(array) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  end = defaultValue(end, defaultValue(array.length, 0));

  while (start < end) {
    array[start++] = value;
  }

  return array;
}
function findIndex(array, predicate) {
  var fromIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var len = array.length;
  var predicateFunc = useArrayPredicate(predicate);
  if (array.length === 0) return -1;

  do {
    if (predicateFunc(array[fromIndex])) return fromIndex;
  } while (fromIndex++ < len);

  return -1;
}
function findLastIndex(array, predicate, fromIndex) {
  var len = array.length;
  fromIndex = defaultValue(fromIndex, len - 1);
  var predicateFunc = useArrayPredicate(predicate);
  if (array.length === 0) return -1;

  do {
    if (predicateFunc(array[fromIndex])) return fromIndex;
  } while (fromIndex--);

  return -1;
}

var index$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  initMultArray: initMultArray,
  arrayFilterByObject: arrayFilterByObject,
  difference: difference,
  compact: compact,
  arraySelectItems: arraySelectItems,
  arraySelectOne: arraySelectOne,
  pick: pick,
  arrayUniqueItem: arrayUniqueItem,
  chunk: chunk,
  concat: concat,
  drop: drop,
  dropRight: dropRight,
  fill: fill,
  findIndex: findIndex,
  findLastIndex: findLastIndex
});

function once(fn) {
  var returnValue;
  var canRun = true;
  return function () {
    if (canRun) {
      returnValue = fn.apply(this, arguments);
      canRun = false;
    }

    return returnValue;
  };
}
function throttle(fn, interval) {
  var lastTime = 0;
  return function throttled() {
    var timeSinceLastExecution = Date.now() - lastTime;

    if (!lastTime || timeSinceLastExecution >= interval) {
      fn.apply(this, arguments);
      lastTime = Date.now();
    }
  };
}
function debounce(fn, interval) {
  var _arguments = arguments,
      _this = this;

  var timer = 0;

  var debounced = function debounced() {
    clearTimeout(timer);
    var args = _arguments;
    setTimeout(function () {
      fn.apply(_this, args);
    }, interval);
  };

  return debounced;
}
function after() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var func = arguments.length > 1 ? arguments[1] : undefined;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (--n < 0) return func(args);
    return;
  };
}
function ary(func, n) {
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return func.apply(void 0, _toConsumableArray(args.splice(0, n)));
  };
}
function before(n, func) {
  var lastResult = undefined;
  return function () {
    if (n-- > 0) {
      lastResult = func.apply(void 0, arguments);
    }

    return lastResult;
  };
}
function bind(func) {
  var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var _len3 = arguments.length, partials = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    partials[_key3 - 2] = arguments[_key3];
  }

  return function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return func.call.apply(func, [thisArg].concat([].concat(partials, args)));
  };
}
function curry(func, len) {
  var _args = [];

  var _resFn = function _resFn() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    _args = _args.concat(args);

    if (_args.length < len) {
      return _resFn;
    }

    return func.apply(void 0, _toConsumableArray(_args));
  };

  return _resFn;
}
function delay(func) {
  var delayTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  for (var _len6 = arguments.length, args = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    args[_key6 - 2] = arguments[_key6];
  }

  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(func.apply(void 0, args));
    }, delayTime);
  });
}
function flip(func) {
  return function () {
    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }

    return func.apply(void 0, _toConsumableArray(args.reverse()));
  };
}

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  once: once,
  throttle: throttle,
  debounce: debounce,
  after: after,
  ary: ary,
  before: before,
  bind: bind,
  curry: curry,
  delay: delay,
  flip: flip
});

var __binary = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'B'];
function countingMethod(num) {
  var binary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1024;
  var result = '';
  var tempNum = Number(num);
  if (num > Math.pow(binary, 9)) return '1024B';
  var index = 0;

  function translate(index) {
    var _index_num = tempNum % binary;

    tempNum = (tempNum - _index_num) / binary;
    if (_index_num > 0) result = _index_num + __binary[index] + result;
    if (tempNum < 1) return;
    translate(++index);
  }

  translate(index);
  return result;
}
function add(augend, addend) {
  return toNumber(augend) + toNumber(addend);
}
function ceil(num) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.ceil(num * toNumber(Math.pow(10, precision))) * toNumber(Math.pow(10, -precision));
}
function divide(dividend, divisor) {
  return toNumber(dividend) / toNumber(divisor);
}
function floor(num) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.floor(num * toNumber(Math.pow(10, precision))) * toNumber(Math.pow(10, -precision));
}
function max(list) {
  var maxValue = undefined;
  list.forEach(function (val) {
    var item = Number(val);

    if (isEffectNumber(item)) {
      if (maxValue === undefined) {
        maxValue = item;
      } else maxValue = item < maxValue ? maxValue : item;
    }
  });
  return maxValue;
}

var useValue = function useValue(itteratee) {
  var __type = type(itteratee);

  return function (val) {
    if (__type === 'String') return val[itteratee];
    if (__type === 'Function') return itteratee(val);
    return val;
  };
};

function maxBy(list, itteratee) {
  var _type = type(itteratee);

  if (_type === 'Undefined') {
    return max(list);
  }

  var maxValue = undefined;
  var result = undefined;
  var handleValue = useValue(itteratee);
  list.forEach(function (val) {
    var item = Number(handleValue(val));

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
function mean(list) {
  return meanBy(list);
}
function meanBy(list, itteratee) {
  var total = 0;
  var len = 0;
  var handleValue = useValue(itteratee);
  list.forEach(function (val) {
    var item = Number(handleValue(val));

    if (isEffectNumber(item)) {
      total += item;
      ++len;
    }
  });
  if (len === 0) return undefined;
  return total / len;
}
function min(list) {
  return minBy(list);
}
function minBy(list, itteratee) {
  if (list.length === 0) return undefined;
  var result = undefined;
  var len = list.length;
  var handleValue = useValue(itteratee);

  while (len--) {
    var val = Number(handleValue(list[len]));

    if (isEffectNumber(val)) {

      result = list[len];
    }
  }

  return result;
}
function sum(list) {
  return sumBy(list);
}
function sumBy(list, itteratee) {
  if (list.length === 0) return undefined;
  var total = undefined;
  var len = list.length;
  var handleValue = useValue(itteratee);

  while (len--) {
    var val = Number(handleValue(list[len]));

    if (isEffectNumber(val)) {
      if (total === undefined) total = 0;
      total += val;
    }
  }

  return total;
}
function multiply(augend, addend) {
  return toNumber(augend) * toNumber(addend);
}
function round(num, precision) {
  if (precision === undefined) precision = 0;
  return Math.round(num * toNumber(Math.pow(10, precision))) * toNumber(Math.pow(10, -precision));
}

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  countingMethod: countingMethod,
  add: add,
  ceil: ceil,
  divide: divide,
  floor: floor,
  max: max,
  maxBy: maxBy,
  mean: mean,
  meanBy: meanBy,
  min: min,
  minBy: minBy,
  sum: sum,
  sumBy: sumBy,
  multiply: multiply,
  round: round
});

function isCollection() {
  console.log('loading...');
}

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  isCollection: isCollection
});

export { index$3 as rArray, index as rCollection, index$2 as rFunction, index$1 as rMath, index$7 as rMethods, index$8 as rNumber, index$6 as rObject, index$5 as rString, index$4 as rTime, index$9 as rUtil };
