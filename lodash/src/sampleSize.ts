// sample: Math.random 0~arr.length
// sampleSize: shuffle 取前N项
// 说明：从数组中随机取 N 个元素
let list = [1, 2, 3, 4, 5, 6, 7];
sampleSize(list, 5);

function sampleSize(list: number[], N) {
  console.log(shuffle(list).slice(0, N));
  // return shuffle(list).slice(0, N)
}

function shuffle(list: number[]) {
  return list.sort((a, b) => Math.random() - 0.5);
}
