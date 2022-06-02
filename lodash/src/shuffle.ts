let arr = [1, 2, 3, 4, 5, 6];

// 使用 Array.sort 的原理进行洗牌
shuffle_v1(arr);

// 使用
shuffle_v2(arr);

// Array.sort 的使用
sortDemo(arr);

function shuffle_v1(list: number[]) {
  console.log("\nshuffle_v1:");
  let arr = list.sort((x, y) => Math.random() - 0.5);
  console.log(arr);
}

function shuffle_v2(list: number[]) {
  console.log("\nshuffle_v2:");
  let result = [...list]; // 浅拷贝
  // 倒叙的目的：可以直接通过 sample 函数从前 N 项中随机生成一个数字索引
  for (let i = list.length - 1; i > 0; i--) {
    //  将第 N 项数字 与 前 N 项数字随机选一相互交换
    const swapIndex = Math.floor(Math.random() * (i + 1)); // sample 函数
    [result[i], result[swapIndex]] = [result[swapIndex], result[i]]; // 互换
  }
  console.log(result);
}

function sortDemo(arr: any[]) {
  console.log("\nArray.sort 的 DEMO 示例:");

  // 按顺序取出两项：原地不变
  sortAlwaysReturn0(arr);

  // return 1: 顺序
  sortAlwaysReturn1(arr);

  // return -1: 逆序
  sortAlwaysReturnNegative1(arr);
}

function sortAlwaysReturn0(arr: any[]) {
  console.log("\nsortAlwaysReturn0:");
  let _arr = arr.sort((second, first) => {
    console.log("提取项：", first, second);
    return 0;
  });
  console.log("arr:", _arr);
}

function sortAlwaysReturn1(arr: any[]) {
  console.log("\nsortAlwaysReturn1:");
  let _arr = arr.sort((second, first) => {
    return 1;
  });
  console.log("arr:", _arr);
}

function sortAlwaysReturnNegative1(arr: any[]) {
  console.log("\nsortAlwaysReturnNegative1:");
  let _arr = arr.sort((second, first) => {
    return -1;
  });
  console.log("arr:", _arr);
}
