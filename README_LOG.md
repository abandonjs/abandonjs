## 3.8.0
- 升级打包依赖
- 重构 like 和 equal 方法

## 3.7.1

- fix: `format`: 完善方法

## 3.7.0

- add `padNumber`: 填充数字

## 3.6.0

- add `like`, 模糊匹配,
- update: `stringify`: 空值直接返回对应空值转字符串

## 3.5.2

- 添加 `parse`

## 3.5.0

- 取消 `asura-eye` 方法的导出, 需要使用需单独安装该包
- 重写`loop`相关方法, 去除除`loop*`相关方法
- 移除`toPromise`, `flip`, `from`, `limitTime`, `after`, `before`, `ary`
- 修复已知bug

## 3.4.0

- 添加 jest 测试方法
- 备注风格改成 jsdoc 风格
- 重构: pageQuery
- maxSort 改名 descSort
- minSort 改名 ascSort

## 3.3.0

- `matchNumberValue` 改为`compareNumber`
- `matchValue` 改为`compareValue`

## 3.2.0

- `changeCase` 拆分 为 `toFirstUpperCase`, `toFirstLowerCase`, `toUpperCase`, `toLowerCase`
- `ban`, 重构并改名为 `limitTime`
- `throwError` 重构并改名为 `guard`
- `asyncThrowError` 重构并改名为 `asyncGuard`
- 去除:  `logAsync`

## 3.0.0

- 重构: `indexOf`, `includes`
- 修改:
  - `getLength` 取代 `size`
  - `omit` 取代 `omitRecord`, 添加对 `Map` 的支持
- 去除: `group`, `groupToMap`

## 2.7.0

- 替换类型判断包为`asura-eye`
- 去除 pick , 功能和 select 重复
- 去除 difference , 功能和 filter 重复
