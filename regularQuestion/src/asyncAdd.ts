/*
  请实现一个 sum 函数，接收一个数组 arr 进行累加，并且只能使用 add 异步方法
  add 函数已实现，模拟异步请求后端返回一个相加后的值
*/

// 方案一：reduce ，.then 同步特性构建 promise 串
sum_v1([1, 2, 3, 4, 5]).then((o) => console.log(o));
sum_v2([1, 2, 3, 4, 5]).then((o) => console.log(o));
sum_v3([1, 2, 3, 4, 5]).then((o) => console.log(o));

// 方案二：将数组转化为 promiseTask，最后使用 Promise.all 执行
// 此时，结果仍为一个数组，如 [res1,res2,res3,...] 继续递归
// 截止条件为：[res]
sum_v4([1, 2, 3, 4, 5]).then((o) => console.log(o));

// 方案三：控制并发，将 sum_v4 中的 promise.all 改为 promise.map(list,mapper,concurrent)

function sum_v1(arr: any[]) {
  return arr.reduce((res, cur) => {
    // 包裹上层返回结果，.then 是同步代码（其实这种写法不好，因为res已经是一个Promise，再resolve一下感觉歧义）;
    return Promise.resolve(res).then((pre) => add(pre, cur));
  });
}

function sum_v2(arr: any[]) {
  // 使用 arr.slice(1).reduce(()=>{},arr[0]) 的方式处理初始值
  return arr.slice(1).reduce((res, cur) => {
    return res.then((pre) => add(pre, cur));
  }, Promise.resolve(arr[0]));
}

async function sum_v3(arr: any[]) {
  let s = arr[0];
  for (let i = 1; i < arr.length; i++) {
    s = await add(s, arr[i]);
  }
  return s;
}

function sum_v4(arr: any[]) {
  // 递归截止条件，结果为： [[ 15 ]]
  if (arr.length === 1) return arr[0];
  // 将 arr 封装为 promiseTask
  const promiseTasks = chunk(arr, 2).map(([x, y]) => {
    return y === undefined ? x : add(x, y);
  }); // 结果为：[add1,add2,add3,x]
  return Promise.all(promiseTasks).then((list) => sum_v4(list));
}

function add(a, b) {
  return Promise.resolve(a + b);
}

function chunk(list, size) {
  const res = [];
  for (let i = 0; i < list.length; i++) {
    const index = Math.floor(i / size);
    res[index] = res[index] || [];
    res[index].push(list[i]);
  }
  return res;
}
