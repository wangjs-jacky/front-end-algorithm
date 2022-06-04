// groupBy:
// { key - [] }这种形式

groupBy(
  [
    { id: 1, name: "山月", sex: "male" },
    { id: 2, name: "张三", sex: "female" },
    { id: 3, name: "李四", sex: "female" },
  ],
  (x) => x.sex
);

function groupBy(arr: any[], by: (x: any) => any) {
  console.log("\ngroupBy:");
  let res = arr.reduce((res, cur) => {
    const key = by(cur);
    if (res[key]) {
      // 如果存在，则push到对应的数组
      res[key].push(cur);
    } else {
      // 如果不存在，则使用 [] 初始化
      res[key] = [cur];
    }
    return res;
  }, []);
  console.log(res);
}
