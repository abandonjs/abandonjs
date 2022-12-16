# [ruihuag](https://guanruihua.github.io/#/)

- 常用方法的封装

## 安装

```shell
pnpm install -D abandonjs
```

## 使用

```js
import { type } from 'abandonjs'
```

## 补充说明

> `@version`: 最新更新的版本

## 升级日志

### 2.3.7

- 将类型判断方法归为同一类

### 2.3.6

- 添加 MapEntity 方法

### 2.3.4

- 修复 Circular dependency 问题
- 修复若干bug
- 添加 function相关的 类型判断方法
- 添加 timezone 方法

### 2.3.0

- 重构, 添加以及优化类型判断相关方法

### 2.2.1

- 优化部分`string`相关方法

### 2.2.0

- 添加:
  - `isEndOfStrings`, `isFile`, `isImage`, `isH5Video`, `isPdf`, `isWord`, `isExcel` 等
  - `stringify`

- 移除
  - `asyncCatchError`
