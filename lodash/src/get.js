// 函数介绍：
// lodash 的 get 函数可以深层获取属性，避免使用如：
// o.a && o.a.b && o.a.b.c && o.a.b.c.d 的情况
const object = { a: [{ b: { c: 3 } }] };

// 难点：使用正则表达式对不同规则进行 normalize 化。

// 1. 使用链式操作符，obj?.[属性] 截止条件为obj为 undefined
useChainOperator(object);

// 2. 使用 obj.hasOwnProperty 判断数组或对象是是否有属性
useES5(object);

// 补充1：数组上可通过 hasOwnProperty 判断
arrayHasOwnPropertyMethod();

// 补充2： replace 可以分组，通过 $1 以及 $2 对获取结果进行操作
replaceGroupTrick();

function useChainOperator(object) {
  console.log("\nuseChainOperator:");
  get_v1(object, "a[0].b.c");
  get_v1(object, 'a[0]["b"]["c"]');
  get_v1(object, "a[100].b.c", 10086);
}

function useES5(object) {
  console.log("\nuseChainOperator:");
  get_v2(object, "a[0].b.c");
  get_v2(object, 'a[0]["b"]["c"]');
  get_v2(object, "a[100].b.c", 10086);
}

function get_v1(source, path, defaultValue) {
  // 将路径改写统一的格式：
  const pathArr = normalizePath(path).split(".");
  let result = source;
  for (let path of pathArr) {
    // 使用链式操作符，结果有可能为undefined
    result = result?.[path];
  }
  let res = result === undefined ? defaultValue : result;
  console.log(res);
  return res;
}

function get_v2(source, path, defaultValue) {
  const pathArr = normalizePath(path).split(".");
  let result = source;
  for (let path of pathArr) {
    if (result.hasOwnProperty(path)) {
      result = result[path];
    } else {
      result = undefined;
      break; // 跳出for循环
    }
  }
  let res = result === undefined ? defaultValue : result;
  console.log(res);
  return res;
}

function normalizePath(path) {
  // a[0].b.c 改写为： a.0.b.c
  let str = path.replace(/\[(\w+)\]/g, ".$1");
  // a["a"].b.c 改写为： a.a.b.c
  let _str = str.replace(/\["(\w+)"\]/g, ".$1");
  return _str;
  // 简化版： return path.replace(/\[(\w+)\]/g, ".$1").replace(/\["(\w+)"\]/g, ".$1");
}

function arrayHasOwnPropertyMethod() {
  console.log("\nArrayhasMethod");
  let arr = ["a", "b", "c"];
  // 注： 遍历 数组的key ，推荐使用如下的写法
  for (let key of Object.keys(arr)) {
    console.log(key, arr.hasOwnProperty(key));
  }
}

function replaceGroupTrick() {
  // 正则规则： \w 匹配的是： [a-zA-Z0-9_]常规字母数字+下划线
  // 通过 分组 的形式，可以将 不同的 group 调换位置,如下：
  console.log("\nreplaceGroupTrick:");
  let str = "aBC_123";
  let _str = str.replace(/([a-zA-Z]+)_([0-9]+)/g, "$2_$1");
  console.log(_str);
}
