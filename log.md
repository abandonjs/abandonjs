## 3.4.0

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
