## 前言

本项目仓库用于：收集和整理常见的的前端手写题。

## 涉及到题目：

- [x] 手写发布订阅模式：`eventHub`

- [ ] `for` 循环遍历
  - [x] `forEach` 遍历：`1.js`
  - [x] `for...of` 遍历：`2.js`
  - [x] `for...in` 与 `for...of` 遍历比较：`3.js`

- [ ] `lodash` 库的模拟实现
  - [x] 驼峰转换：`CamelCase.ts`(正则)
  - [x] 防抖函数：`debounce.ts`(时间戳+apply)
  - [x] 节流函数：`throttle.ts`
  - [x] 随机函数：`sample.js`(Math.random)
  - [x] 随机函数(N版)： `sampleSize.ts`(shuffle+slice)
  - [x] 单次执行函数：`once.ts`(函数作用域)
  - [ ] 深拷贝函数：`cloneDeep`
  - [x] 深比较函数：`deepEqual`(递归+Object.keys())
  - [x] 深度 get 属性函数：`get`(正则处理+replace与$符号)
  - [x] 洗牌函数：`shuffle`（Array.sort+Math.random()-0.5）
  - [ ] 模板引擎：`template`
  - [x] 分组函数：`chunk`（Math.floor(i/size)）可以对索引分组
  - [x] 统计相关：`maxBy`(reduce返回单个和多个区别)、`groupBy`(reduce:{key-[]}) 、`keyBy`(reduce:{})
  - [x] 数组交集函数：`intersection`(reduce、filter、includes)

- [ ]  `EMScripts API`  

  - [x] 绑定函数：`bind` 函数
  - [ ] 指针修订函数：`call` 函数、以及 `apply` 函数
  - [x] 睡眠函数：`sleep` 函数（`setTimeout`包一层`promise`）
  - [x] 延迟执行函数：`delay`函数 （传入的`fn` 延迟执行）
  - [ ] 基于`` `PromiseA+` 规范的 `Promise` 
    - [ ] `Promise.all` 
    - [ ] `Promise.any`
    - [ ] `Promise.race`
    - [ ] `Promise.allSettled`
    - [ ] `Promise.retry`

  - [x] `Array.isArray`
  - [x] `Array.prototype.reduce`
  - [x] `Array.prototype.flat`
  - [x] `String.prototype.trim`

- [ ] 常规考题：`regularQuestion`

  - [x] 是否可被3、5整除：`fizzBuzz`

  - [x] 异步add相加：`asyncAdd.ts`

    循环构建`.then` 的两种写法、`for`循环+`await` 写法、二分递归写法、并发控制写法。

  - [x] 无限累加的 `sum` 函数

  - [ ] 统计数组总最大的数/第二大的数

  - [ ] 统计字符串中出现次数最多的字符

  - [ ] 对数字进行编码压缩

  - [ ] 对 `URL` 的 `querystring` 进行编码和解码

  - [x] `promise` + `mapper` 函数 + 并行控制：`promise_map`

    - [x] 并行：通过 `for` 循环实现。

      串行，通过构造`next=()=>{ next() }` 递归执行实现。只要规定好函数体内部的`next` 的执行时机。

    - [x] :star:如何控制异步任务的串行，这里思考了三种写法：

      - [x] 回调地狱写法：`useCallback()`

      - [x] 封装 `promiseTask` 解决串行问题,使用`callback()` 标识任务结束，`callback` 由 `promisify` 传入 `resolve()`  函数，通过循环`.then`  操作串联 `promise` 操作。

      - [x] 自定义 `next`函数。

        模拟回调地狱与 `callback`写法，构建`next=()=>{ task(next) }` +  闭包缓存 `task` 变量。

## 题库收集：

1. [程序员山月](https://q.shanyue.tech/roadmap/code.html)
2. [for 循环中断](https://segmentfault.com/a/1190000020176190)
2. [36道手写题](https://juejin.cn/post/6946022649768181774)
2. [代码整洁之道](https://github.com/beginor/clean-code-javascript)
