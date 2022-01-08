# 描述

> 参考 mock , lodash 库
> 本仓库主要是学习使用

------
------

## array

### initMultArray
>
> - description 生成多维数组
> - param unit 初始化单元
> - param dimension 多维指定 用&符号隔开
> - returns 多维数组

### difference
>
> - description 过滤数组
> - param list 待过滤的数组
> - param ...filterConditions 过滤使用的条件
> - returns 过滤后的数组(new)

> - description 去除前n个元素
> - param any[] list 数组
> - param number n 要去除元素个数
> - returns any[] list 剩余切片

### fill
>
> - description 在原有数组上改变, 修改指定位置的值
> - param array 待填充改变的数组
> - param value 填充值
> - param start 开始位置
> - param end 结束位置(不包括, 默认array.length)
> - returns

### findIndex(待完成)
>
> - description 通过 predicate 判断为真值的元素的索引值（index），而不是元素本身
> - param array 要搜索的数组
> - param predicate (Array|Function|Object|string): 这个函数会在每一次迭代调用
> - param fromIndex (number) 指定开始查找的下标
> - returns (number): 返回找到元素的 索引值（index），否则返回 - 1。

### findIndex(待完成)
>
> - description 通过 predicate 判断为真值的元素的索引值（index），而不是元素本身(倒序查找)
> - param array (Array): 要搜索的数组
> - param predicate (Array|Function|Object|string): 这个函数会在每一次迭代调用。
> - param fromIndex [fromIndex=array.length-1] (number): 指定开始查找的下标
> - returns (number): 返回找到元素的 索引值（index），否则返回 - 1。

## collection

## function

> - description 调用n次后才触发func
> - param n 调用后多少次才执行
> - param func 限定的函数
> - returns 新的限定函数

> - description 调用func最多接受n个参数
> - param func 限定函数
> - param n 限制参数数量
> - returns 新的覆盖函数

> - description 调用n次后，再调用就会返回最后一次调用的结果
> - param n 超过n次不再调用
> - param func 限定函数
> - returns 新的限定函数

> - description thisArg绑定func的this，并且func会接收partials附加参数
> - param func 绑定的函数
> - param thisArg 绑定的对象
> - param partials 附加的部分参数
> - returns 新的绑定函数

- (未完成，有问题)
>
> - param object 对象
> - param key
> - param partials
> - returns

-
>
> - param func 待柯里化函数
> - param len 待柯里化参数个数
> - returns 柯里化函数

> - param func 指定函数
> - param delayTime 延迟时间
> - param args 传输参数
> - returns func执行结果(Promise)

### flip
>
> - t
> - description
> - param func 要翻转参数的函数
> - param args 反转参数
> - returns

### memoize
>
> - description 待制作
> - param func
> - param len
> - returns

## math

### add
>
> - description 两数求和
> - param augend 加数
> - param addend 被加数
> - returns 和

### ceil
>
> - description 向上取整的值(没有对number边界值[Infinity值处理])
> - param num 要向上舍入的值
> - param precision 精度
> - returns

### divide
>
> - description 相除
> - param dividend 除数
> - param divisor 被除数
> - returns 商

### floor
>
> - description 向下取整(没有对number边界值[Infinity值处理])
> - param num 待向下舍入的值
> - param precision 精度
> - returns 向下取整

### max
>
> - description 求最大值(只会判断有效值)
> - param list 数组
> - returns 最大值

### maxBy
>
> - description 求最大值
> - param list 要迭代数组
> - param itteratee 迭代函数 / key
> - returns

### mean
>
> - description 求平均值
> - param list 要迭代的数组
> - returns 平均值

### meanBy
>
> - description 求平均数
> - param list 要迭代的数组
> - param itteratee 迭代函数 / key
> - returns 平均数

### 最小值
>
> - description 求最小值
> - param list 要迭代的数组
> - returns 最小值

### minBy
>
> - description 求最小值
> - param list 要迭代的数组
> - param itteratee 迭代函数 / key
> - returns 最小值

### sum
>
> - description 求和
> - param list 要迭代的数组
> - returns 总和

### sumBy
>
> - description 求和
> - param list 要迭代的数组
> - param itteratee 迭代函数 / key
> - returns 总和

### multiply
>
> - description 相乘
> - param augend 乘数
> - param addend 被乘数
> - returns 积

### round
>
> - description 四舍五入
> - param num 要四舍五入的数
> - param precision 精度
> - returns 四舍五入的数字

## method

### id
>
> - description id
> - param length [1<=length, default 10]
> - returns id

### uuid
>
> - description uuid
> - param {string} template uuid 的格式 default:'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'
> - returns {string} uuid
> - description 生成随机uid

### uniqueId
>
> - description id
> - param prefix id 前缀

### identity
>
> - description 返回首个提供参数
> - param value 任何值
> - returns 首个值

## number

### isEffectNumber
>
> - description 是否为js的有效区间的数
> - param number num
> - returns boolean

### isFloat
>
> - description 判断数是否为浮点型
> - param num 待检测的数据类型
> - returns boolean

### clamp
>
> - description 限制在lower和upper之间
> - param num 被限制的值
> - param lower 下限
> - param upper 上限
> - returns 返回被限制的值

### inRange
>
> - description 判断是否在该范围
> - param num 要检查的值
> - param [start=0] 开始范围
> - param end 结束范围
> - returns boolean

### random
>
> - description 随机数
> - param lower 下限
> - param upper 上限
> - param floating 是否返回浮点数

### between
>
> - description 判断值是否在两值之间
> - param value 待判断值
> - param start 起始值
> - param end 结束值(不包含该值)
> - returns

## object

### assign
>
> - description 合并对象
> - param 来源对象
> - returns 合并后的对象

### assignIn
>
> - description 合并对象(没有实现)
> - param 来源对象
> - returns 合并后的对象

## string

## test

## time

## type

## util

### defaultValue
>
> - description 判断默认值放回对应的值
> - param key 需要判断的变量
> - param value 默认值
> - returns
