// reduce
reduce_v1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y, 100);
reduce_v1([1, 2, 3, 4, 5, , , , , , , , , , ,], (x, y) => x + y);

reduce_v2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y, 100);
reduce_v2([1, 2, 3, 4, 5, , , , , , , , , , ,], (x, y) => x + y);

var getLength = shallowProperty("length");
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

function reduce_v1(arr, fn, init) {
  console.log("\nreduce_v2:");
  let pre = init ? init : arr[0];
  let startIndex = init ? 0 : 1;
  // 使用 for 遍历也是 ok 的，就是没有办法过滤 undefined ，需另写代码
  for (let i = startIndex; i < arr.length; i++) {
    pre = fn(pre, arr[i]);
  }
  console.log(pre);
  return pre;
}

function reduce_v2(arr, fn, init) {
  console.log("\nreduce:");
  let pre = init ? init : arr[0];
  let startIndex = init ? 0 : 1;
  //   这里使用 forEach 进行循环遍历，可以过滤掉 undefined 的情况
  arr.slice(startIndex).forEach((cur) => {
    pre = fn(pre, cur);
  });
  console.log(pre);
  return pre;
}

function isArrayLike(collection) {
  var length = getLength(collection); // shallowProperty("length")(collection) 等价于 collection.length 否则 undefined
  return typeof length == "number" && length >= 0 && length <= MAX_ARRAY_INDEX; // 通过判断是否为数字来判断是否为一个 ArrayLike 的东西
}

var createReduce = function (dir) {
  var reducer = function (obj, iteratee, memo, initial) {
    var keys = !isArrayLike(obj) && _.keys(obj),
      length = (keys || obj).length,
      index = dir > 0 ? 0 : length - 1;
    if (!initial) {
      memo = obj[keys ? keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length; index += dir) {
      var currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  return function (obj, iteratee, memo, context) {
    var initial = arguments.length >= 3;
    return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
  };
};

console.log(
  "\nreduce:",
  createReduce(1)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y, 100)
);

function optimizeCb(func, context, argCount) {
  if (context === void 0) return func; // 对环境进行处理
  switch (argCount == null ? 3 : argCount) { // argCount 对 fn 一共可以接受多少个数的参数
    case 1:
      return function (value) {
        return func.call(context, value);
      };

    case 3:
      return function (value, index, collection) {
        return func.call(context, value, index, collection);
      };
    case 4:
      return function (accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
  }
  // 对于 fnc 可以接受无穷多的数字，这就没办法处理了。
  return function () {
    return func.apply(context, arguments);
  };
}

// 如何封装一个方法，可以安全的获取到 obj 的一个属性
function shallowProperty(key) {
  return function (obj) {
    return obj == null ? void 0 : obj[key];
  };
}
