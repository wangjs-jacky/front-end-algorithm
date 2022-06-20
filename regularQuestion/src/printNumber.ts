// 打印数字：
printNumber();

function printNumber() {
  console.log("\nprintNumber:");
  console.log("11", 11);
  console.log(".11", 0.11);
  console.log("11.", 11);
  // @ts-ignore
  console.log("011", 011); // 0o开头默认八进制
  console.log("080", 080);
  console.log("0o11", 0o11); // 0o开头默认八进制
  console.log("0b11", 0b11); // 2进制
  console.log("0x11", 0x11); // 16进制
  console.log("11e2", 11e2); // 科学计数
  console.log("11 .toString()", (11).toString());
  // console.log("11.toString()",11.toString(); // 报错
}
