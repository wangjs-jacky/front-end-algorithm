// 实现 lodash 的 keyBy 函数
const data = [
  { dir: "left", code: 97 },
  { dir: "right", code: 100 },
];
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }

keyBy(data, (x) => x.dir);

function keyBy(data, by: (x: any) => any) {
  let a = data.reduce((res, cur) => {
    res[by(cur)] = cur;
    return res;
  }, {});  // 使用对象作为初始存储
  console.log(a);
}

export {}; // 欺骗 ts 为一个模块作用域
