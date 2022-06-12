// 使用 JS 如何生成一个随机字符串

// 将 ASCII 转化为 字符串
random_v1(6);
random_v1(4);

// 使用 36 进制对 Math.random() 转化，将转化后的去除多余的 0. 字符
random_v2(6);
random_v2(4);

// 大写字母：65~90
// 小写字母：97~122
// 数字：48-57
function random_v1(num: number) {
  let b = new Array(num)
    .fill(0)
    .map(() => String.fromCharCode(generateAcsii()))
    .join("");
  console.log(b);
}

function generateAcsii() {
  // 生成 [65,90] && [97,122] && [48,51]
  let a = Math.floor(Math.random() * 62); // [0,62]
  if (a < 26) {
    //  返回 大写字母 的 ASCII
    return a + 65;
  } else if (a >= 26 && a < 52) {
    //  返回 小写字母 的 ASCII
    return a - 26 + 97;
  } else {
    //  返回 数字 的 ASCII
    return a - 52 + 48;
  }
}

function random_v2(num: number) {
  console.log(Math.random().toString(36).substr(2, num));
}
