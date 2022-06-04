// intersection 求取数组的交集
//=> [1, 2]
intersection([1, 2, 2], [1, 2, 2], [1, 2]);
// 将多个数组合并为 1 个数组，推荐使用 reduce

function intersection(...args: any[]) {
  let arr = args;
  let newArr = arr.reduce((res, cur) => {
    // 配合 filter + [].includes(item) 可以对上层结果进行过滤
    res.filter((i) => cur.includes(i));
    return [...new Set(res)]; // 数组去重
  }); // 如果没有第二个参数，则从首项开始遍历
  console.log(newArr);
}
