// reduce
reduce_v1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y, 100);
reduce_v1([1, 2, 3, 4, 5, , , , , , , , , , ,], (x, y) => x + y);

reduce_v2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y, 100);
reduce_v2([1, 2, 3, 4, 5, , , , , , , , , , ,], (x, y) => x + y);

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
