// 节流函数

// ES6 写法
function throttle_v1(fn, delay) {
  let past = 0;
  let timer = null;
  return function (...args) {
    let now = Date.now();
    if (now - past > delay) {
      fn.apply(this, args); // apply 接受数组
      past = now;
    } else {
      // 此处写 debounce 代码
      // 含义：小于时长时，最后一次点击仍去触发
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
  };
}

// ES5 写法
function throttle_v2(fn, delay) {
  let past = 0;
  let timer = null;
  return function () {
    let that = this; // 环境
    let now = Date.now();
    if (now - past > delay) {
      fn.apply(this, arguments);
      past = now;
    } else {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        fn.apply(that, arguments);
      }, delay);
    }
  };
}

try {
  window.onscroll = throttle_v2(function () {
    console.log("scroll");
  }, 2000);
} catch (error) {
  console.log("请在浏览器端尝试");
}
