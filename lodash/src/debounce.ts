// 构造环境
let obj = { a: "1", fn: (a: number, b: number) => {} };
//  准备 fn
function fn(a: number, b: number) {
  console.log("this", this); // 需要检测 this
  console.log("success:", a + b);
}
// 将 fn 绑定在 环境中
// obj.fn = debounce(fn, 500);
obj.fn = debounce_v2(fn, 500);

// 开始测试：
console.log("\ntest....");
obj.fn(1, 2);
obj.fn(2, 3);
obj.fn(3, 4);
obj.fn(4, 5);
obj.fn(5, 6);
obj.fn(6, 7);
obj.fn(7, 8); // 只有此函数被触发

function debounce(fn: Function, delay: number) {
  let timer = null;
  if (typeof fn !== "function") {
    throw new Error("请输入function");
  }
  return function (...args: number[]) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args); // apply 接受数组
      // 注意：不能写： fn(...args) 需要传入真实调用的环境
    }, delay);
  };
}

function debounce_v2(fn: Function, delay: number) {
  let timer = null;
  if (typeof fn !== "function") {
    throw new Error("请输入function");
  }
  return function (...args: number[]) {
    let that = this; // 保留真实的 env
    if (timer) {
      clearTimeout(timer);
    }
    // 区别在： setTimeout 中使用的使用 function 写法而非箭头函数
    timer = setTimeout(function () {
      fn.apply(that, args);
    }, delay);
  };
}
