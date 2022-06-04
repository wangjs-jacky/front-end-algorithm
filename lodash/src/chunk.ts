// chunk 函数：对数组进行分组
// 技巧： Math.floor(i/size) 可以快速生成 0000 1111 2222 标识序列
chunkDemo();

function chunkDemo() {
  console.log("\nchunkDemo:");

  // 快速生成自增矩阵
  let arr = generateQuickArray(30);

  // 分组
  chunk(arr, 5);
}

function generateQuickArray(n: number) {
  return [...new Array(n).keys()];
}

function chunk(list: any[], size: number) {
  const res = [];
  for (let i = 0; i < list.length; i++) {
    const index = Math.floor(i / size);
    res[index] = res[index] || [];
    res[index].push(list[i]);
  }
  console.log(res);
  //   return res;
}
