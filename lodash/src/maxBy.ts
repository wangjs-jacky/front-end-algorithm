// 实现一个函数 maxBy，根据给定条件找到最大的数组项
const data = [
  { value: 6, a: "1" },
  { value: 6, a: "2" },
  { value: 2, a: "3" },
  { value: 4, a: "4" },
];
// => { value: 6 }

// 使用 Array.sort() 排序后取出第 0 项
maxBy_v1(data, (x) => x.value);

// reduce 可以将 多个 item 合并为一个 item
maxBy_v2(data, (x) => x.value);

// 如果返回 reduce 时，返回 [], 比较时取前一项的[0]
maxBy_v3(data, (x) => x.value);

// reduce 从第二项开始遍历的写法技巧：
// reduce.slice(1).reduce((pre,cur)=>...,[pre]);

function maxBy_v1(data: any[], keyBy: (x: any) => any) {
  console.log("\nmaxBy_v1:");
  let a = data.sort((a, b) => {
    return keyBy(b) - keyBy(a);
  });
  console.log(a[0]);
}

function maxBy_v2(data: any[], keyBy: (x: any) => any) {
  console.log("\nmaxBy_v2:");
  // 用 keyBy 作为比较条件，返回 x 或 y
  let arr = data.reduce((x, y) => (keyBy(x) > keyBy(y) ? x : y));
  console.log(arr);
}

function maxBy_v3(data: any[], keyBy: (x: any) => any) {
  console.log("\nmaxBy_v3:");
  // 支持返回多个项
  let arr = data.slice(1).reduce(
    (acc, x) => {
      if (keyBy(x) > keyBy(acc[0])) {
        // 使用上一项的第 0 项去比较
        return [x]; // 每次返回一个数组
      }
      if (keyBy(x) === keyBy(acc[0])) {
        return [...acc, x];
      }
      return acc;
    },
    [data[0]]
  );
  console.log(arr);
}
