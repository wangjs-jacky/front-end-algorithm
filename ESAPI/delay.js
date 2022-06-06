// 实现一个 delay 函数格式如下，在 N 毫秒之后执行函数，并以函数结果作为返回值
// delay(fn,seconds,fn所需的参数);

const fnc = (str1, str2) => str1 + "," + str2;

delay(fnc, 2000, "args1", "args2").then((o) => console.log(o));

function delay(func, seconds, ...args) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 此写法是使用 Promise.resolve().then(resolve) 的写法
      Promise.resolve(func(...args)).then(resolve, reject);
      // 我想的写法是：
      // resolve(func(...args));
    }, seconds);
  });
}
