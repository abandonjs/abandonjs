import { Predicate, OneParamFn } from '../type'
import { type } from './type'
export { type }
export * from './matchValue'

/**
 * @title colorToRGB
 * @description 16进制颜色转RGB/RGBA字符串
 * @param val 16进制颜色
 * @param ?opa 透明度
 * @returns [string]
 */
export const colorToRGB = (val: string, opa?: number): string => {
  const pattern = /^(#?)[a-fA-F0-9]{6}$/
  if (!pattern.test(val)) return ''

  const isOpa: boolean = typeof opa == 'number'

  const v: string = val.replace(/#/, '')
  //如果有#号先去除#号
  const rgbArr: any[] = []
  let rgbStr = ''
  for (let i = 0; i < 3; i++) {
    const item = v.substring(i * 2, i * 2 + 2)
    const num = parseInt(item, 16)
    rgbArr.push(num)
  }
  rgbStr = `rgb${isOpa ? 'a' : ''}(${rgbArr.join()}${isOpa ? ',' + opa : ''})
`
  return rgbStr
}

/**
 * @title changeCase
 * @description  字符转换
 * --- type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
 * @param str string
 * @param type number
 * @returns
 */
export const changeCase = (str: string, type: number) => {
  type = type || 4
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word) {
        return (
          word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
        )
      })
    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return (
          word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
        )
      })
    case 3:
      return str
        .split('')
        .map(function (word) {
          if (/[a-z]/.test(word)) {
            return word.toUpperCase()
          } else {
            return word.toLowerCase()
          }
        })
        .join('')
    case 4:
      return str.toUpperCase()
    case 5:
      return str.toLowerCase()
    default:
      return str
  }
}

export function useArrayPredicate(
  predicate: Predicate
): OneParamFn<any, boolean> {
  const __type: string = type(predicate)
  switch (__type) {
    case 'Undefined':
      return (item: any): boolean => !!item
    case 'Array':
      return (item: any): boolean => {
        if (item === undefined || item === null) return false
        const predicateStr: string = JSON.stringify(predicate)
        for (const iitem of Object.entries(item)) {
          if (JSON.stringify(iitem) === predicateStr) return true
        }
        return false
      }
    case 'Object':
      return (item: object): boolean => {
        for (const key in predicate as object) {
          if (item[key] !== (predicate as object)[key]) return false
        }
        return true
      }
    case 'String':
      return (item: object): boolean => {
        if (predicate === undefined) return false
        return !!(item as object)[predicate as string]
      }
    case 'Function':
      return (item: any): boolean => {
        return (predicate as (val: any) => any)(item)
      }
    default:
      return (item: any): boolean => !!item
  }
}

/**
 * @title logGroup
 * @description 分组打印(简化console.groupCollapsed)
 * @param name 分组名称
 * @param ...args 需要分组打印的结果
 * @example logGroup(name[, ...args])
 */
export function logGroup(name = '', ...args: any[]) {
  console.groupCollapsed(`--- ${name} ---`)
  Array.isArray(args) &&
    args.length > 0 &&
    args.forEach((item: any) => {
      console.log(item)
    })
  console.groupEnd()
}



// 当做空值 undefined, null, NaN
export function isEmpty(value: any): boolean {
  if (value === undefined || value === null || isNaN(value)) return true
  return false
}

// 深拷贝
export function deepClone(obj: any, cache = new WeakMap()) {
  if (typeof obj !== 'object') return obj // 普通类型，直接返回
  if (obj === null) return obj
  if (cache.get(obj)) return cache.get(obj) // 防止循环引用，程序进入死循环
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)

  // 找到所属原型上的constructor，所属原型上的constructor指向当前对象的构造函数
  const cloneObj: any = new obj.constructor()
  cache.set(obj, cloneObj) // 缓存拷贝的对象，用于处理循环引用的情况
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], cache) // 递归拷贝
    }
  }
  return cloneObj
}

// 时间总线, 观察订阅模式
class EventEmitter {
  cache: { [key: string]: any } = {}
  constructor() {
    this.cache = {}
  }

  on(name: any, fn: any): void {
    if (this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }

  off(name: any, fn: any): void {
    const tasks = this.cache[name]
    if (tasks) {
      const index = tasks.findIndex((f) => f === fn || f.callback === fn)
      if (index >= 0) {
        tasks.splice(index, 1)
      }
    }
  }

  emit(name: any, once = false): void {
    if (this.cache && this.cache[name]) {
      // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
      const tasks: any = this.cache[name].slice()
      for (const fn of tasks) {
        fn()
      }
      if (once) {
        delete this.cache[name]
      }
    }
  }
}

export const eventBus: EventEmitter = new EventEmitter()

// 手机号码中间四位隐藏
export function hideMobile(mobile) {
  return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2")
}


// //  去除空格 type: 1-所有空格 2-前后空格 3-前空格 4-后空格
// export const trim = (str, type) => {
// 	type = type || 1
// 	switch (type) {
// 		case 1:
// 			return str.replace(/\s+/g, "");
// 		case 2:
// 			return str.replace(/(^\s*)|(\s*$)/g, "");
// 		case 3:
// 			return str.replace(/(^\s*)/g, "");
// 		case 4:
// 			return str.replace(/(\s*$)/g, "");
// 		default:
// 			return str;
// 	}
// }

// // 数字转换为大写金额
// export const changeToChinese = (Num) => {
// 	//判断如果传递进来的不是字符的话转换为字符
// 	if (typeof Num == "number") {
// 		Num = new String(Num);
// 	};
// 	Num = Num.replace(/,/g, "")
// 	//替换tomoney()中的“,”
// 	Num = Num.replace(/ /g, "")
// 	//替换tomoney()中的空格
// 	Num = Num.replace(/￥/g, "")
// 	//替换掉可能出现的￥字符
// 	if (isNaN(Num)) {
// 		//验证输入的字符是否为数字
// 		//alert("请检查小写金额是否正确");
// 		return "";
// 	};
// 	//字符处理完毕后开始转换，采用前后两部分分别转换
// 	let part: string[] = String(Num).split(".");
// 	let newchar = "";
// 	//小数点前进行转化
// 	for (let i = part[0].length - 1; i >= 0; i--) {
// 		if (part[0].length > 10) {
// 			return "";
// 			//若数量超过拾亿单位，提示
// 		}
// 		let tmpnewchar = ""
// 		let perchar = part[0].charAt(i);
// 		switch (perchar) {
// 			case "0":
// 				tmpnewchar = "零" + tmpnewchar;
// 				break;
// 			case "1":
// 				tmpnewchar = "壹" + tmpnewchar;
// 				break;
// 			case "2":
// 				tmpnewchar = "贰" + tmpnewchar;
// 				break;
// 			case "3":
// 				tmpnewchar = "叁" + tmpnewchar;
// 				break;
// 			case "4": tmpnewchar = "肆" + tmpnewchar;
// 				break;
// 			case "5": tmpnewchar = "伍" + tmpnewchar;
// 				break;
// 			case "6": tmpnewchar = "陆" + tmpnewchar;
// 				break;
// 			case "7": tmpnewchar = "柒" + tmpnewchar;
// 				break;
// 			case "8": tmpnewchar = "捌" + tmpnewchar;
// 				break;
// 			case "9": tmpnewchar = "玖" + tmpnewchar;
// 				break;
// 		}
// 		switch (part[0].length - i - 1) {
// 			case 0:
// 				tmpnewchar = tmpnewchar + "元";
// 				break;
// 			case 1:
// 				if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
// 				break;
// 			case 2:
// 				if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
// 				break;
// 			case 3:
// 				if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
// 				break;
// 			case 4:
// 				tmpnewchar = tmpnewchar + "万";
// 				break;
// 			case 5:
// 				if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
// 				break;
// 			case 6:
// 				if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
// 				break;
// 			case 7:
// 				if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
// 				break;
// 			case 8:
// 				tmpnewchar = tmpnewchar + "亿";
// 				break;
// 			case 9:
// 				tmpnewchar = tmpnewchar + "拾";
// 				break;
// 		}
// 		let newchar = tmpnewchar + newchar;
// 	}
// 	//小数点之后进行转化
// 	if (Num.indexOf(".") != -1) {
// 		if (part[1].length > 2) {
// // alert("小数点之后只能保留两位,系统将自动截断"
// );
// part[1] = part[1].substr(0, 2) }
// for (i = 0; i < part[1].length; i++) {
// 	tmpnewchar = "" perchar = part[1].charAt(i)
// 	switch (perchar) {
// 		case "0":
// 			tmpnewchar = "零" + tmpnewchar;
// 			break;
// 		case "1":
// 			tmpnewchar = "壹" + tmpnewchar;
// 			break;
// 		case "2":
// 			tmpnewchar = "贰" + tmpnewchar;
// 			break;
// 		case "3":
// 			tmpnewchar = "叁" + tmpnewchar;
// 			break;
// 		case "4":
// 			tmpnewchar = "肆" + tmpnewchar;
// 			break;
// 		case "5":
// 			tmpnewchar = "伍" + tmpnewchar;
// 			break;
// 		case "6":
// 			tmpnewchar = "陆" + tmpnewchar;
// 			break;
// 		case "7": tmpnewchar = "柒" + tmpnewchar;
// 			break;

// 		case "8":
// 			tmpnewchar = "捌" + tmpnewchar;
// 			break;
// 		case "9":
// 			tmpnewchar = "玖" + tmpnewchar;
// 			break;
// 	}
// 	if (i == 0) tmpnewchar = tmpnewchar + "角";
// 	if (i == 1) tmpnewchar = tmpnewchar + "分";
// 	newchar = newchar + tmpnewchar;
// }
// }
// //替换所有无用汉字
// while (newchar.search("零零") != -1)
// 	newchar = newchar.replace("零零", "零");
// newchar = newchar.replace("零亿", "亿");
// newchar = newchar.replace("亿万", "亿");
// newchar = newchar.replace("零万", "万");
// newchar = newchar.replace("零元", "元");
// newchar = newchar.replace("零角", "");
// newchar = newchar.replace("零分", "");
// if (newchar.charAt(newchar.length - 1) == "元") {
// 	newchar = newchar + "整"
// }
// return newchar;
// }

// // 将阿拉伯数字翻译成中文大写数字
// export function numberToChinese(num: string): string {
// 	let AA: string[] = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
// 	let BB: string[] = new Array("", "十", "百", "仟", "萬", "億", "点", "");
// 	let a: string[] = ("" + num).replace(/(^0*)/g, "").split("."),
// 		k: number = 0,
// 		re: stirng = "";

// 	for (let i: number = a[0].length - 1; i >= 0; i--) {
// 		switch (k) {
// 			case 0: re = BB[7] + re;
// 				break;
// 			case 4:
// 				if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$").test(a[0])) re = BB[4] + re;
// 				break;
// 			case 8:
// 				re = BB[5] + re; BB[7] = BB[5]; k = 0;
// 				break;
// 		}
// 		if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re;
// 		if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re; k++;
// 	}
// 	if (a.length > 1) {
// 		re += BB[6];
// 		for (let i: number = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)];
// 	}
// 	if (re == '一十') re = "十";
// 	if (re.match(/^一/) && re.length == 3) re = re.replace("一", ""); return re;
// }

// export function checkStr(str: string, type: stirng): boolean {
// 	switch (type) {
// 		case 'phone':
// 			//手机号码
// 			return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
// 		case 'tel':
// 			//座机
// 			return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
// 		case 'card':
// 			//身份证
// 			return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
// 		case 'pwd':
// 			//密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
// 			return /^[a-zA-Z]\w{5,17}$/.test(str)
// 		case 'postal':
// 			//邮政编码
// 			return /[1-9]\d{5}(?!\d)/.test(str);
// 		case 'QQ':
// 			//QQ号
// 			return /^[1-9][0-9]{4,9}$/.test(str);
// 		case 'email':
// 			//邮箱
// 			return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
// 		case 'money':
// 			//金额(小数点2位)
// 			return /^\d*(?:\.\d{0,2})?$/.test(str);
// 		case 'URL':
// 			//网址
// 			return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
// 		case 'IP':
// 			//IP
// 			return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
// 		case 'date':
// 			//日期时间
// 			return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str) case 'number':
// 			//数字
// 			return /^[0-9]$/.test(str);
// 		case 'english':
// 			//英文
// 			return /^[a-zA-Z]+$/.test(str);
// 		case 'chinese':
// 			//中文
// 			return /^[\\u4E00-\\u9FA5]+$/.test(str);
// 		case 'lower':
// 			//小写
// 			return /^[a-z]+$/.test(str);
// 		case 'upper':
// 			//大写
// 			return /^[A-Z]+$/.test(str);
// 		case 'HTML':
// 			//HTML标记
// 			return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
// 		default:
// 			return true;
// 	}
// }

// // 判断是否为身份证
// export function isCardID(sId: string): boolean {
// 	if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
// 		console.log('你输入的身份证长度或格式错误')
// 		return false
// 	}
// 	//身份证城市
// 	let aCity: any = {
// 		11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古",
// 		21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏",
// 		33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东",
// 		41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西",
// 		46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南",
// 		4: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏",
// 		65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
// 	};
// 	if (!aCity[parseInt(sId.substr(0, 2))]) {
// 		console.log('你的身份证地区非法')
// 		return false
// 	}
// 	// 出生日期验证
// 	let sBirthday = (sId.substr(6, 4)
// 		+ "-" + Number(sId.substr(10, 2))
// 		+ "-" + Number(sId.substr(12, 2))).replace(/-/g, "/")
// 	let d: Date = new Date(sBirthday)

// 	if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
// 		console.log('身份证上的出生日期非法')
// 		return false
// 	}
// 	// 身份证号码校验
// 	let sum: number = 0, weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
// 		codes: string = "10X98765432"
// 	for (let i: number = 0; i < sId.length - 1; i++) {
// 		sum += sId[i] * weights[i];
// 	}
// 	let last: string = codes[sum % 11];
// 	//计算出来的最后一位身份证号码
// 	if (sId[sId.length - 1] != last) {
// 		console.log('你输入的身份证号非法')
// 		return false
// 	}
// 	return true
// }