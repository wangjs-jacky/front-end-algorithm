// 实现 bind
// 功能：延时调用

Function.prototype.bind_v1 = bind_v1;
Function.prototype.bind_v2 = bind_v2;
Function.prototype.bind_v3 = bind_v3;
Function.prototype.bind_v4 = bind_v4;

testBind_v1();
testBind_v2();
testBind_v3();
testBind_v4();

function testBind_v1() {
  console.log("\ntestBind_v1:");
  const fn2 = fn1.bind_v1({ c: "2" });
  fn2(1, 2);
}
function testBind_v2() {
  console.log("\ntestBind_v2:");
  const fn2 = fn1.bind_v2({ c: "2" });
  fn2(1, 2);
}
function testBind_v3() {
  console.log("\ntestBind_v3:");
  const fn2 = fn1.bind_v3({ c: "2" });
  fn2(1, 2);
}
function testBind_v4() {
  console.log("\ntestBind_v4:");
  const fn2 = fn1.bind_v4({ c: "2" });
  new fn2(1, 2);
}

function fn1(a, b) {
  let c = "1";
  console.log("当前 fn1 中的 this 环境：", this);
  console.log("结果是：", a + b);
  return a + b;
}

function bind_v1(newThis, ...args) {
  const fn = this; // this 即 fn.bind_v1 时的 fn
  return function () {
    // 使用 function 返回时，这里的 this 已经改变，需要用传入的this；
    return fn.apply(newThis, args);
  };
}

function bind_v2(newThis, ...args) {
  const fn = this;
  return function (...args2) {
    return fn.call(newThis, ...args, ...args2);
    // return fn.apply(newThis,[...args,...args2]);
  };
}

function bind_v3() {
  // 不允许使用 es6 语法
  var newThis = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  //  简化写法为： let args = arguments.slice(1);
  let fn = this;
  if (typeof fn !== "function") {
    throw new Error("bind 必须绑定在函数上");
  }
  return function () {
    var args2 = Array.prototype.slice.call(arguments, 0);
    //  简化写法为： args2 = arguments;
    return fn.apply(newThis, args.concat(args2)); // 此时只能使用 fn.apply + concat 语法去拼接
  };
}

function bind_v4(newThis, ...args) {
  // 考虑 new 的情况
  const fn = this;
  // 注意点：一定要 return function(){} 为了能在函数体内部获取到 实例的 this 指针。
  const resultFn = function (...args2) {
    return fn.call(
      this instanceof resultFn ? this : newThis,
      ...args,
      ...args2
    );
  };
  return resultFn;
}
