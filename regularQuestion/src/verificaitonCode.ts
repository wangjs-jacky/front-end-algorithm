// 生成六位手机验证码(verification code)

// 1. 每位可重复, 6次随机生成
generateVerificationCode_v1(6);

// 2. 6个数字不会重复
generateVerificationCode_v2(6);

function generateVerificationCode_v1(n: number) {
  console.log("\ngenerateVerificationCode_v1:");
  // Math.floor(Math.random() * 10) 范围在 0~10
  let arr = new Array(n).fill(0).map(() => Math.floor(Math.random() * 10));
  console.log(n, "位验证码：", arr.join(""));
}

function generateVerificationCode_v2(n: number) {
  console.log("\ngenerateVerificationCode_v2:");
  let arr = shuffle_v1([...new Array(10).keys()]).slice(0, n);
  console.log(n, "位验证码：", arr.join(""));
}

// 洗牌函数：
function shuffle_v1(list: any[]) {
  return list.sort((x, y) => Math.random() - 0.5);
}
