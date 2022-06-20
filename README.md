# 描述

- 相关方法的封装

## 更新日志

- 2.0.7 添加 equal 方法
- 2.0.6 优化number 方法
- 2.0.5 优化 time / format 方法
- 2.0.4 修复 unique 默认为整形数字, isFloat 结果有误
- 2.0.3 arrayUniqueItem 改名为unique
- 2.0.2 优化 类型判断
- 2.0.1 修改 package.json 配置
- 2.0.0  
  - 去除包的方法组名称
  - 修改方法的导出方法
  - 修改许多方法
  - 不与老版本兼容
  - 移除农历方法, 若想使用例外安装rh-lunar
- 1.0.1  使用rollup来打包, 其他功能使用均不变
- 1.0.0
  - 取消`RH`对象
  - 修改包的方法名称, 将原有的`[_+名称]` 改为 `[r+首字母大小的名称]`
  - 完善使用文档

## 使用

```shell
npm install rh-js-methods
```

```js
import { filter } from 'rh-js-methods'
```

<div class="exploded-line" />
<hr/>

## array

### `filter`

- `description` 单层过滤
- `param` `list` `any[]` 待过滤数组
- `param` `filterConditions` { `[key:string]:` `any` | `RegExp` } 过滤条件
- `param` `retainNotObject` 是否保留非对象项
- `returns` `any[]`

### `isArray`

- `description` 是否为数组
- `param` `value` `any`
- `returns` `boolean`

### `pick`

- `description` 从数组中取任意 一个 元素
- `param` `any[]` `list`
- `returns` 数组中任意一个

### `unique`

- `description` 去除数组重复项
- `param` `any[]` `list` 待过滤数组
- `returns` `any[]`

### `chunk`

- `description`  通过 `size` 切割数组
- `param` `list` `any[]`
- `param` `size` `number` 切割点索引
- `returns` [ [切割点前数据], [切割点后数据] ]

### `concat`

- `description` 连接多个数组
- `params` `...list` `any[][]` 多个数组
- `returns` `any[]`

### `drop`

- `description` 去除前`n`个元素
- `param` `any[]` `list` 数组
- `param` `number` `n` 要去除元素个数
- `returns` `any[]` `list` 剩余切片

### `dropRight`

- `description` 从右往左删除的指定个数
- `param` `list` 要处理的数组
- `param` `n` 需要删除的元素数量 [=`1]`

### `fill`

- `description` 在原有数组上改变, 修改指定位置的值
- `param` `array` 待填充改变的数组
- `param` `value` 填充值
- `param` `start` 开始位置
- `param` `end` 结束位置(不包括, 默认`array.length)`
- `returns`

### `difference`

- `description` 过滤数组
- `param` `list` 待过滤的数组
- `param` `...filterConditions` 过滤使用的条件
- `returns` 过滤后的数组`(new)`

### `select`

- `description` 指定范围长度 来随机选择数组元素
- `param` `list:` `any[]`
- `param` `min:` `number`
- `param` `max:` `number`
- `returns` `any[]`

### `selects`

- `description` 选择数组其中一项
- `param` `list` `any[]` 待选择数组
- `param` `index` `?number` 指定选择索引
- `returns` 选择项

<hr/>

## function

### `isArray`

- `description` 是否为数组
- `param` `value` `any`
- `returns` `boolean`

### `once`

- `description`  `fn` 方法只会执行一次
- `param` `fn` 指定值运行一次的方法
- `returns` 返回封装后的方法

### `throttle`

- `description` 节流: 用于限制函数触发频率, 每个`delay`时间间隔，最多只能执行函数一次
- `param` `fn` `function` 待处理函数
- `param` `interval` `number` 间隔
- `returns` `func`

### `debounce`

- `description`
  - 防抖:  时间内只会执行一次 可以减少函数触发的频率
  - 当函数触发时，使用一个定时器延迟执行操作。
  - 当函数被再次触发时，清除已设置的定时器，重新设置定时器。
  - 如果上一次的延迟操作还未执行，则会被清除。
- `param` `fn` `function`
- `param` `interval` `number`
- `returns`

### `after`

- `description` 调用`n`次后才触发`func`
- `param` `n` 调用后多少次才执行
- `param` `func` 限定的函数
- `returns` 新的限定函数

### `ary`

- `description` 调用`func`最多接受`n`个参数
- `param` `func` 限定函数
- `param` `n` 限制参数数量
- `returns` 新的覆盖函数

### `before`

- `description` 调用`n`次后，再调用就会返回最后一次调用的结果
- `param` `n` 超过`n`次不再调用
- `param` `func` 限定函数
- `returns` 新的限定函数

### `bind`

- `description` `thisArg`绑定`func`的`this`，并且`func`会接收`partials`附加参数
- `param` `func` 绑定的函数
- `param` `thisArg` 绑定的对象
- `param` `partials` 附加的部分参数
- `returns` 新的绑定函数

### `curry`

- `description` 柯里化
- `param` `func` 待柯里化函数
- `param` `len` 待柯里化参数个数
- `returns` 柯里化函数

### `delay`

- `param` `func` 指定函数
- `param` `delayTime` 延迟时间
- `param` `args` 传输参数
- `returns` `func`执行结果`(Promise)`

### `flip`

- `param` `func` 要翻转参数的函数
- `param` `args` 反转参数
- `returns`

<hr/>

## math

- 无限大（小）当做 `js` `Number` 的最大（小）值[主要处理计算异常的问题, 二期再加入大位数处理]
- 二期再加入大位数计算

### `countingMethod`

- `description` 将数字装换成需要装换的数据格式`(k`, `m`, `g`, `t`, `p`, `e`, `z`, `y`, `b)`
- `param` `num` `(number|string)` 待转换的数子 `(<binary^` `9)`
- `param` `binary` `(number)` 进制 `(default:1024)`
- `returns` `(number)`

### `add`

- `description` 两数求和
- `param` `augend` 加数
- `param` `addend` 被加数
- `returns` 和 ( 不会超过数字的边界值 )

### `ceil`

- `description` 向上取整的值(没有对`number`边界值`[Infinity`值处理`])`
- `param` `num` 要向上舍入的值
- `param` `precision` 精度
- `returns`

### `divide`

- `description` 相除
- `param` `dividend` 除数
- `param` `divisor` 被除数
- `returns` 商

### `floor`

- `description` 向下取整(没有对`number`边界值`[Infinity`值处理`])`
- `param` `num` 待向下舍入的值
- `param` `precision` 精度
- `returns` 向下取整

### `max`

- `description` 求最大值(只会判断有效值)
- `param` `list` 数组
- `returns` 最大值

### `maxBy`

- `description` 求最大值
- `param` `list` 要迭代数组
- `param` `itteratee` 迭代函数 / `key`
- `returns` 最大值

### `mean`

- `description` 求平均值
- `param` `list` 要迭代的数组
- `returns` 平均值

### `meanBy`

- `description` 求平均数
- `param` `list` 要迭代的数组
- `param` `itteratee` 迭代函数 / `key`
- `returns` 平均数

### `min`

- `description` 求最小值
- `param` `list` 要迭代的数组
- `returns` 最小值

### `minBy`

- `description` 求最小值
- `param` `list` 要迭代的数组
- `param` `itteratee` 迭代函数 / `key`
- `returns` 最小值

### `sum`

- `description` 求和
- `param` `list` 要迭代的数组
- `returns` 总和

### `sumBy`

- `description` 求和
- `param` `list` 要迭代的数组
- `param` `itteratee` 迭代函数 / `key`
- `returns` 总和

### `multiply`

- `description` 相乘
- `param` `augend` 乘数
- `param` `addend` 被乘数
- `returns` 积

### `round`

- `description` 四舍五入
- `param` `num` 要四舍五入的数
- `param` `precision` 精度
- `returns` 四舍五入的数字

<hr/>

## number

### `spLength`

- `description` 指定长度
- `param` `value` `any`
- `param` `min` = `0`
- `param` `max` `number`
- `returns` `string`

### `isNumber`

- `description` 是否为数字
- `param` `value` `any`
- `returns` `boolean`

### `isEffectNumber`

- `description` 是否为`js`的有效区间的数, 非`number`类型都为`false`
- `param` `num` `any`
- `returns` `boolean`

### `toNumber`

- `description` 将值转换为`Number`, 不可以正确装换的值, 均返回`0`
- `param` `value` `any` 待转换的数值
- `returns` `number`

### `isFloat`

- `description` 判断数是否为浮点型
- `param` `num` 待检测的数据类型
- `returns` `boolean`

### `clamp`

- `description` 限制在`lower`和`upper`之间
- `param` `num` 待限制的值
- `param` `lower` 下限
- `param` `upper` 上限
- `returns` 返回被限制的值

### `random`

- `description` 随机数
- `param` `lower` 下限
- `param` `upper` 上限
- `param` `floating` 是否返回浮点数

### `inRange`

- `description` 判断是否在该范围
- `param` `num` 要检查的值
- `param` `start`=`0` 开始范围
- `param` `end` 结束范围(包含该值)
- `returns` `boolean`

### `between`

- `description` 判断值是否在两值之间
- `param` `num:number` 待判断值
- `param` `start`=`0` 起始值
- `param` `end:number` 结束值(不包含该值)
- `returns` `boolean`

    - - `title` `round`
    - - `description`数字四舍五入，保留`n`位小数
    - - `param` `number` : `number` 待处理数值
    - - `param` `n` : `number` = `0` 四舍五入的位数
    - - `returns`

### `toThousands`

- `description` 数字每千位加逗号
- `param` `num` `string|number`
- `returns` `string`

<hr/>

## object

### `isObject`

- `description` 判断是否为`Oject`
- `param` `value`
- `returns` `boolean`

<hr/>

## string

### `replaces`

- `description` 同时定义多个`replace`的规则使用
- `param` `target` `string`
- `param` `regs` { `reg:` `RegExp` | `string`, `value:` `string` }`[]`
- `returns` `string`

### `isString`

- `description` 是否为字符串
- `param` `val` `any`
- `returns` `boolean`

<hr/>

## time

### `toDate`

- `description` 字符串装换成`Date`对象
- `param` `value` `string` 可以转换成时间的字符串
- `returns` `Date`

### `deadline`

- `description` 倒计时
- `param` `target:Date` 目标时间
- `param` `timeKey?:` '`year`' | '`mouth`' | '`day`' | '`hour`' | '`minute`' | '`second`' | '`timeStamp`'  指定倒计时单位
- `param` `now?:Date` 起始时间
- `returns` `number`

### `isDate`

- `description` 检查日期是否有效, 时间戳也为有效时间`(13`位)
- `param` `date:any` 待判断日期
- `returns` `boolean`

### `format`

- `description` 时间格式化
- `param` `time:number|string|Date`  时间
- `param` `pattern?:string` 格式
- `returns` `string` 格式化后的数据

| 符号 | 结果| 描述 |
| :----| :----| :----|
| `YYYY` | `2022` | `4`位数字的年份, 忽略大小写 |
| `YY` |  `1`-`14` | `2` 位数字的年份, 忽略大小写 |
| `M`  `MM` | `1`-`12` | 月份数字 |
| `D`  `DD` | `1`-`31` | 日数, 忽略大小写 |
| `H`  `HH` | `0`-`23` |  `24` 小时制 |
| `h`  `hh` | `1`-`12` | `12` 小时制 |
| `m`  `mm` | `0`-`59` | 分钟|
| `s`  `ss` | `0`-`59` | 秒钟|

### `isSameDate`

- `description` 时间是否相同, 时间类型支持`isDate`的类型
- `param` `timeA` 比较时间
- `param` `timeB` 被比较时间
- `returns` `boolean`

<hr/>

## util

### `colorToRGB`

- `description` `16`进制颜色转`RGB`/`RGBA`字符串
- `param` `val` `16`进制颜色
- `param` `?opa` 透明度
- `returns` `[string]`

### `changeCase`

- `description`  字符转换
  - `type:` `1:`首字母大写 `2`：首字母小写 `3`：大小写转换 `4`：全部大写 `5`：全部小写
- `param` `str` `string`
- `param` `type` `number`
- `returns`

### `logGroup`

- `description` 分组打印(简化`console.groupCollapsed)`
- `param` `name` 分组名称
- `param` `...args` 需要分组打印的结果
- `example` `logGroup(name[`, `...args])`

### `type`

- `description` 获取类型
- `param` `any` 参数
- `return` `string` 类型名称
