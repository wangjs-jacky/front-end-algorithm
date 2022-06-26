// 帮助函数：
// 决定一个 collection 是否为一个 array 或者 object
// 相关的文章见：http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength

import { toString } from "./aliasFun";

// JS 中最大数字
const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

function isArrayLike(collection: any) {
  // 由于不确定 collection 是什么属性，封装一个简单函数
  // 功能等价于： collection？.length
  const length = getLength(collection);
  return typeof length === "number" && length >= 0 && length <= MAX_ARRAY_INDEX;
}

const getLength = shallowProperty("length");

// 返回: 获取接受 obj 并获取 key 属性的函数
// 特性：安全获取某个属性，主要是处理 null 对象
function shallowProperty(key: string) {
  return function (obj) {
    return obj === null ? void 0 : obj[key];
  };
}

// 判断 obj 需要满足三个条件：
// 1. function
// 2. typeof 是 obj
// 3. 以及不为 null 这里使用 !!obj 来排除这种情况。
function isObject(obj) {
  var type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
}

const isArray = function (obj) {
  return toString.call(obj) === "[object Array]";
};

// Object.keys 可通过 for...in 语法 + hasOwnPorperty 代替
function keys(obj) {
  // 判断是否为对象
  if (!isObject(obj)) return [];

  // 如果存在 Object.keys 就用原生的函数
  // if (nativeKeys) return nativeKeys(obj);

  // 使用 for...in 代替 Object.keys
  let keys = [];
  for (var key in obj) if (has$1(obj, key)) keys.push(key);

  return keys;
}

// obj 上是否有 key 这个属性
function has$1(obj, key) {
  return obj != null && Object.prototype.hasOwnProperty.call(obj, key);
}

export { isArrayLike, isObject, isArray, keys };
