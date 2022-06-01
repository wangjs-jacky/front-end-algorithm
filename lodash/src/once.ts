const onceF = once((x: number) => {
  return x;
});
console.log(onceF(3)); // 只会执行这个
console.log(onceF(4));
console.log(onceF(5));

function once(fn: (x: number) => void) {
  let isCalled = false;
  let res: number;
  return function (...args) {
    if (isCalled) return res;
     res = fn.apply(this, args); // apply 接受数组
    isCalled = true;
    return res;
  };
}
